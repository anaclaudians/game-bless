// --- BANCO DE DADOS DE FALLBACK (200 CARTAS BÍBLICAS NO TOTAL) ---
export const mockDatabase = {
  jogos: [
    { id: 'quem-sou-eu', nome: 'Quem Sou Eu?', tipo: 'dicas', cor: '#E0664B', capa: '/capa-quem-sou-eu.png' },
    { id: 'palavra-proibida', nome: 'Palavra Bíblica Proibida', tipo: 'acao', cor: '#C25134', capa: '/capa-palavra-proibida.png' },
    { id: 'quem-disse', nome: 'Quem Disse?', tipo: 'quiz', cor: '#9E4733', capa: '/capa-quiz.png' },
    { id: 'qual-versiculo-sou', nome: 'Qual Versículo Sou?', tipo: 'dicas', cor: '#D17A22', capa: '/capa-quiz.png' },
    { id: 'o-que-sou', nome: 'O Que Sou?', tipo: 'dicas', cor: '#9A5B43', capa: '/capa-quem-sou-eu.png' },
    { id: 'quem-sabe-responde', nome: 'Quem Sabe, Responde!', tipo: 'quiz', cor: '#6B4F4F', capa: '/capa-quiz.png' },
    { id: 'biblimimicas', nome: 'Bíblimímicas', tipo: 'acao', cor: '#B55A30', capa: '/capa-biblimimicas.png' },
    { id: 'quem-sou-eu-extreme', nome: 'Quem Sou Eu? (Extreme)', tipo: 'dicas', cor: '#842E1B', capa: '/capa-faz-sentido.png' }
  ],
  cartas: {
    // ==========================================
    // JOGO 1: QUEM SOU EU? (20 cartas)
    // ==========================================
    'quem-sou-eu': [
      { id: 'q1', dicas: ["Fui vendido pelos meus irmãos por moedas de prata.", "Interpretei os sonhos do Faraó sobre vacas gordas e magras.", "Me tornei o governador de todo o Egito."], resposta: "José", referencia: "Gênesis 37-50", icone: "scroll" },
      { id: 'q2', dicas: ["Fui o primeiro rei ungido de Israel.", "Fui ungido pelo profeta Samuel.", "Perdi meu reinado por desobediência a Deus."], resposta: "Saul", referencia: "1 Samuel 9-31", icone: "crown" },
      { id: 'q3', dicas: ["Fui tirado das águas do rio Nilo quando era bebê.", "Deus me usou para libertar o povo hebreu da escravidão no Egito.", "Recebi os Dez Mandamentos no Monte Sinai."], resposta: "Moisés", referencia: "Êxodo 2-20", icone: "scroll" },
      { id: 'q4', dicas: ["Derrotei um gigante filisteu com uma funda e uma pedra.", "Fui o segundo rei de Israel e escrevi muitos Salmos.", "Fui chamado de homem segundo o coração de Deus."], resposta: "Davi", referencia: "1 Samuel 16-17", icone: "crown" },
      { id: 'q5', dicas: ["Fui o homem mais forte da Bíblia.", "Minha força estava ligada ao meu voto de nazireado e meus cabelos.", "Fui traído por Dalila, que cortou meu cabelo."], resposta: "Sansão", referencia: "Juízes 13-16", icone: "zap" },
      { id: 'q6', dicas: ["Construí uma arca gigante sob as ordens de Deus.", "Eu, minha família e casais de animais fomos salvos do Dilúvio.", "Deus colocou o arco-íris no céu como aliança comigo."], resposta: "Noé", referencia: "Gênesis 6-9", icone: "ship" },
      { id: 'q7', dicas: ["Fui lançado em uma cova de leões famintos.", "Deus enviou um anjo para fechar a boca dos leões.", "Tinha o hábito de orar três vezes ao dia no meu quarto."], resposta: "Daniel", referencia: "Daniel 6", icone: "help-circle" },
      { id: 'q8', dicas: ["Fui engolido por um grande peixe após tentar fugir de Deus.", "Deveria pregar na cidade de Nínive, mas tentei fugir de barco.", "Fiquei três dias e três noites no ventre do peixe."], resposta: "Jonas", referencia: "Jonas 1-4", icone: "ship" },
      { id: 'q9', dicas: ["Fui o pai de muitas nações e marido de Sara.", "Deus me prometeu uma descendência numerosa como as estrelas.", "Mostrei obediência ao estar pronto para oferecer Isaque."], resposta: "Abraão", referencia: "Gênesis 12-25", icone: "scroll" },
      { id: 'q10', dicas: ["Fui a primeira mulher criada por Deus.", "Fui formada a partir de uma costela de Adão.", "Fui enganada pela serpente e comi do fruto proibido."], resposta: "Eva", referencia: "Gênesis 2-3", icone: "help-circle" },
      { id: 'q11', dicas: ["Fui uma rainha judia que salvou meu povo da destruição.", "Fui escolhida pelo rei Assuero em um concurso de beleza.", "Tive a ajuda do meu primo Mardoqueu."], resposta: "Ester", referencia: "Ester 1-10", icone: "crown" },
      { id: 'q12', dicas: ["Fui o filho prometido de Abraão e Sara na velhice.", "Carreguei a madeira para o meu próprio sacrifício.", "Deus proveu um cordeiro para ser sacrificado em meu lugar."], resposta: "Isaque", referencia: "Gênesis 21-22", icone: "scroll" },
      { id: 'q13', dicas: ["Lutei com um anjo de Deus e tive minha coxa deslocada.", "Tive meu nome mudado para Israel.", "Tive 12 filhos que deram origem às tribos de Israel."], resposta: "Jacó", referencia: "Gênesis 25-35", icone: "scroll" },
      { id: 'q14', dicas: ["Fui o filho mais sábio de Davi e construí o Templo de Jerusalém.", "Escrevi a maioria dos Provérbios e o livro de Eclesiastes.", "Fui visitado pela Rainha de Sabá devido à minha sabedoria."], resposta: "Salomão", referencia: "1 Reis 1-11", icone: "crown" },
      { id: 'q15', dicas: ["Fui o profeta que subiu ao céu em um redemoinho de fogo.", "Desafiei os profetas de Baal no Monte Carmelo.", "Orei e Deus mandou fogo do céu para consumir o altar."], resposta: "Elias", referencia: "1 Reis 17 - 2 Reis 2", icone: "zap" },
      { id: 'q16', dicas: ["Fui o sucessor do profeta Elias.", "Pedi porção dobrada do espírito de Elias.", "Realizei muitos milagres, incluindo purificar uma fonte de água."], resposta: "Eliseu", referencia: "2 Reis 2-13", icone: "scroll" },
      { id: 'q17', dicas: ["Fui o líder que substituiu Moisés na jornada à Terra Prometida.", "Comandei o povo na queda das muralhas de Jericó.", "Declarei: ''Eu e a minha casa serviremos ao Senhor''."], resposta: "Josué", referencia: "Josué 1-24", icone: "crown" },
      { id: 'q18', dicas: ["Fui uma profetisa e a única juíza mulher de Israel.", "Liderei o povo junto com Baraque na batalha contra Sísera.", "Julgava o povo debaixo de uma palmeira."], resposta: "Débora", referencia: "Juízes 4-5", icone: "scroll" },
      { id: 'q19', dicas: ["Fui um cobrador de impostos que subiu em uma figueira brava.", "Queria muito ver Jesus passar por Jericó.", "Jesus almoçou na minha casa e anunciei que devolveria o que roubei."], resposta: "Zaqueu", referencia: "Lucas 19:1-10", icone: "help-circle" },
      { id: 'q20', dicas: ["Fui ressuscitado por Jesus após estar morto por quatro dias.", "Minhas irmãs eram Marta e Maria.", "Jesus clamou em voz alta: ''Saia para fora!''."], resposta: "Lázaro", referencia: "João 11", icone: "help-circle" }
    ],

    // ==========================================
    // JOGO 2: PALAVRA BÍBLICA PROIBIDA (20 cartas)
    // ==========================================
    'palavra-proibida': [
      { id: 'p1', palavra: "Arca de Noé", proibidas: ["Noé", "Chuva", "Dilúvio", "Animais", "Barco"], icone: "ship" },
      { id: 'p2', palavra: "Davi", proibidas: ["Golias", "Rei", "Funda", "Harpa", "Ovelhas"], icone: "crown" },
      { id: 'p3', palavra: "Moisés", proibidas: ["Mar Vermelho", "Egito", "Pragas", "Cajado", "Mandamentos"], icone: "scroll" },
      { id: 'p4', palavra: "Jardim do Éden", proibidas: ["Adão", "Eva", "Serpente", "Fruto", "Árvore"], icone: "help-circle" },
      { id: 'p5', palavra: "Cruz", proibidas: ["Jesus", "Morte", "Calvário", "Madeiro", "Salvação"], icone: "zap" },
      { id: 'p6', palavra: "Sansão", proibidas: ["Cabelo", "Dalila", "Força", "Leão", "Filisteus"], icone: "zap" },
      { id: 'p7', palavra: "Torre de Babel", proibidas: ["Línguas", "Céu", "Tijolo", "Confusão", "Construir"], icone: "help-circle" },
      { id: 'p8', palavra: "Jonas", proibidas: ["Peixe", "Nínive", "Tempestade", "Fugir", "Mar"], icone: "ship" },
      { id: 'p9', palavra: "Salomão", proibidas: ["Sabedoria", "Templo", "Rei", "Riqueza", "Julgamento"], icone: "crown" },
      { id: 'p10', palavra: "Maná", proibidas: ["Deserto", "Comida", "Céu", "Povo", "Moisés"], icone: "scroll" },
      { id: 'p11', palavra: "Monte Sinai", proibidas: ["Moisés", "Mandamentos", "Tábua", "Fogo", "Nuvem"], icone: "scroll" },
      { id: 'p12', palavra: "João Batista", proibidas: ["Batismo", "Deserto", "Rio Jordão", "Mel", "Gafanhoto"], icone: "scroll" },
      { id: 'p13', palavra: "Judas Iscariotes", proibidas: ["Traição", "Beijo", "Moedas", "Prata", "Discípulo"], icone: "help-circle" },
      { id: 'p14', palavra: "Estrela de Belém", proibidas: ["Jesus", "Nascimento", "Magos", "Céu", "Oriente"], icone: "crown" },
      { id: 'p15', palavra: "Muralhas de Jericó", proibidas: ["Josué", "Queda", "Voltas", "Trombetas", "Muro"], icone: "crown" },
      { id: 'p16', palavra: "Pedro", proibidas: ["Pescador", "Chaves", "Negação", "Galo", "Água"], icone: "scroll" },
      { id: 'p17', palavra: "Paulo", proibidas: ["Damasco", "Cartas", "Apóstolo", "Cegueira", "Gentios"], icone: "zap" },
      { id: 'p18', palavra: "Zaqueu", proibidas: ["Árvore", "Rico", "Baixo", "Jericó", "Imposto"], icone: "help-circle" },
      { id: 'p19', palavra: "Gideão", proibidas: ["Lã", "300", "Jarrros", "Trombetas", "Midianitas"], icone: "zap" },
      { id: 'p20', palavra: "Ester", proibidas: ["Rainha", "Assuero", "Judeus", "Haman", "Banquete"], icone: "crown" }
    ],

    // ==========================================
    // JOGO 3: QUEM DISSE? (40 cartas)
    // ==========================================
    'quem-disse': [
      { id: 'd1', palavra: 'De quem é a famosa fala: "Eu e a minha casa serviremos ao Senhor"?', dicas: ["Moisés", "Josué", "Davi", "Samuel"], resposta: "Josué", referencia: "Josué 24:15", icone: "message-square" },
      { id: 'd2', palavra: 'Quem disse: "Para onde fores irei, e onde tu pousares, ali pousarei; o teu povo é o meu povo"?', dicas: ["Rute", "Ester", "Maria", "Sara"], resposta: "Rute", referencia: "Rute 1:16", icone: "message-square" },
      { id: 'd3', palavra: 'Quem exclamou: "O Senhor é o meu pastor, nada me faltará"?', dicas: ["Salomão", "Davi", "Moisés", "Malaquias"], resposta: "Davi", referencia: "Salmo 23:1", icone: "message-square" },
      { id: 'd4', palavra: 'Quem perguntou a Deus: "Sou eu o guardião do meu irmão"?', dicas: ["Abel", "Caim", "Jacó", "Esaú"], resposta: "Caim", referencia: "Gênesis 4:9", icone: "message-square" },
      { id: 'd5', palavra: 'Quem disse: "Fala, porque o teu servo ouve"?', dicas: ["Samuel", "Eli", "Davi", "Salomão"], resposta: "Samuel", referencia: "1 Samuel 3:10", icone: "message-square" },
      { id: 'd6', palavra: 'Quem disse: "Ainda que ele me mate, nele esperarei"?', dicas: ["Jó", "Davi", "Abraão", "Jeremias"], resposta: "Jó", referencia: "Jó 13:15", icone: "message-square" },
      { id: 'd7', palavra: 'Quem declarou: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra"?', dicas: ["Isabel", "Maria", "Ana", "Marta"], resposta: "Maria", referencia: "Lucas 1:38", icone: "message-square" },
      { id: 'd8', palavra: 'Quem disse a Jesus: "Senhor, tu sabes todas as coisas; tu sabes que eu te amo"?', dicas: ["João", "Tiago", "Pedro", "Tomé"], resposta: "Pedro", referencia: "João 21:17", icone: "message-square" },
      { id: 'd9', palavra: 'Quem gritou: "Arrependei-vos, porque é chegado o reino dos céus"?', dicas: ["Jesus", "João Batista", "Paulo", "Pedro"], resposta: "João Batista", referencia: "Mateus 3:2", icone: "message-square" },
      { id: 'd10', palavra: 'Quem disse a Jesus: "Se tu quiseres, podes purificar-me"?', dicas: ["Um cego", "Um coxo", "Um leproso", "Um paralítico"], resposta: "Um leproso", referencia: "Mateus 8:2", icone: "message-square" },
      { id: 'd11', palavra: 'Quem declarou na cruz: "Pai, nas tuas mãos entrego o meu espírito"?', dicas: ["Estêvão", "Jesus", "Pedro", "Ladrão arrependido"], resposta: "Jesus", referencia: "Lucas 23:46", icone: "message-square" },
      { id: 'd12', palavra: 'Quem disse: "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa"?', dicas: ["Paulo", "Pedro", "Jesus", "Barnabé"], resposta: "Paulo", referencia: "Atos 16:31", icone: "message-square" },
      { id: 'd13', palavra: 'Quem disse: "Combati o bom combate, acabei a carreira, guardei a fé"?', dicas: ["Pedro", "Paulo", "Tiago", "João"], resposta: "Paulo", referencia: "2 Timóteo 4:7", icone: "message-square" },
      { id: 'd14', palavra: 'Quem disse: "Antes importa obedecer a Deus do que aos homens"?', dicas: ["Paulo", "Pedro", "Estêvão", "João"], resposta: "Pedro", referencia: "Atos 5:29", icone: "message-square" },
      { id: 'd15', palavra: 'Quem disse: "Até aqui nos ajudou o Senhor"?', dicas: ["Saul", "Samuel", "Davi", "Josué"], resposta: "Samuel", referencia: "1 Samuel 7:12", icone: "message-square" },
      { id: 'd16', palavra: 'Quem disse: "Senhor, não lhes imputes este pecado", enquanto era apedrejado?', dicas: ["Estêvão", "Paulo", "Tiago", "Filipe"], resposta: "Estêvão", referencia: "Atos 7:60", icone: "message-square" },
      { id: 'd17', palavra: 'Quem disse: "Não tenho prata nem ouro; mas o que tenho isso te dou"?', dicas: ["João", "Pedro", "Paulo", "Jesus"], resposta: "Pedro", referencia: "Atos 3:6", icone: "message-square" },
      { id: 'd18', palavra: 'Quem disse a Jesus: "Se tu estivesses aqui, meu irmão não teria morrido"?', dicas: ["Maria", "Marta", "Isabel", "Maria Madalena"], resposta: "Marta", referencia: "João 11:21", icone: "message-square" },
      { id: 'd19', palavra: 'Quem confessou: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra"?', dicas: ["Davi", "Jó", "Moisés", "Isaías"], resposta: "Jó", referencia: "Jó 19:25", icone: "message-square" },
      { id: 'd20', palavra: 'Quem disse: "Se o Senhor está conosco, por que nos sobreveio tudo isto?"', dicas: ["Gideão", "Sansão", "Josué", "Moisés"], resposta: "Gideão", referencia: "Juízes 6:13", icone: "message-square" },
      { id: 'd21', palavra: 'Quem disse: "Graças a Deus pelo seu dom inefável"?', dicas: ["Paulo", "Pedro", "Jesus", "Tiago"], resposta: "Paulo", referencia: "2 Coríntios 9:15", icone: "message-square" },
      { id: 'd22', palavra: 'Quem disse: "Seja feita a tua vontade, assim na terra como no céu"?', dicas: ["Moisés", "Davi", "Jesus", "Salomão"], resposta: "Jesus", referencia: "Mateus 6:10", icone: "message-square" },
      { id: 'd23', palavra: 'Quem disse: "Como poderei eu cometer este grande mal, e pecar contra Deus?"', dicas: ["José", "Davi", "Daniel", "Sansão"], resposta: "José", referencia: "Gênesis 39:9", icone: "message-square" },
      { id: 'd24', palavra: 'Quem disse a Davi: "Tu és este homem!" revelando seu pecado?', dicas: ["Samuel", "Natã", "Gad", "Elias"], resposta: "Natã", referencia: "2 Samuel 12:7", icone: "message-square" },
      { id: 'd25', palavra: 'Quem disse: "A minha alma engrandece ao Senhor"?', dicas: ["Ana", "Maria", "Isabel", "Rute"], resposta: "Maria", referencia: "Lucas 1:46", icone: "message-square" },
      { id: 'd26', palavra: 'Quem disse: "Porque o meu jugo é suave e o meu fardo é leve"?', dicas: ["Paulo", "Jesus", "Moisés", "Pedro"], resposta: "Jesus", referencia: "Mateus 11:30", icone: "message-square" },
      { id: 'd27', palavra: 'Quem perguntou: "Que é a verdade?" durante o julgamento de Jesus?', dicas: ["Pilatos", "Herodes", "Caifás", "Anás"], resposta: "Pilatos", referencia: "João 18:38", icone: "message-square" },
      { id: 'd28', palavra: 'Quem disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo"?', dicas: ["João Batista", "Pedro", "Isaías", "Anjo Gabriel"], resposta: "João Batista", referencia: "João 1:29", icone: "message-square" },
      { id: 'd29', palavra: 'Quem disse: "Senhor, salva-me!" ao começar a afundar na água?', dicas: ["João", "André", "Pedro", "Tiago"], resposta: "Pedro", referencia: "Mateus 14:30", icone: "message-square" },
      { id: 'd30', palavra: 'Quem disse: "Escondi a tua palavra no meu coração, para não pecar contra ti"?', dicas: ["Salomão", "Davi", "Moisés", "Josué"], resposta: "Davi", referencia: "Salmo 119:11", icone: "message-square" },
      { id: 'd31', palavra: 'Quem disse: "Tudo posso naquele que me fortalece"?', dicas: ["Davi", "Paulo", "Pedro", "Josué"], resposta: "Paulo", referencia: "Filipenses 4:13", icone: "message-square" },
      { id: 'd32', palavra: 'Quem disse: "Se Deus é por nós, quem será contra nós"?', dicas: ["Paulo", "Pedro", "Davi", "Gideão"], resposta: "Paulo", referencia: "Romanos 8:31", icone: "message-square" },
      { id: 'd33', palavra: 'Quem disse: "Deixai vir a mim os pequeninos, e não os impeçais"?', dicas: ["Pedro", "Jesus", "João", "Moisés"], resposta: "Jesus", referencia: "Lucas 18:16", icone: "message-square" },
      { id: 'd34', palavra: 'Quem disse: "Não me roguez para que te deixe... o teu povo será o meu povo"?', dicas: ["Ester", "Rute", "Sara", "Noemi"], resposta: "Rute", referencia: "Rute 1:16", icone: "message-square" },
      { id: 'd35', palavra: 'Quem disse: "A beleza é enganosa, e a formosura é passageira; mas a mulher que teme ao Senhor será louvada"?', dicas: ["Salomão", "Davi", "Paulo", "Lemuel"], resposta: "Salomão", referencia: "Provérbios 31:30", icone: "message-square" },
      { id: 'd36', palavra: 'Quem disse: "Eis-me aqui, envia-me a mim"?', dicas: ["Jeremias", "Isaías", "Ezequiel", "Daniel"], resposta: "Isaías", referencia: "Isaías 6:8", icone: "message-square" },
      { id: 'd37', palavra: 'Quem disse: "Antes que te formasse no ventre te conheci"?', dicas: ["Deus (a Jeremias)", "Elias", "Samuel", "Moisés"], resposta: "Deus (a Jeremias)", referencia: "Jeremias 1:5", icone: "message-square" },
      { id: 'd38', palavra: 'Quem disse: "Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim"?', dicas: ["Pedro", "Paulo", "Jesus", "João Batista"], resposta: "Jesus", referencia: "João 14:6", icone: "message-square" },
      { id: 'd39', palavra: 'Quem disse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito"?', dicas: ["Jesus", "João", "Paulo", "Pedro"], resposta: "Jesus", referencia: "João 3:16", icone: "message-square" },
      { id: 'd40', palavra: 'Quem disse: "Não andeis ansiosos por coisa alguma; antes em tudo apresentai as vossas petições a Deus"?', dicas: ["Jesus", "Pedro", "Paulo", "Tiago"], resposta: "Paulo", referencia: "Filipenses 4:6", icone: "message-square" }
    ],

    // ==========================================
    // JOGO 4: QUAL VERSÍCULO SOU? (20 cartas)
    // ==========================================
    'qual-versiculo-sou': [
      { id: 'v1', dicas: ["Falo sobre o amor sacrificial de Deus pelo mundo inteiro.", "Fico localizado no Evangelho de João, no capítulo 3.", "Declaro que todo aquele que crer no Filho não pereça, mas tenha a vida eterna."], resposta: "João 3:16", referencia: "João 3:16", icone: "book-open" },
      { id: 'v2', dicas: ["Falo sobre a proteção divina contra perigos e pragas.", "Meu trecho mais famoso diz: 'Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti'.", "Sou o Salmo mais citado em momentos de tribulação."], resposta: "Salmo 91", referencia: "Salmo 91", icone: "book-open" },
      { id: 'v3', dicas: ["Falo sobre a suficiência do cuidado de Deus em nossas vidas.", "Começo com a frase: 'O Senhor é meu pastor'.", "Termino declarando: 'nada me faltará'."], resposta: "Salmo 23:1", referencia: "Salmo 23:1", icone: "book-open" },
      { id: 'v4', dicas: ["Falo sobre a força de fazer todas as coisas através de Cristo.", "Fico no livro de Filipenses, capítulo 4.", "Digo: 'Tudo posso naquele que me fortalece'."], resposta: "Filipenses 4:13", referencia: "Filipenses 4:13", icone: "book-open" },
      { id: 'v5', dicas: ["Falo sobre o início de todas as coisas e da criação.", "Sou a primeira frase de toda a Bíblia sagrada.", "Digo: 'No princípio criou Deus os céus e a terra'."], resposta: "Gênesis 1:1", referencia: "Gênesis 1:1", icone: "book-open" },
      { id: 'v6', dicas: ["Falo sobre a centralidade do amor no cristianismo.", "Digo que ainda que eu falasse as línguas dos homens e anjos, sem mim nada seria.", "Fico em 1 Coríntios, capítulo 13."], resposta: "1 Coríntios 13", referencia: "1 Coríntios 13", icone: "book-open" },
      { id: 'v7', dicas: ["Sou conhecido como o versículo que ensina a oração perfeita.", "Jesus me ensinou aos discípulos no Sermão do Monte.", "Começo com: 'Pai nosso, que estás nos céus, santificado seja o teu nome'."], resposta: "Mateus 6:9", referencia: "Mateus 6:9-13", icone: "book-open" },
      { id: 'v8', dicas: ["Falo sobre a soberania de Deus trabalhando no bem daqueles que o amam.", "Fico na epístola aos Romanos, capítulo 8, versículo 28.", "Digo: 'Todas as coisas cooperam para o bem daqueles que amam a Deus'."], resposta: "Romanos 8:28", referencia: "Romanos 8:28", icone: "book-open" },
      { id: 'v9', dicas: ["Falo sobre a verdade que liberta o homem do pecado.", "Estou no Evangelho de João, capítulo 8, versículo 32.", "Digo: 'E conhecereis a verdade, e a verdade vos libertará'."], resposta: "João 8:32", referencia: "João 8:32", icone: "book-open" },
      { id: 'v10', dicas: ["Falo sobre o caminho exclusivo de salvação e acesso a Deus.", "Jesus disse estas palavras a Tomé.", "Digo: 'Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim'."], resposta: "João 14:6", referencia: "João 14:6", icone: "book-open" },
      { id: 'v11', dicas: ["Falo sobre o valor de guardar a palavra para não errar.", "Sou muito famoso no Salmo 119.", "Digo: 'Escondi a tua palavra no meu coração, para não pecar contra ti'."], resposta: "Salmo 119:11", referencia: "Salmo 119:11", icone: "book-open" },
      { id: 'v12', dicas: ["Falo sobre o guia de luz que as Escrituras representam para os pés.", "Fico no Salmo 119, no versículo 105.", "Digo: 'Lâmpada para os meus pés é a tua palavra e luz para o meu caminho'."], resposta: "Salmo 119:105", referencia: "Salmo 119:105", icone: "book-open" },
      { id: 'v13', dicas: ["Falo sobre a aliança de serviço familiar assumida por um líder militar.", "Fico no livro de Josué, capítulo 24, versículo 15.", "Digo: 'Eu e a minha casa serviremos ao Senhor'."], resposta: "Josué 24:15", referencia: "Josué 24:15", icone: "book-open" },
      { id: 'v14', dicas: ["Falo sobre a cura e o perdão enviados à terra após o arrependimento do povo.", "Fico no livro de 2 Crônicas, capítulo 7, versículo 14.", "Começo com: 'Se o meu povo, que se chama pelo meu nome, se humilhar, e orar...'."], response: "2 Crônicas 7:14", resposta: "2 Crônicas 7:14", referencia: "2 Crônicas 7:14", icone: "book-open" },
      { id: 'v15', dicas: ["Falo sobre a fé sendo a certeza daquilo que não podemos ver.", "Sou a definição bíblica oficial de fé.", "Fico em Hebreus, capítulo 11, versículo 1."], resposta: "Hebreus 11:1", referencia: "Hebreus 11:1", icone: "book-open" },
      { id: 'v16', dicas: ["Falo sobre a renovação de forças semelhante ao vôo das águias.", "Fico no livro do profeta Isaías, capítulo 40, versículo 31.", "Digo: 'Mas os que esperam no Senhor renovarão as suas forças'."], resposta: "Isaías 40:31", referencia: "Isaías 40:31", icone: "book-open" },
      { id: 'v17', dicas: ["Falo sobre a instrução de crianças no caminho espiritual correto.", "Fico no livro de Provérbios, capítulo 22, versículo 6.", "Digo: 'Ensina a criança no caminho em que deve andar, e até quando for velho não se desviará dele'."], resposta: "Provérbios 22:6", referencia: "Provérbios 22:6", icone: "book-open" },
      { id: 'v18', dicas: ["Falo sobre a entrega do fardo e do descanso encontrado em Jesus.", "Fico no Evangelho de Mateus, capítulo 11.", "Digo: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei'."], resposta: "Mateus 11:28", referencia: "Mateus 11:28", icone: "book-open" },
      { id: 'v19', dicas: ["Falo sobre o fruto do Espírito contra o qual não há lei.", "Fico na epístola aos Gálatas, capítulo 5.", "Menciono amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio."], resposta: "Gálatas 5:22-23", referencia: "Gálatas 5:22-23", icone: "book-open" },
      { id: 'v20', dicas: ["Falo sobre a paz divina que ultrapassa todo o entendimento humano.", "Fico em Filipenses, capítulo 4, versículo 7.", "Digo que ela guardará os vossos corações e sentimentos em Cristo Jesus."], resposta: "Filipenses 4:7", referencia: "Filipenses 4:7", icone: "book-open" }
    ],

    // ==========================================
    // JOGO 5: O QUE SOU? (20 cartas)
    // ==========================================
    'o-que-sou': [
      { id: 'o1', dicas: ["Fui feita de madeira de acácia e revestida de ouro puro por dentro e fora.", "Guardava as tábuas da Lei, um pote de ouro com maná e a vara de Arão.", "Ficava posicionada no Santo dos Santos do Tabernáculo."], resposta: "Arca da Aliança", referencia: "Êxodo 25", icone: "help-circle" },
      { id: 'o2', dicas: ["Fui lançada de um ribeiro por um jovem pastor de ovelhas.", "Atingi com precisão a testa de um gigante filisteu.", "Fui a pedra usada na funda de Davi contra Golias."], resposta: "Uma pedra (de funda)", referencia: "1 Samuel 17", icone: "help-circle" },
      { id: 'o3', dicas: ["Fui usado para abrir o Mar Vermelho.", "Era o instrumento de liderança de Moisés em suas mãos.", "Transformei-me em serpente diante do Faraó do Egito."], resposta: "O Cajado de Moisés", referencia: "Êxodo 4-14", icone: "help-circle" },
      { id: 'o4', dicas: ["Fui construída por homens orgulhosos na terra de Sinar.", "O objetivo era fazer um nome célebre e alcançar os céus.", "Deus me interrompeu confundindo as línguas das pessoas."], resposta: "Torre de Babel", referencia: "Gênesis 11:1-9", icone: "help-circle" },
      { id: 'o5', dicas: ["Fui escrito pelo próprio dedo de Deus.", "Contenho dez leis fundamentais escritas em pedras.", "Fui quebrado por Moisés ao ver o bezerro de ouro."], resposta: "As Tábuas dos Dez Mandamentos", referencia: "Êxodo 31:18", icone: "help-circle" },
      { id: 'o6', dicas: ["Fui o alimento enviado por Deus ao povo no deserto durante 40 anos.", "Tinha o sabor de bolo de mel e caía do céu todas as manhãs.", "Estragava se guardado de um dia para o outro, exceto no sábado."], resposta: "Maná", referencia: "Êxodo 16", icone: "help-circle" },
      { id: 'o7', dicas: ["Fui o local onde Moisés avistou uma chama que não consumia as folhas.", "Ali Deus falou de dentro do arbusto em chamas.", "Moisés teve que tirar as sandálias porque o solo era santo."], resposta: "A Sarça Ardente", referencia: "Êxodo 3", icone: "help-circle" },
      { id: 'o8', dicas: ["Fui a cidade cujas grandes muralhas ruíram após o povo dar voltas tocando trombetas.", "Fui a primeira grande conquista de Josué na Terra Prometida.", "Apenas a família de Raabe foi salva em minha destruição."], resposta: "Jericó", referencia: "Josué 6", icone: "help-circle" },
      { id: 'o9', dicas: ["Fui a cidade onde Jesus nasceu.", "Fui apontada pelo profeta Miqueias como o berço do Messias.", "Sou chamada de Cidade de Davi."], resposta: "Belém", referencia: "Mateus 2", icone: "help-circle" },
      { id: 'o10', dicas: ["Fui o rio onde Jesus foi batizado por João Batista.", "Minhas águas foram cruzadas a pé enxuto liderados por Josué.", "Naamã mergulhou sete vezes em mim para ser curado."], resposta: "Rio Jordão", referencia: "Marcos 1:9", icone: "help-circle" },
      { id: 'o11', dicas: ["Fui a primeira praga enviada por Deus contra o Egito.", "Transformei toda a água do rio Nilo.", "Fiz os peixes morrerem e a água ficar imbebível."], resposta: "Água em Sangue", referencia: "Êxodo 7:14-25", icone: "help-circle" },
      { id: 'o12', dicas: ["Fui o monte onde Jesus foi crucificado.", "Significo ''Lugar da Caveira''.", "Também sou conhecido como Calvário."], resposta: "Gólgota (Calvário)", referencia: "Mateus 27:33", icone: "help-circle" },
      { id: 'o13', dicas: ["Fui a embarcação gigante construída para salvar a criação de um dilúvio terrestre.", "Media trezentos côvados de comprimento e tinha três andares.", "Fui calafetada com betume por dentro e por fora."], resposta: "Arca de Noé", referencia: "Gênesis 6", icone: "help-circle" },
      { id: 'o14', dicas: ["Fui o local onde Deus criou o primeiro casal humano.", "Tinha rios como Tigre e Eufrates ao meu redor.", "Fui guardado por querubins e uma espada flamejante após a queda."], resposta: "Jardim do Éden", referencia: "Gênesis 2", icone: "help-circle" },
      { id: 'o15', dicas: ["Fui o objeto brilhante que guiou os Reis Magos vindos do Oriente.", "Parei exatamente sobre o lugar onde o menino Jesus estava.", "Indiquei o nascimento do Salvador no céu."], resposta: "A Estrela de Belém", referencia: "Mateus 2", icone: "help-circle" },
      { id: 'o16', dicas: ["Fui o deserto onde o povo hebreu peregrinou por quarenta anos.", "Ali o povo foi guiado por coluna de nuvem e de fogo.", "Ficava localizado entre o Egito e a Terra Prometida."], resposta: "Deserto do Sinai", referencia: "Números 14", icone: "help-circle" },
      { id: 'o17', dicas: ["Fui o objeto usado por Jacó como travesseiro em Betel.", "Naquela noite sonhei com uma escada subindo ao céu.", "Fui erguida como uma coluna e ungida com azeite."], resposta: "Uma pedra", referencia: "Gênesis 28:11", icone: "help-circle" },
      { id: 'o18', dicas: ["Fui a cidade famosa pelo comércio que foi destruída com fogo e enxofre devido ao pecado.", "A esposa de Ló olhou para trás e virou estátua de sal na minha fuga.", "Fazia par com Gomorra."], resposta: "Sodoma", referencia: "Gênesis 19", icone: "help-circle" },
      { id: 'o19', dicas: ["Fui a túnica colorida e luxuosa dada de presente a um filho favorito.", "Fui manchada com sangue de bode por irmãos invejosos.", "Pertenci a José, filho de Jacó."], resposta: "A Túnica Colorida de José", referencia: "Gênesis 37:3", icone: "help-circle" },
      { id: 'o20', dicas: ["Fui o local onde os discípulos de Jesus receberam o Espírito Santo no Pentecostes.", "Fomos descritos com línguas de fogo descendo sobre as pessoas.", "Ficava em um andar superior de uma casa em Jerusalém."], resposta: "O Cenáculo", referencia: "Atos 2:1-4", icone: "help-circle" }
    ],

    // ==========================================
    // JOGO 6: QUEM SABE, RESPONDE! (40 cartas)
    // ==========================================
    'quem-sabe-responde': [
      { id: 's1', palavra: "Quantos discípulos Jesus escolheu inicialmente para segui-lo?", dicas: ["7", "10", "12", "70"], resposta: "12", referencia: "Mateus 10:1", icone: "list" },
      { id: 's2', palavra: "Qual destas mulheres foi uma famosa juíza e líder militar em Israel?", dicas: ["Débora", "Rute", "Sara", "Noemi"], resposta: "Débora", referencia: "Juízes 4:4", icone: "list" },
      { id: 's3', palavra: "Qual é o primeiro livro contido na Bíblia Sagrada?", dicas: ["Êxodo", "Salmos", "Mateus", "Gênesis"], resposta: "Gênesis", referencia: "Gênesis 1:1", icone: "list" },
      { id: 's4', palavra: "Em qual cidade Jesus nasceu?", dicas: ["Jerusalém", "Belém", "Nazaré", "Jericó"], resposta: "Belém", referencia: "Mateus 2:1", icone: "list" },
      { id: 's5', palavra: "Quem escreveu a maioria dos Salmos da Bíblia?", dicas: ["Moisés", "Salomão", "Davi", "Isaías"], resposta: "Davi", referencia: "Salmo 23", icone: "list" },
      { id: 's6', palavra: "Por quantas moedas de prata Judas Iscariotes traiu Jesus?", dicas: ["10 moedas", "30 moedas", "50 moedas", "100 moedas"], resposta: "30 moedas", referencia: "Mateus 26:15", icone: "list" },
      { id: 's7', palavra: "Quem foi lançado na cova dos leões por orar a Deus?", dicas: ["Daniel", "José", "Jonas", "David"], resposta: "Daniel", referencia: "Daniel 6", icone: "list" },
      { id: 's8', palavra: "Qual foi o homem mais velho citado na Bíblia, vivendo 969 anos?", dicas: ["Matusalém", "Noé", "Adão", "Enoque"], resposta: "Matusalém", referencia: "Gênesis 5:27", icone: "list" },
      { id: 's9', palavra: "Quantas pragas Deus enviou ao Egito através de Moisés?", dicas: ["7 pragas", "10 pragas", "12 pragas", "3 pragas"], resposta: "10 pragas", referencia: "Êxodo 7-12", icone: "list" },
      { id: 's10', palavra: "Qual apóstolo é conhecido por ter negado Jesus três vezes antes de o galo cantar?", dicas: ["João", "Pedro", "Judas", "Tomé"], resposta: "Pedro", referencia: "Mateus 26:34", icone: "list" },
      { id: 's11', palavra: "Quem construiu o primeiro templo sagrado de Jerusalém?", dicas: ["Davi", "Salomão", "Saul", "Ezequias"], resposta: "Salomão", referencia: "1 Reis 6", icone: "list" },
      { id: 's12', palavra: "Quem foi o companheiro de Paulo na prisão que cantou louvores à meia-noite?", dicas: ["Pedro", "Silas", "Barnabé", "Timóteo"], resposta: "Silas", referencia: "Atos 16:25", icone: "list" },
      { id: 's13', palavra: "Qual o nome do mar que Moisés abriu com o cajado sob ordem divina?", dicas: ["Mar da Galileia", "Mar Morto", "Mar Vermelho", "Mar Mediterrâneo"], resposta: "Mar Vermelho", referencia: "Êxodo 14:21", icone: "list" },
      { id: 's14', palavra: "Qual destas pessoas foi levada ao céu sem passar pela morte física?", dicas: ["Moisés", "Enoque", "Davi", "Abraão"], resposta: "Enoque", referencia: "Gênesis 5:24", icone: "list" },
      { id: 's15', palavra: "Quem foi a mulher de Ló que se transformou em uma estátua de sal?", dicas: ["Rute", "Sara", "Sua esposa (sem nome citado)", "Ester"], resposta: "Sua esposa (sem nome citado)", referencia: "Gênesis 19:26", icone: "list" },
      { id: 's16', palavra: "Quem liderou o povo hebreu após a morte de Moisés?", dicas: ["Arão", "Calebe", "Josué", "Gideão"], resposta: "Josué", referencia: "Josué 1:1-2", icone: "list" },
      { id: 's17', palavra: "Quantos pães e peixes Jesus usou para alimentar cinco mil homens?", dicas: ["5 pães e 2 peixes", "7 pães e 3 peixes", "12 pães e 5 peixes", "3 pães e 1 peixe"], resposta: "5 pães e 2 peixes", referencia: "Mateus 14:17", icone: "list" },
      { id: 's18', palavra: "Quem foi o irmão de Moisés que falava em seu lugar diante do Faraó?", dicas: ["Josué", "Arão", "Hur", "Calebe"], resposta: "Arão", referencia: "Êxodo 4:14", icone: "list" },
      { id: 's19', palavra: "Qual o livro da Bíblia que narra a saída do povo hebreu do Egito?", dicas: ["Gênesis", "Números", "Levítico", "Êxodo"], resposta: "Êxodo", referencia: "Êxodo 1", icone: "list" },
      { id: 's20', palavra: "Quem teve a cabeça pedida em um prato pela filha de Herodias?", dicas: ["Jesus", "Estêvão", "João Batista", "Tiago"], resposta: "João Batista", referencia: "Mateus 14:8", icone: "list" },
      { id: 's21', palavra: "Qual o nome da montanha onde Moisés recebeu as tábuas dos Dez Mandamentos?", dicas: ["Monte Carmelo", "Monte Sinai", "Monte das Oliveiras", "Monte Ararat"], resposta: "Monte Sinai", referencia: "Êxodo 19:20", icone: "list" },
      { id: 's22', palavra: "Quem derrotou o gigante filisteu chamado Golias?", dicas: ["Saul", "Davi", "Sansão", "Gideão"], resposta: "Davi", referencia: "1 Samuel 17", icone: "list" },
      { id: 's23', palavra: "Que animal falou com o profeta Balaão no caminho?", dicas: ["Uma jumenta", "Uma ovelha", "Um leão", "Uma serpente"], resposta: "Uma jumenta", referencia: "Números 22:28", icone: "list" },
      { id: 's24', palavra: "Quem é considerado o pai da fé para judeus, cristãos e muçulmanos?", dicas: ["Adão", "Moisés", "Abraão", "Noé"], resposta: "Abraão", referencia: "Gênesis 12", icone: "list" },
      { id: 's25', palavra: "O que caiu do céu no deserto como alimento para os israelitas?", dicas: ["Pão ázimo", "Mel puro", "Maná", "Codornizes cozidas"], resposta: "Maná", referencia: "Êxodo 16:15", icone: "list" },
      { id: 's26', palavra: "Qual destas pessoas interpretou os sonhos do Faraó no Egito?", dicas: ["Daniel", "José", "Moisés", "Neemias"], resposta: "José", referencia: "Gênesis 41", icone: "list" },
      { id: 's27', palavra: "Quem foi o homem mais forte da Bíblia, cujos cabelos continham o segredo da força?", dicas: ["Sansão", "Davi", "Gideão", "Saul"], resposta: "Sansão", referencia: "Juízes 16", icone: "list" },
      { id: 's28', palavra: "Qual profeta foi engolido por um grande peixe após tentar fugir de Deus?", dicas: ["Elias", "Isaías", "Jonas", "Daniel"], resposta: "Jonas", referencia: "Jonas 1", icone: "list" },
      { id: 's29', palavra: "Em qual rio Jesus foi batizado por João Batista?", dicas: ["Rio Nilo", "Rio Eufrates", "Rio Jordão", "Rio Tigre"], resposta: "Rio Jordão", referencia: "Mateus 3:13", icone: "list" },
      { id: 's30', palavra: "Qual o último livro contido no Novo Testamento?", dicas: ["Apocalipse", "Judas", "Apócrifos", "Hebreus"], resposta: "Apocalipse", referencia: "Apocalipse 1", icone: "list" },
      { id: 's31', palavra: "De quem era a túnica colorida que causou inveja em seus irmãos?", dicas: ["Benjamin", "Rúben", "José", "Efraim"], resposta: "José", referencia: "Gênesis 37:3", icone: "list" },
      { id: 's32', palavra: "Quem foi a mãe de Jesus?", dicas: ["Marta", "Isabel", "Maria Madalena", "Maria"], resposta: "Maria", referencia: "Lucas 1:31", icone: "list" },
      { id: 's33', palavra: "Quem escreveu a Carta aos Romanos?", dicas: ["Pedro", "João", "Paulo", "Tiago"], resposta: "Paulo", referencia: "Romanos 1:1", icone: "list" },
      { id: 's34', palavra: "Qual profeta desafiou os 450 profetas de Baal no Monte Carmelo?", dicas: ["Elias", "Eliseu", "Isaías", "Jeremias"], resposta: "Elias", referencia: "1 Reis 18", icone: "list" },
      { id: 's35', palavra: "Quantos anos o povo hebreu peregrinou pelo deserto?", dicas: ["10 anos", "40 anos", "70 anos", "100 anos"], resposta: "40 anos", referencia: "Josué 5:6", icone: "list" },
      { id: 's36', palavra: "Qual destas cidades teve suas muralhas derrubadas após o povo marchar ao redor dela?", dicas: ["Sodoma", "Jericó", "Nínive", "Babel"], resposta: "Jericó", referencia: "Josué 6", icone: "list" },
      { id: 's37', palavra: "Qual milagre Jesus operou nas Bodas de Caná?", dicas: ["Cura de um cego", "Multiplicação dos peixes", "Água em vinho", "Ressurreição de Lázaro"], resposta: "Água em vinho", referencia: "João 2:1-11", icone: "list" },
      { id: 's38', palavra: "Quem foi a primeira mulher criada na Bíblia?", dicas: ["Sara", "Eva", "Lia", "Ester"], resposta: "Eva", referencia: "Gênesis 2:22", icone: "list" },
      { id: 's39', palavra: "Qual dos reis de Israel pediu a Deus apenas sabedoria para governar?", dicas: ["Davi", "Saul", "Salomão", "Ezequias"], resposta: "Salomão", referencia: "1 Reis 3:9", icone: "list" },
      { id: 's40', palavra: "Quem foi ressuscitado por Jesus após estar morto por quatro dias?", dicas: ["Zaqueu", "Lázaro", "Estêvão", "Tiago"], resposta: "Lázaro", referencia: "João 11", icone: "list" }
    ],

    // ==========================================
    // JOGO 7: BÍBLIMÍMICAS (20 cartas)
    // ==========================================
    'biblimimicas': [
      { id: 'm1', palavra: "Caminhar sobre as águas (Mímica)", proibidas: ["Jesus", "Pedro", "Mar", "Barco", "Afundar"], icone: "smile" },
      { id: 'm2', palavra: "Derrubar as muralhas de Jericó (Mímica)", proibidas: ["Buzina", "Trombeta", "Muro", "Grito", "Rodeador"], icone: "smile" },
      { id: 'm3', palavra: "Davi derrubando Golias com funda (Mímica)", proibidas: ["Pedra", "Gigante", "Estilingue", "Cair", "Fronte"], icone: "smile" },
      { id: 'm4', palavra: "Moisés abrindo o Mar Vermelho (Mímica)", proibidas: ["Cajado", "Água", "Egito", "Passagem", "Povo"], icone: "smile" },
      { id: 'm5', palavra: "Noé construindo a Arca com martelo (Mímica)", proibidas: ["Dilúvio", "Madeira", "Animais", "Chuva", "Serrote"], icone: "smile" },
      { id: 'm6', palavra: "Sansão empurrando as colunas do templo (Mímica)", proibidas: ["Força", "Cabelo", "Filisteus", "Desabar", "Pilares"], icone: "smile" },
      { id: 'm7', palavra: "Daniel orando na cova dos leões (Mímica)", proibidas: ["Garras", "Dentes", "Anjo", "Fera", "Joelho"], icone: "smile" },
      { id: 'm8', palavra: "Zaqueu subindo na figueira brava (Mímica)", proibidas: ["Baixo", "Galhos", "Árvore", "Jesus", "Cobrador"], icone: "smile" },
      { id: 'm9', palavra: "Jonas sendo cuspido pelo grande peixe (Mímica)", proibidas: ["Baleia", "Mar", "Praia", "Nínive", "Vômito"], icone: "smile" },
      { id: 'm10', palavra: "Estrela de Belém guiando os Reis Magos (Mímica)", proibidas: ["Céu", "Brilho", "Jesus", "Presentes", "Camelos"], icone: "smile" },
      { id: 'm11', palavra: "Balaão conversando com a jumenta (Mímica)", proibidas: ["Falar", "Animal", "Bater", "Anjo", "Espada"], icone: "smile" },
      { id: 'm12', palavra: "Jesus multiplicando os pães e peixes (Mímica)", proibidas: ["Cesta", "Alimento", "Multidão", "Sobras", "Cesta"], icone: "smile" },
      { id: 'm13', palavra: "Adão e Eva comendo o fruto da serpente (Mímica)", proibidas: ["Árvore", "Mordida", "Jardim", "Pecado", "Vergonha"], icone: "smile" },
      { id: 'm14', palavra: "Pedro pescando uma rede cheia de peixes (Mímica)", proibidas: ["Barco", "Mar", "Rede", "Puxar", "Água"], icone: "smile" },
      { id: 'm15', palavra: "Matusalém andando com bengala de idoso (Mímica)", proibidas: ["Velho", "Anos", "Idade", "Morte", "Morte"], icone: "smile" },
      { id: 'm16', palavra: "Ester sendo coroada rainha pelo rei (Mímica)", proibidas: ["Coroa", "Beleza", "Banquete", "Assuero", "Judeus"], icone: "smile" },
      { id: 'm17', palavra: "Elias subindo ao céu na carruagem de fogo (Mímica)", proibidas: ["Carro", "Cavalos", "Torvelinho", "Redemoinho", "Eliseu"], icone: "smile" },
      { id: 'm18', palavra: "Lázaro saindo da sepultura enfaixado (Mímica)", proibidas: ["Morto", "Túmulo", "Faixas", "Ressuscitar", "Marta"], icone: "smile" },
      { id: 'm19', palavra: "João Batista batizando no Rio Jordão (Mímica)", proibidas: ["Mergulhar", "Água", "Arrepender", "Jesus", "Cabeça"], icone: "smile" },
      { id: 'm20', palavra: "Ló e família correndo de Sodoma (Mímica)", proibidas: ["Fogo", "Sal", "Olhar", "Mulher", "Fuga"], icone: "smile" }
    ],

    // ==========================================
    // JOGO 8: QUEM SOU EU? EXTREME (20 cartas)
    // ==========================================
    'quem-sou-eu-extreme': [
      { id: 'ex1', dicas: ["Fui o escriba que registrou fielmente as profecias do profeta Jeremias.", "Meu nome significa 'Bendito' em hebraico.", "Tive um rolo de pergaminho queimado intencionalmente pelo rei Joaquim."], resposta: "Baruque", referencia: "Jeremias 36", icone: "zap" },
      { id: 'ex2', dicas: ["Fui citada na genealogia de Jesus Cristo como a mãe de Salomão.", "Fui a esposa do soldado Urias, o heteu, antes de me casar com o rei Davi.", "Fui avistada pelo rei Davi tomando banho do terraço do palácio."], resposta: "Bate-Seba", referencia: "2 Samuel 11", icone: "zap" },
      { id: 'ex3', dicas: ["Fui o homem mais forte depois de Sansão e matei um leão em uma cova num dia de neve.", "Fui o comandante da guarda pessoal de elite do rei Davi.", "Meu pai se chamava Joiada, e eu era da cidade de Cabzeel."], resposta: "Benaia", referencia: "2 Samuel 23:20", icone: "zap" },
      { id: 'ex4', dicas: ["Fui uma mulher que acolheu o profeta Elias durante um longo período de fome.", "Deus prometeu que a farinha da minha panela e o azeite da minha botija não acabariam.", "Minha cidade natal era Sarepta, na região de Sidom."], resposta: "A Viúva de Sarepta", referencia: "1 Reis 17:8-24", icone: "zap" },
      { id: 'ex5', dicas: ["Fui o sumo sacerdote que me omiti diante dos pecados dos meus filhos, Hofni e Finéias.", "Fui o mentor espiritual do jovem profeta Samuel no Tabernáculo.", "Morri aos 98 anos ao cair de costas da cadeira e quebrar o pescoço."], resposta: "Eli", referencia: "1 Samuel 1-4", icone: "zap" },
      { id: 'ex6', dicas: ["Fui o rei de Judá que orei no templo pedindo libertação contra o exército de Senaqueribe.", "Deus acrescentou 15 anos à minha vida após eu adoecer gravemente.", "Como sinal de cura, a sombra do relógio solar retrocedeu dez graus."], resposta: "Ezequias", referencia: "2 Reis 20 / Isaías 38", icone: "zap" },
      { id: 'ex7', dicas: ["Fui o profeta que repreendeu diretamente o rei Davi por seu pecado de adultério e assassinato.", "Usei uma parábola sobre uma ovelha rica de um homem pobre para confrontar o rei.", "Ajudei a coroar Salomão rei de Israel."], resposta: "Natã", referencia: "2 Samuel 12", icone: "zap" },
      { id: 'ex8', dicas: ["Fui o homem que tocou na Arca da Aliança para evitar que ela caísse do carro de bois.", "Fui ferido de morte por Deus imediatamente após o meu ato de irreverência.", "Minha morte ocorreu na eira de Nacom, durante o transporte da Arca."], resposta: "Uzá", referencia: "2 Samuel 6:6-7", icone: "zap" },
      { id: 'ex9', dicas: ["Fui o rei pagão da Babilônia que destruí Jerusalém e levei os judeus cativos.", "Fiquei louco e vivi como animal no campo, comendo capim por sete anos.", "Tive um sonho com uma estátua gigante de vários metais interpretada por Daniel."], resposta: "Nabucodonosor", referencia: "Daniel 2-4", icone: "zap" },
      { id: 'ex10', dicas: ["Fui o filho rebelde de Davi que tentei usurpar o trono do meu próprio pai.", "Tinha cabelos muito longos e pesados, cortados apenas uma vez por ano.", "Fiquei preso pelos cabelos nos galhos de um carvalho e fui morto por Joabe."], resposta: "Absalão", referencia: "2 Samuel 14-18", icone: "zap" },
      { id: 'ex11', dicas: ["Fui o discípulo que substituiu Judas Iscariotes no grupo dos doze apóstolos.", "Fui escolhido através do lançamento de sortes junto com José Barsabás.", "Fui votado pelos onze apóstolos restantes em Jerusalém."], resposta: "Matias", referencia: "Atos 1:21-26", icone: "zap" },
      { id: 'ex12', dicas: ["Fui a rainha ímpia que introduzi o culto a Baal em Israel e persegui o profeta Elias.", "Fui esposa do rei Acabe.", "Morri empurrada de uma janela e meu corpo foi devorado por cães de rua."], resposta: "Jezabel", referencia: "1 Reis 16 - 2 Reis 9", icone: "zap" },
      { id: 'ex13', dicas: ["Fui um rei de Israel que comecei a reinar com apenas sete anos de idade.", "Fui escondido no Templo por seis anos para escapar da fúria de Atalia.", "Fui orientado pelo fiel sumo sacerdote Joiada."], resposta: "Joás", referencia: "2 Reis 11-12", icone: "zap" },
      { id: 'ex14', dicas: ["Fui o general do exército da Síria que sofria de lepra.", "Fui curado após mergulhar sete vezes no Rio Jordão por ordem de Eliseu.", "Tentei pagar ao profeta pelo milagre, mas ele recusou."], resposta: "Naamã", referencia: "2 Reis 5", icone: "zap" },
      { id: 'ex15', dicas: ["Fui o homem que ajudou Jesus a carregar a cruz a caminho do Calvário.", "Fui forçado pelos soldados romanos a carregar o madeiro.", "Minha cidade de origem era Cirene, na África."], resposta: "Simão Cireneu", referencia: "Lucas 23:26", icone: "zap" },
      { id: 'ex16', dicas: ["Fui uma costureira de Jope que foi ressuscitada pelo apóstolo Pedro.", "Meu nome em grego significa 'Dorcas' (gazela).", "Fui muito conhecida por minhas boas obras e doação de roupas aos pobres."], resposta: "Tabita (Dorcas)", referencia: "Atos 9:36-42", icone: "zap" },
      { id: 'ex17', dicas: ["Fui o sogro de Moisés e sacerdote de Midiã.", "Aconselhei Moisés a delegar julgamentos a outros líderes competentes.", "Também fui conhecido na Bíblia pelo nome de Reuel."], resposta: "Jetro", referencia: "Êxodo 18", icone: "zap" },
      { id: 'ex18', dicas: ["Fui o homem que cedi meu próprio túmulo novo para o sepultamento de Jesus.", "Fui um membro rico do Sinédrio, mas discípulo secreto de Jesus.", "Era originário da cidade de Arimateia."], resposta: "José de Arimateia", referencia: "Mateus 27:57-60", icone: "zap" },
      { id: 'ex19', dicas: ["Fui um centurião romano piedoso que mandou chamar Pedro para pregar em minha casa.", "Fui a primeira conversão oficial de gentios descrita nos Atos dos Apóstolos.", "Vivia na cidade costeira de Cesareia."], resposta: "Cornélio", referencia: "Atos 10", icone: "zap" },
      { id: 'ex20', dicas: ["Fui o rei de Basã que tinha uma cama gigante de ferro.", "Fui o último dos gigantes refains derrotados pelos israelitas no deserto.", "Fui derrotado por Moisés na batalha de Edrei."], resposta: "Ogue", referencia: "Deuteronômio 3:1-11", icone: "zap" }
    ]
  }
};
