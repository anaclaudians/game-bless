import { useState, useEffect } from 'react';
import { 
  Play, RotateCcw, Clock, Check, X, ChevronRight, Home, Database, AlertCircle, 
  Crown, Ship, Scroll, HelpCircle, MessageSquare, BookOpen, List, Smile, Zap,
  Pause, Eye, EyeOff, Heart
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { mockDatabase } from './lib/mockDatabase';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('menu'); 
  const [jogos, setJogos] = useState([]);
  const [jogoAtivo, setJogoAtivo] = useState(null);
  const [cartasAtivas, setCartasAtivas] = useState([]);
  const [cartaAtualIndex, setCartaAtualIndex] = useState(0);
  
  // Configurações de Partida
  const [dificuldadeSelecionada, setDificuldadeSelecionada] = useState('facil');

  // Estados de Jogo
  const [tempo, setTempo] = useState(60);
  const [timerAtivo, setTimerAtivo] = useState(false);
  const [timerPausado, setTimerPausado] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [dicaAtual, setDicaAtual] = useState(0); 
  const [respostaRevelada, setRespostaRevelada] = useState(false);

  // Estados Específicos para o Quiz
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [quizRespondido, setQuizRespondido] = useState(false);

  // Estados Específicos do Jogo "Faz Sentido?" (Controle de Vidas de 4 Jogadores)
  const [vidasJogadores, setVidasJogadores] = useState({
    1: 3,
    2: 3,
    3: 3,
    4: 3
  });

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

  // Lógica do Temporizador com suporte a Pause
  useEffect(() => {
    let intervalo = null;
    if (timerAtivo && !timerPausado && tempo > 0) {
      intervalo = setInterval(() => setTempo((t) => t - 1), 1000);
    } else if (tempo === 0) {
      setTimerAtivo(false);
      setTelaAtual('resultado');
    }
    return () => clearInterval(intervalo);
  }, [timerAtivo, timerPausado, tempo]);

  // Abre a tela intermediária de Regras e Seleção de Dificuldade
  const verRegras = (jogo) => {
    setJogoAtivo(jogo);
    setDificuldadeSelecionada('facil');
    setTelaAtual('regras');
  };

  // Inicia a partida de fato filtrando as cartas pela dificuldade
  const iniciarJogo = async () => {
    setLoading(true);
    setCartaAtualIndex(0);
    setPontos(0);
    setTempo(jogoAtivo.tipo === 'acao' ? 45 : 60);
    setDicaAtual(1);
    setOpcaoSelecionada(null);
    setQuizRespondido(false);
    setRespostaRevelada(false);
    setTimerPausado(false);

    // Reset de vidas de jogadores para o Faz Sentido
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
    if (acertou) setPontos(p => p + 1);
    
    setOpcaoSelecionada(null);
    setQuizRespondido(false);
    setRespostaRevelada(false);

    if (cartaAtualIndex + 1 < cartasAtivas.length) {
      setCartaAtualIndex(i => i + 1);
      setDicaAtual(1);
      if (jogoAtivo.tipo === 'acao') setTempo(45); 
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

  // Funções de alteração de vidas para o Faz Sentido?
  const ajustarVida = (jogadorId, delta) => {
    setVidasJogadores(prev => {
      const novaVida = Math.max(0, Math.min(3, prev[jogadorId] + delta));
      return { ...prev, [jogadorId]: novaVida };
    });
  };

  // Renderiza a ilustração temática da carta de forma estilizada
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
      <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-orange-50 border-4 border-amber-100 shadow-inner mb-2 animate-fade-in">
        {obterIcone()}
      </div>
    );
  };

  const TelaMenu = () => (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-md mx-auto min-h-screen">
      <div className="w-full text-center space-y-4">
        {/* Ilustração Temática Hero */}
        <div className="relative w-full max-w-[280px] mx-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white/50 bg-[#E0664B] aspect-[4/3] flex items-center justify-center">
          <img 
            src="/hero.png" 
            alt="Holy Cards Hero" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="space-y-1">
          <h1 className={`text-5xl font-extrabold ${theme.textMain} tracking-tight font-sans`}>Holy Cards</h1>
          <p className="text-sm text-gray-600 font-bold uppercase tracking-wider">Escolha seu momento de comunhão</p>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-holy-card"></div>
          <p className="text-sm text-gray-600">Carregando jogos...</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-2 gap-4 max-h-[55vh] overflow-y-auto pr-1 pb-2">
          {jogos.map((jogo) => (
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
                <div className="absolute top-2 right-2 bg-black/45 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-black text-white uppercase tracking-wider">
                  {jogo.tipo === 'dicas' ? '💡 Dicas' : jogo.tipo === 'acao' ? '⚡ Ação' : '❓ Quiz'}
                </div>
              </div>
              <div className="p-3 w-full flex-1 flex flex-col justify-between" style={{ borderTop: `4px solid ${jogo.cor}` }}>
                <h3 className="text-sm font-black text-holy-text leading-tight group-hover:text-holy-card transition-colors min-h-[32px] flex items-center">{jogo.nome}</h3>
                <div className="mt-2 flex items-center justify-between text-[11px] font-black text-holy-card uppercase tracking-wider">
                  <span>Jogar</span>
                  <Play size={12} fill="currentColor" className="transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Indicador de Status do Banco de Dados */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-black/5 px-3 py-1.5 rounded-full mt-4">
        {usandoMock ? (
          <>
            <AlertCircle size={14} className="text-orange-500" />
            <span>Usando dados offline (Mock)</span>
          </>
        ) : (
          <>
            <Database size={14} className="text-green-600" />
            <span>Conectado ao Supabase</span>
          </>
        )}
      </div>
    </div>
  );

  const TelaRegras = () => (
    <div className={`flex flex-col items-center justify-center p-6 space-y-6 w-full max-w-md mx-auto min-h-screen ${theme.bgApp}`}>
      <div className="bg-white p-6 rounded-3xl shadow-xl text-center space-y-6 w-full border border-orange-100">
        
        {/* Capa */}
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-orange-50 border border-orange-100">
          <img src={jogoAtivo.capa || "/hero.png"} alt={jogoAtivo.nome} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-2">
          <h2 className={`text-2xl font-black ${theme.textMain}`}>{jogoAtivo.nome}</h2>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">{jogoAtivo.regras || 'Adivinhe os conceitos bíblicos seguindo as instruções das cartas.'}</p>
        </div>

        {/* Seleção de Dificuldade */}
        <div className="space-y-3 pt-2 text-left">
          <label className="text-xs font-black uppercase tracking-wider text-gray-500 block text-center">Nível de Dificuldade</label>
          <div className="flex justify-between gap-2.5">
            {['facil', 'medio', 'dificil'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDificuldadeSelecionada(diff)}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border transition-all ${
                  dificuldadeSelecionada === diff
                    ? 'bg-holy-card text-white border-holy-card shadow-md scale-[1.03]'
                    : 'bg-orange-50/50 text-gray-600 border-orange-100 hover:bg-orange-50'
                }`}
              >
                {diff === 'facil' ? '🟢 Fácil' : diff === 'medio' ? '🟡 Médio' : '🔴 Difícil'}
              </button>
            ))}
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-4 pt-2">
          <button 
            onClick={() => setTelaAtual('menu')} 
            className="flex-1 bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm shadow hover:bg-gray-200 transition-colors"
          >
            Voltar
          </button>
          <button 
            onClick={iniciarJogo} 
            style={{ backgroundColor: jogoAtivo.cor }}
            className="flex-2 text-white py-3.5 rounded-xl font-black text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
          >
            <Play size={18} fill="currentColor" /> Iniciar Partida
          </button>
        </div>
      </div>
    </div>
  );

  const TelaJogandoAcao = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 flex flex-col justify-between min-h-[360px]">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          
          <div className="flex-1 flex flex-col justify-center my-2">
            {respostaRevelada ? (
              <p className={`text-3xl font-black ${theme.textMain} tracking-tight animate-fade-in`}>{carta.palavra}</p>
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
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[360px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />

          <div className="space-y-2.5 flex-1 flex flex-col justify-center my-1.5">
            {carta.dicas && Array.isArray(carta.dicas) ? (
              carta.dicas.slice(0, dicaAtual).map((dica, i) => (
                <p key={i} className={`text-[14px] font-semibold ${theme.textMain} p-3 bg-orange-50/70 border border-orange-100/50 rounded-xl animate-fade-in`}>
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
              <div className="text-center animate-fade-in">
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
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block animate-fade-in">
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
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[360px] flex flex-col justify-between">
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

          {/* Mostrar Resposta Oculta no Quiz de apoio se necessário */}
          <div className="pt-1.5 border-t border-gray-100 mt-2 flex justify-center">
            {respostaRevelada ? (
              <p className="text-xs font-bold text-green-600 animate-fade-in">A alternativa correta é: {carta.resposta}</p>
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
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block animate-fade-in">
            Ref: {carta.referencia}
          </p>
        )}
      </div>
    </div>
  );

  // Painel Multiplayer Especial do "Faz Sentido?"
  const TelaJogandoFazSentido = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-4 w-full animate-fade-in">
      <div className="text-center space-y-3 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        
        {/* Conceito no Centro */}
        <div className="bg-white rounded-2xl p-5 w-full shadow-lg border-2 border-amber-100 min-h-[160px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          <div className="flex-1 flex items-center justify-center my-2">
            <p className={`text-xl font-black ${theme.textMain} leading-snug`}>{carta.palavra}</p>
          </div>
        </div>

        {/* Gerenciador de Vidas dos 4 Jogadores */}
        <div className="bg-white rounded-2xl p-4 w-full shadow-lg border border-orange-100/60 grid grid-cols-2 gap-3.5">
          {[1, 2, 3, 4].map((id) => {
            const vidas = vidasJogadores[id];
            return (
              <div key={id} className="bg-orange-50/50 p-2.5 rounded-xl border border-orange-100/40 flex flex-col items-center space-y-2">
                <span className="text-xs font-black text-holy-text">Jogador {id}</span>
                
                {/* Visualizador de Corações */}
                <div className="flex gap-0.5">
                  {vidas > 0 ? (
                    Array.from({ length: vidas }).map((_, i) => (
                      <Heart key={i} size={15} fill="#EF4444" className="text-red-500" />
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
        className="flex flex-col p-6 w-full max-w-md mx-auto min-h-screen transition-colors duration-300"
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center text-white mb-6">
          <button onClick={() => { setTimerAtivo(false); setTelaAtual('menu'); }} className="p-2.5 bg-black/15 hover:bg-black/25 rounded-full transition-colors"><Home size={20} /></button>
          
          {/* Cronômetro com Botão de Pause */}
          <div className="flex items-center space-x-2 bg-black/15 px-3 py-1.5 rounded-full font-mono font-bold">
            <Clock size={16} />
            <span className={`${tempo <= 10 && !timerPausado ? 'text-red-300 animate-pulse' : ''} ${timerPausado ? 'opacity-50 animate-pulse' : ''}`}>
              00:{tempo.toString().padStart(2, '0')}
            </span>
            <button 
              onClick={() => setTimerPausado(!timerPausado)}
              className="p-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              {timerPausado ? <Play size={12} fill="currentColor" /> : <Pause size={12} fill="currentColor" />}
            </button>
          </div>
          
          <div className="text-sm font-bold bg-black/15 px-4 py-2 rounded-full">Pts: {pontos}</div>
        </div>

        {/* Corpo da Carta (com controle de chaves para evitar piscar tela) */}
        <div className="flex-1 flex items-center justify-center w-full">
          {isFazSentido ? (
            <TelaJogandoFazSentido key={cartaAtualIndex} carta={carta} />
          ) : jogoAtivo.tipo === 'acao' ? (
            <TelaJogandoAcao key={cartaAtualIndex} carta={carta} />
          ) : jogoAtivo.tipo === 'quiz' ? (
            <TelaJogandoQuiz key={cartaAtualIndex} carta={carta} />
          ) : (
            <TelaJogandoDicas key={cartaAtualIndex} carta={carta} />
          )}
        </div>

        {/* Painel de Ações de Avanço */}
        <div className="flex justify-between w-full mt-6 gap-4 pb-4">
          {isFazSentido ? (
            <button 
              onClick={() => proximaCarta(false)} 
              className="w-full bg-white hover:bg-orange-50 text-holy-text p-4 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 border border-orange-100"
            >
              Próxima Rodada <ChevronRight size={22} />
            </button>
          ) : jogoAtivo.tipo !== 'quiz' && (
            <>
              <button 
                onClick={() => proximaCarta(false)} 
                className="flex-1 bg-red-500 hover:bg-red-600 text-white p-4.5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <X size={22} /> Pular
              </button>
              <button 
                onClick={() => proximaCarta(true)} 
                className="flex-1 bg-green-500 hover:bg-green-600 text-white p-4.5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Check size={22} /> Acertou!
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  const TelaResultado = () => (
    <div className={`flex flex-col items-center justify-center p-6 space-y-8 w-full max-w-md mx-auto min-h-screen ${theme.bgApp}`}>
      <div className="bg-white p-8 rounded-3xl shadow-xl text-center space-y-6 w-full border border-orange-100">
        <h2 className={`text-3xl font-black ${theme.textMain}`}>Fim de Jogo!</h2>
        
        <div 
          style={{ backgroundColor: jogoAtivo?.cor || '#E0664B' }}
          className="w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center shadow-md transition-colors"
        >
          <span className="text-5xl font-black text-white">{pontos}</span>
        </div>
        <p className="text-base text-gray-500 font-bold uppercase tracking-wider">cartas acertadas</p>
        
        <button 
          onClick={() => setTelaAtual('menu')} 
          style={{ backgroundColor: jogoAtivo?.cor || '#E0664B' }}
          className="w-full hover:opacity-90 text-white p-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <RotateCcw size={20} /> Voltar ao Menu
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${telaAtual === 'menu' || telaAtual === 'regras' || telaAtual === 'resultado' ? theme.bgApp : ''} font-sans selection:bg-orange-200`}>
      {telaAtual === 'menu' && <TelaMenu />}
      {telaAtual === 'regras' && <TelaRegras />}
      {telaAtual === 'jogando' && <TelaJogando />}
      {telaAtual === 'resultado' && <TelaResultado />}
    </div>
  );
}
