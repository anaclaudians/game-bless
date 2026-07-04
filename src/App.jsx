import { useState, useEffect } from 'react';
import { 
  Play, RotateCcw, Clock, Check, X, ChevronRight, Home, Database, AlertCircle, 
  Crown, Ship, Scroll, HelpCircle, MessageSquare, BookOpen, List, Smile, Zap 
} from 'lucide-react';
import { supabase } from './lib/supabase';
import { mockDatabase } from './lib/mockDatabase';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('menu'); 
  const [jogos, setJogos] = useState([]);
  const [jogoAtivo, setJogoAtivo] = useState(null);
  const [cartasAtivas, setCartasAtivas] = useState([]);
  const [cartaAtualIndex, setCartaAtualIndex] = useState(0);
  
  // Estados de Jogo
  const [tempo, setTempo] = useState(60);
  const [timerAtivo, setTimerAtivo] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [dicaAtual, setDicaAtual] = useState(0); 

  // Estado Específico para o Quiz
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
  const [quizRespondido, setQuizRespondido] = useState(false);

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

  // Lógica do Temporizador
  useEffect(() => {
    let intervalo = null;
    if (timerAtivo && tempo > 0) {
      intervalo = setInterval(() => setTempo((t) => t - 1), 1000);
    } else if (tempo === 0) {
      setTimerAtivo(false);
      setTelaAtual('resultado');
    }
    return () => clearInterval(intervalo);
  }, [timerAtivo, tempo]);

  const iniciarJogo = async (jogo) => {
    setLoading(true);
    setJogoAtivo(jogo);
    setCartaAtualIndex(0);
    setPontos(0);
    setTempo(jogo.tipo === 'acao' ? 45 : 60);
    setDicaAtual(1);
    setOpcaoSelecionada(null);
    setQuizRespondido(false);

    try {
      if (usandoMock) {
        setCartasAtivas(mockDatabase.cartas[jogo.id] || []);
      } else {
        const { data, error } = await supabase
          .from('cartas')
          .select('*')
          .eq('jogo_id', jogo.id);
        
        if (error || !data || data.length === 0) {
          throw new Error('Erro ao buscar cartas do Supabase');
        }
        setCartasAtivas(data);
      }
      setTelaAtual('jogando');
      setTimerAtivo(true);
    } catch (err) {
      console.warn('Erro ao buscar cartas do Supabase. Usando cartas de mock como fallback.', err);
      setCartasAtivas(mockDatabase.cartas[jogo.id] || []);
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
              onClick={() => iniciarJogo(jogo)}
              className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-md border border-orange-100/50 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 text-left group"
            >
              {/* Imagem de Capa do Jogo */}
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
              {/* Rodapé do Card */}
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

  const TelaJogandoAcao = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-6 w-full animate-fade-in">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-6 w-full shadow-lg border-2 border-amber-100 flex flex-col justify-between min-h-[360px]">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          
          <div className="flex-1 flex flex-col justify-center my-4">
            <p className={`text-3xl font-black ${theme.textMain} tracking-tight`}>{carta.palavra}</p>
          </div>

          <div className="space-y-1.5 text-left bg-red-50 p-4 rounded-xl border border-red-100/70">
            <p className="text-xs font-black text-red-800 uppercase tracking-wide mb-1">Não diga:</p>
            {carta.proibidas && Array.isArray(carta.proibidas) ? (
              carta.proibidas.map((p, i) => (
                <p key={i} className="text-[17px] font-bold text-red-600 border-b border-red-200/50 pb-1.5 last:border-0 last:pb-0">✖ {p}</p>
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
    <div className="flex flex-col h-full justify-between items-center space-y-6 w-full animate-fade-in">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-6 w-full shadow-lg border-2 border-amber-100 min-h-[360px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />

          <div className="space-y-3 flex-1 flex flex-col justify-center my-2">
            {carta.dicas && Array.isArray(carta.dicas) ? (
              carta.dicas.slice(0, dicaAtual).map((dica, i) => (
                <p key={i} className={`text-[15px] font-semibold ${theme.textMain} p-3 bg-orange-50/70 border border-orange-100/50 rounded-xl animate-fade-in`}>
                  💡 {dica}
                </p>
              ))
            ) : (
              <p className="text-gray-500">Sem dicas registradas.</p>
            )}
          </div>
          
          {dicaAtual < 3 ? (
            <button 
              onClick={revelarDica} 
              className="mt-2 text-holy-card font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 mx-auto hover:opacity-85 transition-opacity"
            >
              Revelar próxima pista <ChevronRight size={15} />
            </button>
          ) : (
            <div className="h-6"></div>
          )}
        </div>
        
        {carta.referencia && dicaAtual === 3 && (
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block animate-fade-in">
            Ref: {carta.referencia}
          </p>
        )}
      </div>
    </div>
  );

  const TelaJogandoQuiz = ({ carta }) => (
    <div className="flex flex-col h-full justify-between items-center space-y-6 w-full animate-fade-in">
      <div className="text-center space-y-4 w-full">
        <h2 className="text-sm font-black text-white/80 uppercase tracking-widest">{jogoAtivo.nome}</h2>
        <div className="bg-white rounded-2xl p-6 w-full shadow-lg border-2 border-amber-100 min-h-[360px] flex flex-col justify-between">
          <MedalhaoIlustracao tipoIcone={carta.icone} />
          
          <div className="my-2">
            <p className={`text-lg font-bold ${theme.textMain} leading-snug`}>{carta.palavra}</p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 mt-2 w-full">
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
                    className={`w-full p-3 rounded-xl border text-left font-semibold text-sm transition-all duration-200 flex justify-between items-center ${classeBotao}`}
                  >
                    <span>{opcao}</span>
                    {quizRespondido && opcao === carta.resposta && <Check size={16} className="text-green-600" />}
                    {quizRespondido && opcao === opcaoSelecionada && opcao !== carta.resposta && <X size={16} className="text-red-600" />}
                  </button>
                );
              })
            ) : (
              <p className="text-gray-500">Nenhuma alternativa cadastrada.</p>
            )}
          </div>
        </div>

        {carta.referencia && quizRespondido && (
          <p className="text-xs text-white/90 font-medium italic bg-black/20 px-3 py-1.5 rounded-full inline-block animate-fade-in">
            Ref: {carta.referencia}
          </p>
        )}
      </div>
    </div>
  );

  const TelaJogando = () => {
    if (cartasAtivas.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto min-h-screen bg-holy-bg">
          <p className="text-lg font-bold text-gray-700">Nenhuma carta encontrada para este jogo.</p>
          <button onClick={() => setTelaAtual('menu')} className="mt-4 bg-holy-card text-white px-6 py-2.5 rounded-xl font-bold">Voltar ao Menu</button>
        </div>
      );
    }

    const carta = cartasAtivas[cartaAtualIndex];
    return (
      <div 
        style={{ backgroundColor: jogoAtivo.cor }} 
        className="flex flex-col p-6 w-full max-w-md mx-auto min-h-screen transition-colors duration-300"
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-center text-white mb-6">
          <button onClick={() => { setTimerAtivo(false); setTelaAtual('menu'); }} className="p-2.5 bg-black/15 hover:bg-black/25 rounded-full transition-colors"><Home size={20} /></button>
          <div className="flex items-center space-x-2 bg-black/15 px-4 py-2 rounded-full font-mono font-bold">
            <Clock size={20} />
            <span className={`${tempo <= 10 ? 'text-red-300 animate-pulse' : ''}`}>00:{tempo.toString().padStart(2, '0')}</span>
          </div>
          <div className="text-base font-bold bg-black/15 px-4 py-2 rounded-full">Pts: {pontos}</div>
        </div>

        {/* Corpo da Carta */}
        <div className="flex-1 flex items-center justify-center w-full">
          {jogoAtivo.tipo === 'acao' ? (
            <TelaJogandoAcao key={cartaAtualIndex} carta={carta} />
          ) : jogoAtivo.tipo === 'quiz' ? (
            <TelaJogandoQuiz key={cartaAtualIndex} carta={carta} />
          ) : (
            <TelaJogandoDicas key={cartaAtualIndex} carta={carta} />
          )}
        </div>

        {/* Painel de Ações */}
        {jogoAtivo.tipo !== 'quiz' && (
          <div className="flex justify-between w-full mt-6 gap-4 pb-4">
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
          </div>
        )}
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
    <div className={`min-h-screen ${telaAtual === 'menu' || telaAtual === 'resultado' ? theme.bgApp : ''} font-sans selection:bg-orange-200`}>
      {telaAtual === 'menu' && <TelaMenu />}
      {telaAtual === 'jogando' && <TelaJogando />}
      {telaAtual === 'resultado' && <TelaResultado />}
    </div>
  );
}
