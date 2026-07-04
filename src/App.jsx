import { useState, useEffect } from 'react';
import { 
  Play, RotateCcw, Clock, Check, X, ChevronRight, Home, Database, AlertCircle, 
  Crown, Ship, Scroll, HelpCircle, MessageSquare, BookOpen, List, Smile, Zap,
  Pause, Eye, EyeOff, Heart, Trophy, Users, User, ArrowLeft, Lightbulb, Sparkles, Brain, ThumbsDown
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { mockDatabase } from './lib/mockDatabase';

// Componente do Cronômetro Isolado para evitar re-renderizações e piscadas de tela no pai
function Cronometro({ tempoInicial, ativo, pausado, tempoResetKey, onTempoAcabou }) {
  const [tempo, setTempo] = useState(tempoInicial);

  useEffect(() => {
    setTempo(tempoInicial);
  }, [tempoInicial, tempoResetKey]);

  useEffect(() => {
    let intervalo = null;
    if (ativo && !pausado && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((t) => {
          if (t <= 1) {
            clearInterval(intervalo);
            onTempoAcabou();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [ativo, pausado, tempo, onTempoAcabou]);

  return (
    <span className={`${tempo <= 10 && !pausado ? 'text-red-300 animate-pulse font-black' : ''} ${pausado ? 'opacity-50' : ''}`}>
      00:{tempo.toString().padStart(2, '0')}
    </span>
  );
}

export default function App() {
  const [telaAtual, setTelaAtual] = useState('modalidade'); // 'modalidade' | 'menu' | 'regras' | 'jogando' | 'resultado'
  const [modalidadeAtiva, setModalidadeAtiva] = useState(null); // 'dicas' | 'acao' | 'quiz'
  const [jogos, setJogos] = useState([]);
  const [jogoAtivo, setJogoAtivo] = useState(null);
  const [cartasAtivas, setCartasAtivas] = useState([]);
  const [cartaAtualIndex, setCartaAtualIndex] = useState(0);
  
  // Configurações de Partida
  const [dificuldadeSelecionada, setDificuldadeSelecionada] = useState('facil');
  
  // Modo de Jogo por Equipes
  const [modoJogo, setModoJogo] = useState('individual'); // 'individual' | 'equipes'
  const [quantidadeEquipes, setQuantidadeEquipes] = useState(2);
  const [equipes, setEquipes] = useState([
    { id: 1, nome: 'Equipe Leão', cor: '#EF4444', pontos: 0 },
    { id: 2, nome: 'Equipe Cordeiro', cor: '#3B82F6', pontos: 0 },
    { id: 3, nome: 'Equipe Águia', cor: '#10B981', pontos: 0 },
    { id: 4, nome: 'Equipe Pomba', cor: '#F59E0B', pontos: 0 }
  ]);
  const [equipeAtivaIndex, setEquipeAtivaIndex] = useState(0);

  // Estados de Jogo
  const [timerAtivo, setTimerAtivo] = useState(false);
  const [timerPausado, setTimerPausado] = useState(false);
  const [pontos, setPontos] = useState(0); // Usado para modo individual
  const [dicaAtual, setDicaAtual] = useState(1); 
  const [respostaRevelada, setRespostaRevelada] = useState(false);

  // Estados Específicos para o Quiz
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [quizRespondido, setQuizRespondido] = useState(false);

  // Estados Específicos do Jogo "Faz Sentido?" (Controle de Vidas de 4 Jogadores)
  const [vidasJogadores, setVidasJogadores] = useState({ 1: 3, 2: 3, 3: 3, 4: 3 });

  // Feedback do Banco de Dados
  const [loading, setLoading] = useState(true);
  const [usandoMock, setUsandoMock] = useState(false);

  // Estética
  const theme = {
    bgApp: "bg-holy-bg",
    bgCard: "bg-holy-card",
    textMain: "text-holy-text",
    textLight: "text-holy-light",
  };

  // Cores de Equipes Disponíveis
  const coresEquipes = [
    { nome: 'Vermelho', hex: '#EF4444' },
    { nome: 'Azul', hex: '#3B82F6' },
    { nome: 'Verde', hex: '#10B981' },
    { nome: 'Amarelo', hex: '#F59E0B' },
    { nome: 'Roxo', hex: '#8B5CF6' },
    { nome: 'Rosa', hex: '#EC4899' }
  ];

  // Carregar jogos do Supabase ao montar
  useEffect(() => {
    async function fetchJogos() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('jogos')
          .select('*')
          .order('nome');
        
        if (error || !data || data.length === 0) {
          throw new Error('Supabase vazio ou não configurado');
        }
        
        setJogos(data);
        setUsandoMock(false);
      } catch (err) {
        console.warn('Erro ao carregar dados do Supabase. Utilizando mock de fallback.', err);
        setJogos(mockDatabase.jogos);
        setUsandoMock(true);
      } finally {
        setLoading(false);
      }
    }
    fetchJogos();
  }, []);

  // Seleciona a modalidade e vai para o menu filtrado
  const escolherModalidade = (modalidade) => {
    setModalidadeAtiva(modalidade);
    setTelaAtual('menu');
  };

  // Abre a tela intermediária de Regras e Seleção de Dificuldade
  const verRegras = (jogo) => {
    setJogoAtivo(jogo);
    setDificuldadeSelecionada('facil');
    setModoJogo('individual');
    setQuantidadeEquipes(2);
    setEquipeAtivaIndex(0);
    setEquipes([
      { id: 1, nome: 'Equipe Leão', cor: '#EF4444', pontos: 0 },
      { id: 2, nome: 'Equipe Cordeiro', cor: '#3B82F6', pontos: 0 },
      { id: 3, nome: 'Equipe Águia', cor: '#10B981', pontos: 0 },
      { id: 4, nome: 'Equipe Pomba', cor: '#F59E0B', pontos: 0 }
    ]);
    setTelaAtual('regras');
  };

  // Inicia a partida de fato filtrando as cartas pela dificuldade e modo
  const iniciarJogo = async () => {
    setLoading(true);
    setCartaAtualIndex(0);
    setPontos(0);
    setDicaAtual(1);
    setOpcaoSelecionada(null);
    setQuizRespondido(false);
    setRespostaRevelada(false);
    setTimerPausado(false);
    setEquipeAtivaIndex(0);

    setEquipes(prev => prev.map(eq => ({ ...eq, pontos: 0 })));
    setVidasJogadores({ 1: 3, 2: 3, 3: 3, 4: 3 });

    try {
      if (usandoMock) {
        const cartasJogo = mockDatabase.cartas[jogoAtivo.id] || [];
        const cartasFiltradas = cartasJogo.filter(c => c.dificuldade === dificuldadeSelecionada);
        setCartasAtivas(cartasFiltradas);
      } else {
        const { data, error } = await supabase
          .from('cartas')
          .select('*')
          .eq('jogo_id', jogoAtivo.id)
          .eq('dificuldade', dificuldadeSelecionada);
        
        if (error || !data || data.length === 0) {
          throw new Error('Erro ao buscar cartas do Supabase');
        }
        setCartasAtivas(data);
      }
      setTelaAtual('jogando');
      setTimerAtivo(true);
    } catch (err) {
      console.warn('Erro ao buscar cartas do Supabase. Usando cartas de mock como fallback.', err);
      const cartasJogo = mockDatabase.cartas[jogoAtivo.id] || [];
      const cartasFiltradas = cartasJogo.filter(c => c.dificuldade === dificuldadeSelecionada);
      setCartasAtivas(cartasFiltradas);
      setTelaAtual('jogando');
      setTimerAtivo(true);
    } finally {
      setLoading(false);
    }
  };

  const proximaCarta = (acertou) => {
    if (modoJogo === 'individual') {
      if (acertou) setPontos(p => p + 1);
    } else {
      if (acertou) {
        setEquipes(prev => {
          const novas = [...prev];
          novas[equipeAtivaIndex].pontos += 1;
          return novas;
        });
      }
      setEquipeAtivaIndex((prev) => (prev + 1) % quantidadeEquipes);
    }
    
    setOpcaoSelecionada(null);
    setQuizRespondido(false);
    setRespostaRevelada(false);

    if (cartaAtualIndex + 1 < cartasAtivas.length) {
      setCartaAtualIndex(i => i + 1);
      setDicaAtual(1);
    } else {
      setTimerAtivo(false);
      setTelaAtual('resultado');
    }
  };

  const revelarDica = () => {
    if (dicaAtual < 3) setDicaAtual(d => d + 1);
  };

  const lidarComRespostaQuiz = (opcao, respostaCorreta) => {
    if (quizRespondido) return; 
    setOpcaoSelecionada(opcao);
    setQuizRespondido(true);

    const acertou = opcao === respostaCorreta;
    
    setTimeout(() => {
      proximaCarta(acertou);
    }, 1500);
  };

  const ajustarVida = (jogadorId, delta) => {
    setVidasJogadores(prev => {
      const novaVida = Math.max(0, Math.min(3, prev[jogadorId] + delta));
      return { ...prev, [jogadorId]: novaVida };
    });
  };

  const editarNomeEquipe = (index, novoNome) => {
    setEquipes(prev => {
      const novas = [...prev];
      novas[index].nome = novoNome;
      return novas;
    });
  };

  const editarCorEquipe = (index, novaCor) => {
    setEquipes(prev => {
      const novas = [...prev];
      novas[index].cor = novaCor;
      return novas;
    });
  };

  const MedalhaoIlustracao = ({ tipoIcone }) => {
    const props = { size: 36, className: "text-holy-card transform hover:scale-110 transition-transform duration-300" };
    
    const obterIcone = () => {
      switch (tipoIcone) {
        case 'crown': return <Crown {...props} />;
        case 'ship': return <Ship {...props} />;
        case 'scroll': return <Scroll {...props} />;
        case 'message-square': return <MessageSquare {...props} />;
        case 'book-open': return <BookOpen {...props} />;
        case 'help-circle': return <HelpCircle {...props} />;
        case 'list': return <List {...props} />;
        case 'smile': return <Smile {...props} />;
        case 'zap': return <Zap {...props} />;
        default: return <HelpCircle {...props} />;
      }
    };

    return (
      <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-orange-50 border-4 border-amber-100 shadow-inner mb-2">
        {obterIcone()}
      </div>
    );
  };

  // TELA 0: Escolha de Modalidade de Jogo
  const TelaEscolhaModalidade = () => (
    <div className="flex flex-col items-center justify-center p-6 space-y-8 w-full max-w-md mx-auto min-h-screen">
      <div className="w-full text-center space-y-4">
        {/* Ilustração Temática Hero */}
        <div className="relative w-full max-w-[240px] mx-auto rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#E0664B] aspect-[4/3] flex items-center justify-center">
          <img 
            src="/hero.png" 
            alt="Game Bless Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-1">
          <h1 className={`text-5xl font-black ${theme.textMain} tracking-tight font-sans`}>Game Bless</h1>
          <p className="text-xs text-gray-500 font-black uppercase tracking-wider">Escolha como deseja jogar hoje</p>
        </div>
      </div>

      <div className="w-full space-y-4">
        {/* Botão Modalidade: Dicas */}
        <button
          onClick={() => escolherModalidade('dicas')}
          className="w-full bg-white rounded-3xl p-5 shadow-md border border-orange-100 flex items-center text-left gap-4 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Lightbulb size={24} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-base font-black text-holy-text">Desafios de Pistas</h3>
            <p className="text-xs text-gray-500 font-medium">Adivinhe os mistérios bíblicos usando o menor número de pistas possíveis.</p>
          </div>
        </button>

        {/* Botão Modalidade: Ação */}
        <button
          onClick={() => escolherModalidade('acao')}
          className="w-full bg-white rounded-3xl p-5 shadow-md border border-orange-100 flex items-center text-left gap-4 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles size={24} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-base font-black text-holy-text">Ação & Expressão</h3>
            <p className="text-xs text-gray-500 font-medium">Mímicas corporais, proibição de palavras-chave e debates lógicos rápidos.</p>
          </div>
        </button>

        {/* Botão Modalidade: Quiz */}
        <button
          onClick={() => escolherModalidade('quiz')}
          className="w-full bg-white rounded-3xl p-5 shadow-md border border-orange-100 flex items-center text-left gap-4 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-95 group"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
            <Brain size={24} fill="currentColor" />
          </div>
          <div>
            <h3 className="text-base font-black text-holy-text">Mestres do Conhecimento</h3>
            <p className="text-xs text-gray-500 font-medium">Testes clássicos de perguntas e respostas bíblicas de múltipla escolha.</p>
          </div>
        </button>
      </div>

      {/* Indicador de Status */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 bg-black/5 px-3 py-1 rounded-full mt-2">
        {usandoMock ? (
          <>
            <AlertCircle size={12} className="text-orange-400" />
            <span>Banco Offline Ativo</span>
          </>
        ) : (
          <>
            <Database size={12} className="text-green-500" />
            <span>Banco Online Sincronizado</span>
          </>
        )}
      </div>
    </div>
  );

  const TelaMenu = () => {
    // Filtrar jogos da modalidade ativa
    const jogosFiltrados = jogos.filter(j => j.tipo === modalidadeAtiva);
    const tituloModalidade = modalidadeAtiva === 'dicas' ? '💡 Pistas e Adivinhas' : modalidadeAtiva === 'acao' ? '⚡ Ação & Expressão' : '❓ Mestres do Saber';

    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-md mx-auto min-h-screen">
        <div className="w-full flex items-center justify-between">
          <button 
            onClick={() => setTelaAtual('modalidade')} 
            className="flex items-center gap-1 text-xs font-black text-holy-card bg-white px-3.5 py-2 rounded-xl shadow-sm border border-orange-100/30 transition-all hover:bg-orange-50 active:scale-95"
          >
            <ArrowLeft size={14} /> Voltar
          </button>
          <h2 className="text-xs font-black uppercase text-gray-400 tracking-wider">{tituloModalidade}</h2>
        </div>

        <div className="w-full text-center space-y-1">
          <h1 className={`text-4xl font-extrabold ${theme.textMain} tracking-tight font-sans`}>Game Bless</h1>
          <p className="text-xs text-gray-500 font-black uppercase tracking-wider">Selecione o Baralho</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-holy-card"></div>
            <p className="text-sm text-gray-600">Carregando baralhos...</p>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-1 pb-2">
            {jogosFiltrados.map((jogo) => (
              <button
                key={jogo.id}
                onClick={() => verRegras(jogo)}
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-left group"
              >
                <div className="w-full aspect-[4/3] bg-orange-50 overflow-hidden relative border-b border-orange-100/30">
                  <img 
                    src={jogo.capa || "/hero.png"} 
                    alt={jogo.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 w-full flex-1 flex flex-col justify-between" style={{ borderTop: `4px solid ${jogo.cor}` }}>
                  <h3 className="text-xs font-black text-holy-text leading-tight group-hover:text-holy-card transition-colors min-h-[30px] flex items-center">{jogo.nome}</h3>
                  <div className="mt-2 flex items-center justify-between text-[10px] font-black text-holy-card uppercase tracking-wider">
                    <span>Selecionar</span>
                    <Play size={10} fill="currentColor" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const TelaRegras = () => (
    <div className={`flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-md mx-auto min-h-screen ${theme.bgApp} max-h-screen overflow-y-auto`}>
      <div className="bg-white p-6 rounded-3xl shadow-xl text-center space-y-5 w-full border border-orange-100">
        
        {/* Capa */}
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-orange-50 border border-orange-100 shadow-sm">
          <img src={jogoAtivo.capa || "/hero.png"} alt={jogoAtivo.nome} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-1">
          <h2 className={`text-2xl font-black ${theme.textMain}`}>{jogoAtivo.nome}</h2>
          <p className="text-xs text-gray-500 leading-relaxed font-medium px-2">{jogoAtivo.regras || 'Adivinhe os conceitos bíblicos seguindo as instruções das cartas.'}</p>
        </div>

        {/* Seleção de Dificuldade */}
        <div className="space-y-2 text-left">
          <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block text-center">Nível de Dificuldade</label>
          <div className="flex justify-between gap-2">
            {['facil', 'medio', 'dificil'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDificuldadeSelecionada(diff)}
                className={`flex-1 py-2 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
                  dificuldadeSelecionada === diff
                    ? 'bg-holy-card text-white border-holy-card shadow-sm scale-[1.02]'
                    : 'bg-orange-50/50 text-gray-500 border-orange-100 hover:bg-orange-50'
                }`}
              >
                {diff === 'facil' ? '🟢 Fácil' : diff === 'medio' ? '🟡 Médio' : '🔴 Difícil'}
              </button>
            ))}
          </div>
        </div>

        {/* Modo de Jogo e Equipes */}
        <div className="space-y-3 pt-1 text-left border-t border-orange-100/50">
          <label className="text-[10px] font-black uppercase tracking-wider text-gray-400 block text-center">Modo de Jogo</label>
          <div className="flex gap-3">
            <button
              onClick={() => setModoJogo('individual')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                modoJogo === 'individual'
                  ? 'bg-holy-text text-white border-holy-text shadow-sm'
                  : 'bg-orange-50/45 text-gray-500 border-orange-100 hover:bg-orange-50'
              }`}
            >
              <User size={14} /> Individual
            </button>
            <button
              onClick={() => setModoJogo('equipes')}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-all ${
                modoJogo === 'equipes'
                  ? 'bg-holy-text text-white border-holy-text shadow-sm'
                  : 'bg-orange-50/45 text-gray-500 border-orange-100 hover:bg-orange-50'
              }`}
            >
              <Users size={14} /> Em Equipes
            </button>
          </div>

          {/* Configuração de Equipes */}
          {modoJogo === 'equipes' && (
            <div className="space-y-3 bg-orange-50/30 p-3 rounded-2xl border border-orange-100/50 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-holy-text">Qtd. de Equipes:</span>
                <div className="flex gap-1.5">
                  {[2, 3, 4].map(n => (
                    <button
                      key={n}
                      onClick={() => setQuantidadeEquipes(n)}
                      className={`w-7 h-7 rounded-lg font-bold text-xs border flex items-center justify-center transition-all ${
                        quantidadeEquipes === n
                          ? 'bg-holy-card text-white border-holy-card font-black scale-105'
                          : 'bg-white text-gray-600 border-orange-100 hover:bg-orange-50'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lista de Equipes para Edição */}
              <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                {Array.from({ length: quantidadeEquipes }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-xl border border-orange-100/40">
                    <div 
                      className="w-5 h-5 rounded-full border border-black/10 shadow-sm flex-shrink-0 cursor-pointer"
                      style={{ backgroundColor: equipes[i]?.cor || '#EF4444' }}
                      onClick={() => {
                        const indexCor = coresEquipes.findIndex(c => c.hex === equipes[i].cor);
                        const proximaCor = coresEquipes[(indexCor + 1) % coresEquipes.length].hex;
                        editarCorEquipe(i, proximaCor);
                      }}
                    />
                    <input 
                      type="text"
                      value={equipes[i]?.nome || `Equipe ${i+1}`}
                      onChange={(e) => editarNomeEquipe(i, e.target.value)}
                      className="flex-1 bg-orange-50/20 text-xs font-bold text-holy-text px-2 py-1 rounded-md border border-orange-100/30 focus:outline-none focus:border-holy-card"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ações */}
        <div className="flex gap-4 pt-1">
          <button 
            onClick={() => setTelaAtual('menu')} 
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold text-sm shadow hover:bg-gray-200 transition-colors"
          >
            Voltar
          </button>
          <button 
            onClick={iniciarJogo} 
            style={{ backgroundColor: jogoAtivo.cor }}
            className="flex-2 text-white py-3 rounded-xl font-black text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          >
            <Play size={16} fill="currentColor" /> Começar
          </button>
        </div>
      </div>
    </div>
  );

  const TelaJogandoAcao = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 flex flex-col justify-between min-h-[340px]">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          
          <div className="flex-1 flex flex-col justify-center my-2">
            {respostaRevelada ? (
              <p className={`text-3xl font-black ${theme.textMain} tracking-tight`}>{carta.palavra}</p>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2">
                <p className="text-gray-400 font-bold text-lg select-none italic">Palavra Oculta</p>
                <button 
                  onClick={() => setRespostaRevelada(true)} 
                  className="flex items-center gap-1.5 text-holy-card font-black text-xs uppercase tracking-wider bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors"
                >
                  <Eye size={14} /> Mostrar Palavra
                </button>
              </div>
            )}
          </div>

          <div className="space-y-1.5 text-left bg-red-50 p-4 rounded-xl border border-red-100/70">
            <p className="text-xs font-black text-red-800 uppercase tracking-wide mb-1">Não diga:</p>
            {carta.proibidas && Array.isArray(carta.proibidas) ? (
              carta.proibidas.map((p, i) => (
                <p key={i} className="text-[16px] font-bold text-red-600 border-b border-red-200/50 pb-1.5 last:border-0 last:pb-0">✖ {p}</p>
              ))
            ) : (
              <p className="text-red-500 text-sm">Nenhuma palavra proibida cadastrada.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const TelaJogandoDicas = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[340px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />

          <div className="space-y-2.5 flex-1 flex flex-col justify-center my-1.5">
            {carta.dicas && Array.isArray(carta.dicas) ? (
              carta.dicas.slice(0, dicaAtual).map((dica, i) => (
                <p key={i} className={`text-[14px] font-semibold ${theme.textMain} p-3 bg-orange-50/70 border border-orange-100/50 rounded-xl`}>
                  💡 {dica}
                </p>
              ))
            ) : (
              <p className="text-gray-500">Sem dicas registradas.</p>
            )}
          </div>

          <div className="flex flex-col items-center gap-2 pt-2 border-t border-gray-100 mt-2">
            {dicaAtual < 3 && (
              <button 
                onClick={revelarDica} 
                className="text-holy-card font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-85 transition-opacity"
              >
                Revelar próxima pista <ChevronRight size={15} />
              </button>
            )}

            {/* Mostrar Resposta Oculta */}
            {respostaRevelada ? (
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Resposta:</p>
                <p className="text-xl font-black text-holy-card">{carta.resposta}</p>
              </div>
            ) : (
              <button 
                onClick={() => setRespostaRevelada(true)} 
                className="flex items-center gap-1.5 text-gray-500 font-bold text-xs hover:text-holy-card transition-colors py-1"
              >
                <Eye size={14} /> Revelar Resposta
              </button>
            )}
          </div>
        </div>
        
        {carta.referencia && (dicaAtual === 3 || respostaRevelada) && (
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block">
            Ref: {carta.referencia}
          </p>
        )}
      </div>
    </div>
  );

  const TelaJogandoQuiz = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[340px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          
          <div className="my-1">
            <p className={`text-base font-black ${theme.textMain} leading-snug`}>{carta.palavra}</p>
          </div>

          <div className="grid grid-cols-1 gap-2 mt-2 w-full">
            {carta.dicas && Array.isArray(carta.dicas) ? (
              carta.dicas.map((opcao, i) => {
                let classeBotao = "bg-orange-50/70 border-orange-100 hover:bg-orange-100/50 text-holy-text";
                
                if (quizRespondido) {
                  if (opcao === carta.resposta) {
                    classeBotao = "bg-green-100 border-green-300 text-green-800 font-bold scale-[1.01]";
                  } else if (opcao === opcaoSelecionada) {
                    classeBotao = "bg-red-100 border-red-300 text-red-800";
                  } else {
                    classeBotao = "opacity-40 bg-gray-50 border-gray-200 text-gray-400";
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={quizRespondido}
                    onClick={() => lidarComRespostaQuiz(opcao, carta.resposta)}
                    className={`w-full p-2.5 rounded-xl border text-left font-semibold text-[13px] transition-all duration-200 flex justify-between items-center ${classeBotao}`}
                  >
                    <span>{opcao}</span>
                    {quizRespondido && opcao === carta.resposta && <Check size={14} className="text-green-600" />}
                    {quizRespondido && opcao === opcaoSelecionada && opcao !== carta.resposta && <X size={14} className="text-red-600" />}
                  </button>
                );
              })
            ) : (
              <p className="text-gray-500">Nenhuma alternativa cadastrada.</p>
            )}
          </div>

          <div className="pt-1.5 border-t border-gray-100 mt-2 flex justify-center">
            {respostaRevelada ? (
              <p className="text-xs font-bold text-green-600">A alternativa correta é: {carta.resposta}</p>
            ) : (
              <button 
                onClick={() => setRespostaRevelada(true)} 
                className="flex items-center gap-1 text-gray-400 font-bold text-[10px] hover:text-holy-card transition-colors"
              >
                <Eye size={12} /> Mostrar resposta certa
              </button>
            )}
          </div>
        </div>

        {carta.referencia && (quizRespondido || respostaRevelada) && (
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block">
            Ref: {carta.referencia}
          </p>
        )}
      </div>
    </div>
  );

  const TelaJogandoFazSentido = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        
        {/* Conceito no Centro */}
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[150px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          <div className="flex-1 flex items-center justify-center my-2">
            <p className={`text-xl font-black ${theme.textMain} leading-snug`}>{carta.palavra}</p>
          </div>
        </div>

        {/* Gerenciador de Vidas dos 4 Jogadores */}
        <div className="bg-white rounded-2xl p-3 w-full shadow-lg border border-orange-100/60 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((id) => {
            const vidas = vidasJogadores[id];
            return (
              <div key={id} className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100/40 flex flex-col items-center space-y-2">
                <span className="text-xs font-black text-holy-text">Jogador {id}</span>
                
                {/* Visualizador de Corações */}
                <div className="flex gap-0.5">
                  {vidas > 0 ? (
                    Array.from({ length: vidas }).map((_, i) => (
                      <Heart key={i} size={14} fill="#EF4444" className="text-red-500" />
                    ))
                  ) : (
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-wider line-through">Eliminado</span>
                  )}
                </div>

                {/* Controles de Vida */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => ajustarVida(id, -1)} 
                    disabled={vidas === 0}
                    className="w-6 h-6 rounded-full bg-red-100 hover:bg-red-200 text-red-700 font-bold text-xs flex items-center justify-center transition-colors disabled:opacity-30"
                  >
                    -
                  </button>
                  <button 
                    onClick={() => ajustarVida(id, 1)} 
                    disabled={vidas === 3}
                    className="w-6 h-6 rounded-full bg-green-100 hover:bg-green-200 text-green-700 font-bold text-xs flex items-center justify-center transition-colors disabled:opacity-30"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const TelaJogando = () => {
    if (cartasAtivas.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto min-h-screen bg-holy-bg">
          <p className="text-lg font-bold text-gray-700">Nenhuma carta encontrada.</p>
          <button onClick={() => setTelaAtual('menu')} className="mt-4 bg-holy-card text-white px-6 py-2.5 rounded-xl font-bold">Voltar ao Menu</button>
        </div>
      );
    }

    const carta = cartasAtivas[cartaAtualIndex];
    const isFazSentido = jogoAtivo.id === 'faz-sentido';

    return (
      <div 
        style={{ backgroundColor: jogoAtivo.cor }} 
        className="flex flex-col p-6 w-full max-w-md mx-auto min-h-screen transition-colors duration-300 justify-between animate-fade-in"
      >
        {/* Cabeçalho */}
        <div className="w-full animate-fade-in">
          <div className="flex justify-between items-center text-white mb-3">
            <button onClick={() => { setTimerAtivo(false); setTelaAtual('menu'); }} className="p-2.5 bg-black/15 hover:bg-black/25 rounded-full transition-colors"><Home size={18} /></button>
            
            {/* Cronômetro Isolado para Evitar Re-render no Pai */}
            <div className="flex items-center space-x-2 bg-black/15 px-3 py-1.5 rounded-full font-mono font-bold">
              <Clock size={16} />
              <Cronometro 
                tempoInicial={jogoAtivo.tipo === 'acao' ? 45 : 60}
                ativo={timerAtivo}
                pausado={timerPausado}
                tempoResetKey={cartaAtualIndex}
                onTempoAcabou={() => {
                  setTimerAtivo(false);
                  setTelaAtual('resultado');
                }}
              />
              <button 
                onClick={() => setTimerPausado(!timerPausado)}
                className="p-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                {timerPausado ? <Play size={12} fill="currentColor" /> : <Pause size={12} fill="currentColor" />}
              </button>
            </div>
            
            <div className="text-sm font-bold bg-black/15 px-4 py-2 rounded-full">
              {modoJogo === 'individual' ? `Pts: ${pontos}` : 'Placar'}
            </div>
          </div>

          {/* Banner de Equipe Ativa */}
          {modoJogo === 'equipes' && (
            <div 
              style={{ borderLeft: `5px solid ${equipes[equipeAtivaIndex].cor}` }}
              className="bg-black/20 text-white text-xs font-black px-4 py-2.5 rounded-xl flex items-center justify-between mb-4"
            >
              <span>VEZ DE JOGAR:</span>
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm animate-pulse" style={{ backgroundColor: equipes[equipeAtivaIndex].cor }}>
                {equipes[equipeAtivaIndex].nome}
              </span>
            </div>
          )}
        </div>

        {/* Corpo da Carta */}
        <div className="flex-1 flex items-center justify-center w-full my-auto animate-fade-in">
          {isFazSentido ? (
            <TelaJogandoFazSentido carta={carta} />
          ) : jogoAtivo.tipo === 'acao' ? (
            <TelaJogandoAcao carta={carta} />
          ) : jogoAtivo.tipo === 'quiz' ? (
            <TelaJogandoQuiz carta={carta} />
          ) : (
            <TelaJogandoDicas carta={carta} />
          )}
        </div>

        {/* Painel de Rodada e Ações de Avanço */}
        <div className="w-full mt-4 animate-fade-in">
          
          {/* Placar de Equipes Horizontal */}
          {modoJogo === 'equipes' && (
            <div className="bg-black/15 p-3 rounded-2xl flex justify-around gap-2 mb-4 text-[11px] font-black tracking-wide border border-white/5">
              {Array.from({ length: quantidadeEquipes }).map((_, i) => (
                <div key={i} className="flex flex-col items-center px-2.5 py-1 rounded-xl bg-white/5 text-white/95">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: equipes[i].cor }} />
                    {equipes[i].nome.split(' ')[1] || equipes[i].nome}
                  </span>
                  <span className="text-sm font-black mt-0.5">{equipes[i].pontos} pts</span>
                </div>
              ))}
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex justify-center items-center gap-4 pb-2 w-full max-w-sm mx-auto">
            {isFazSentido ? (
              <button 
                onClick={() => proximaCarta(false)} 
                className="w-full bg-white hover:bg-orange-50 text-holy-text p-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 border border-orange-100"
              >
                Próxima Rodada <ChevronRight size={22} />
              </button>
            ) : jogoAtivo.tipo !== 'quiz' && (
              <div className="flex justify-between items-center w-full gap-4">
                {/* Botão Errou - Apenas Ícone */}
                <button 
                  onClick={() => proximaCarta(false)} 
                  title="Errou"
                  className="w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all active:scale-90"
                >
                  <ThumbsDown size={28} />
                </button>

                {/* Botão Pular - Menor e Discreto */}
                <button 
                  onClick={() => proximaCarta(false)} 
                  className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/25 py-3.5 rounded-2xl font-bold text-sm shadow flex items-center justify-center gap-1 transition-all active:scale-95"
                >
                  <X size={16} /> Pular
                </button>

                {/* Botão Acertou - Apenas Ícone */}
                <button 
                  onClick={() => proximaCarta(true)} 
                  title="Acertou!"
                  className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all active:scale-90"
                >
                  <Check size={32} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const TelaResultado = () => {
    const equipesOrdenadas = [...equipes]
      .slice(0, quantidadeEquipes)
      .sort((a, b) => b.pontos - a.pontos);

    return (
      <div className={`flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-md mx-auto min-h-screen ${theme.bgApp} max-h-screen overflow-y-auto`}>
        <div className="bg-white p-6 rounded-3xl shadow-xl text-center space-y-6 w-full border border-orange-100">
          
          <div className="flex justify-center text-holy-card animate-bounce">
            <Trophy size={48} fill="currentColor" />
          </div>

          <h2 className={`text-3xl font-black ${theme.textMain}`}>Fim de Jogo!</h2>
          
          {modoJogo === 'individual' ? (
            <div className="space-y-4">
              <div 
                style={{ backgroundColor: jogoAtivo?.cor || '#E0664B' }}
                className="w-28 h-28 rounded-full mx-auto flex flex-col items-center justify-center shadow-md"
              >
                <span className="text-4xl font-black text-white">{pontos}</span>
              </div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">cartas acertadas</p>
            </div>
          ) : (
            <div className="space-y-3.5 text-left pt-2">
              <p className="text-xs font-black uppercase text-gray-400 tracking-wider text-center mb-1">Classificação Final</p>
              <div className="space-y-2.5">
                {equipesOrdenadas.map((eq, idx) => {
                  let badgeRank = "bg-gray-100 text-gray-700";
                  if (idx === 0) badgeRank = "bg-yellow-100 text-yellow-800 border-2 border-yellow-300";
                  if (idx === 1) badgeRank = "bg-slate-100 text-slate-700 border border-slate-300";
                  if (idx === 2) badgeRank = "bg-amber-50 text-amber-800";

                  return (
                    <div 
                      key={eq.id} 
                      style={{ borderLeft: `5px solid ${eq.cor}` }}
                      className={`p-3 rounded-2xl flex items-center justify-between shadow-sm ${badgeRank} font-bold`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black">{idx + 1}º</span>
                        <span className="text-[13px]">{eq.nome}</span>
                      </div>
                      <span className="text-sm font-black">{eq.pontos} pts</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setTelaAtual('menu')} 
            style={{ backgroundColor: jogoAtivo?.cor || '#E0664B' }}
            className="w-full hover:opacity-90 text-white p-3.5 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <RotateCcw size={18} /> Voltar ao Menu
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${telaAtual !== 'jogando' ? theme.bgApp : ''} font-sans selection:bg-orange-200`}>
      {telaAtual === 'modalidade' && <TelaEscolhaModalidade />}
      {telaAtual === 'menu' && <TelaMenu />}
      {telaAtual === 'regras' && <TelaRegras />}
      {telaAtual === 'jogando' && <TelaJogando />}
      {telaAtual === 'resultado' && <TelaResultado />}
    </div>
  );
}
