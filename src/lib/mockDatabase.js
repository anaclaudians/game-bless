// --- BANCO DE DADOS DE FALLBACK (Catálogo Completo com Suporte a Dificuldade) ---
export const mockDatabase = {
  jogos: [
    { id: 'quem-sou-eu', nome: 'Quem Sou Eu?', tipo: 'dicas', cor: '#E0664B', capa: '/capa-quem-sou-eu.png', regras: 'Leia as dicas uma a uma. O jogador deve adivinhar o personagem bíblico descrito. Quanto menos dicas usar, melhor!' },
    { id: 'palavra-proibida', nome: 'Palavra Bíblica Proibida', tipo: 'acao', cor: '#C25134', capa: '/capa-palavra-proibida.png', regras: 'Tente fazer sua equipe adivinhar a palavra principal da carta. ATENÇÃO: É proibido falar qualquer uma das outras 5 palavras listadas na carta!' },
    { id: 'quem-disse', nome: 'Quem Disse?', tipo: 'quiz', cor: '#9E4733', capa: '/capa-quiz.png', regras: 'Leia o versículo bíblico apresentado na tela e selecione o autor correto da frase entre as quatro opções de resposta.' },
    { id: 'qual-versiculo-sou', nome: 'Qual Versículo Sou?', tipo: 'dicas', cor: '#D17A22', capa: '/capa-quiz.png', regras: 'Adivinhe qual é o versículo ou Salmo descrito através de 3 pistas progressivas sobre o seu significado e conteúdo.' },
    { id: 'o-que-sou', nome: 'O Que Sou?', tipo: 'dicas', cor: '#9A5B43', capa: '/capa-quem-sou-eu.png', regras: 'Adivinhe qual objeto, animal ou local sagrado da Bíblia está sendo descrito com base em 3 pistas inteligentes.' },
    { id: 'quem-sabe-responde', nome: 'Quem Sabe, Responde!', tipo: 'quiz', cor: '#6B4F4F', capa: '/capa-quiz.png', regras: 'Um teste clássico de conhecimentos bíblicos gerais de múltipla escolha. Escolha a resposta certa entre as 4 alternativas.' },
    { id: 'biblimimicas', nome: 'Bíblimímicas', tipo: 'acao', cor: '#B55A30', capa: '/capa-biblimimicas.png', regras: 'Um jogador deve encenar em mímica a ação ou passagem bíblica exibida na tela. O restante do grupo tenta adivinhar. O tempo está correndo!' },
    { id: 'quem-sou-eu-extreme', nome: 'Quem Sou Eu? (Extreme)', tipo: 'dicas', cor: '#842E1B', capa: '/capa-faz-sentido.png', regras: 'Para estudiosos da Bíblia! Adivinhe o personagem com base em 3 pistas sobre detalhes obscuros ou pouco conhecidos das Escrituras.' },
    { id: 'onde-estou', nome: 'Onde Estou?', tipo: 'dicas', cor: '#9E4773', capa: '/capa-quem-sou-eu.png', regras: 'Descubra qual cidade, monte, rio ou localidade geográfica da Bíblia está sendo descrita pelas 3 pistas progressivas.' },
    { id: 'familias-da-biblia', nome: 'Famílias da Bíblia', tipo: 'quiz', cor: '#7A8B47', capa: '/capa-faz-sentido.png', regras: 'Teste seus conhecimentos sobre as linhagens, casamentos, parentescos e histórias das famílias que marcaram as Escrituras.' },
    { id: 'faz-sentido', nome: 'Faz Sentido?', tipo: 'acao', cor: '#D15E84', capa: '/capa-faz-sentido.png', regras: 'Debate e conexão! Jogue cartas de conceitos físicos e veja se eles têm relação lógica com a carta no centro da mesa. Votem e gerenciem as 3 vidas locais de cada um dos 4 participantes.' },
    { id: 'desafio-versiculos', nome: 'Desafio dos Versículos', tipo: 'quiz', cor: '#39A087', capa: '/capa-quiz.png', regras: 'Complete a palavra ausente ou adivinhe o versículo-chave correto apresentado na pergunta de múltipla escolha.' }
  ],
  cartas: {
    // ==========================================
    // JOGO 1: QUEM SOU EU? (5 por nível = 15 cartas)
    // ==========================================
    'quem-sou-eu': [
      // FÁCIL
      { id: 'q1', dificuldade: 'facil', dicas: ["Fui colocado numa arca de madeira para me salvar do dilúvio.", "Deus enviou um arco-íris no céu como promessa.", "Fui o pai de Sem, Cam e Jafé."], resposta: "Noé", referencia: "Gênesis 6-9", icone: "ship" },
      { id: 'q2', dificuldade: 'facil', dicas: ["Derrotei o gigante filisteu com uma funda e cinco pedras.", "Fui o rei de Israel que escreveu muitos Salmos.", "Fui chamado de homem segundo o coração de Deus."], resposta: "Davi", referencia: "1 Samuel 17", icone: "crown" },
      { id: 'q3', dificuldade: 'facil', dicas: ["Fui o homem mais forte da Bíblia.", "Minha força estava ligada aos meus cabelos compridos.", "Fui traído por Dalila, que me vendeu aos filisteus."], resposta: "Sansão", referencia: "Juízes 13-16", icone: "zap" },
      { id: 'q4', dificuldade: 'facil', dicas: ["Fui tirado das águas do Nilo pela filha do Faraó.", "Deus me usou para abrir o Mar Vermelho.", "Recebi as tábuas da Lei no Monte Sinai."], resposta: "Moisés", referencia: "Êxodo 2", icone: "scroll" },
      { id: 'q5', dificuldade: 'facil', dicas: ["Fui a primeira mulher criada por Deus.", "Fui tentada pela serpente a comer o fruto.", "Fui formada da costela de Adão."], resposta: "Eva", referencia: "Gênesis 2", icone: "help-circle" },
      // MÉDIO
      { id: 'q6', dificuldade: 'medio', dicas: ["Fui um cobrador de impostos muito baixo.", "Subi em um sicômoro (figueira brava) para ver Jesus passar.", "Jesus jantou na minha casa e mudei de vida."], resposta: "Zaqueu", referencia: "Lucas 19:1-10", icone: "help-circle" },
      { id: 'q7', dificuldade: 'medio', dicas: ["Julgava o povo debaixo de uma palmeira.", "Fui a única mulher a ser juíza em Israel.", "Fui à batalha com Baraque e ajudei a libertar o povo."], resposta: "Débora", referencia: "Juízes 4-5", icone: "scroll" },
      { id: 'q8', dificuldade: 'medio', dicas: ["Fui engolido por um grande peixe após desobedecer a Deus.", "Tentei fugir de navio para Társis em vez de pregar em Nínive.", "Fiquei três dias e noites no ventre do peixe."], resposta: "Jonas", referencia: "Jonas 1", icone: "ship" },
      { id: 'q9', dificuldade: 'medio', dicas: ["Fui vendido pelos meus irmãos por moedas de prata.", "Fui preso injustamente, mas interpretei os sonhos do Faraó.", "Me tornei governador do Egito."], resposta: "José", referencia: "Gênesis 37", icone: "scroll" },
      { id: 'q10', dificuldade: 'medio', dicas: ["Fui a rainha judia que salvou meu povo da destruição.", "Fui escolhida em concurso pelo rei Assuero da Pérsia.", "Meu primo e protetor se chamava Mardoqueu."], resposta: "Ester", referencia: "Ester 2", icone: "crown" },
      // DIFÍCIL
      { id: 'q11', dificuldade: 'dificil', dicas: ["Fui o sumo sacerdote mentor espiritual do profeta Samuel.", "Meus filhos Hofni e Finéias pecaram gravemente.", "Morri aos 98 anos ao cair de costas da cadeira."], resposta: "Eli", referencia: "1 Samuel 1", icone: "zap" },
      { id: 'q12', dificuldade: 'dificil', dicas: ["Fui o primeiro mártir da igreja cristã primitiva.", "Fui apedrejado e orei pedindo perdão para os algozes.", "Vi os céus abertos e Jesus em pé à direita de Deus."], resposta: "Estêvão", referencia: "Atos 7", icone: "zap" },
      { id: 'q13', dificuldade: 'dificil', dicas: ["Fui a esposa de Urias que depois se casou com o rei Davi.", "Fui avistada tomando banho do terraço do palácio do rei.", "Fui a mãe do rei Salomão."], resposta: "Bate-Seba", referencia: "2 Samuel 11", icone: "zap" },
      { id: 'q14', dificuldade: 'dificil', dicas: ["Lutei com Deus em Peniel e saí mancando da coxa.", "Tive meu nome mudado para Israel.", "Fui o pai das doze tribos."], resposta: "Jacó", referencia: "Gênesis 32", icone: "scroll" },
      { id: 'q15', dificuldade: 'dificil', dicas: ["Fui o profeta que subiu ao céu em uma carruagem de fogo.", "Desafiei os 450 profetas de Baal no Monte Carmelo.", "Orei para parar de chover e depois orei para chover novamente."], resposta: "Elias", referencia: "1 Reis 18", icone: "zap" }
    ],

    // ==========================================
    // JOGO 2: PALAVRA BÍBLICA PROIBIDA (15 cartas)
    // ==========================================
    'palavra-proibida': [
      // FÁCIL
      { id: 'p1', dificuldade: 'facil', palavra: "Arca de Noé", proibidas: ["Noé", "Chuva", "Dilúvio", "Animais", "Barco"], icone: "ship" },
      { id: 'p2', dificuldade: 'facil', palavra: "Davi", proibidas: ["Golias", "Rei", "Funda", "Harpa", "Ovelhas"], icone: "crown" },
      { id: 'p3', dificuldade: 'facil', palavra: "Moisés", proibidas: ["Mar Vermelho", "Egito", "Pragas", "Cajado", "Mandamentos"], icone: "scroll" },
      { id: 'p4', dificuldade: 'facil', palavra: "Cruz", proibidas: ["Jesus", "Morte", "Calvário", "Madeiro", "Salvação"], icone: "zap" },
      { id: 'p5', dificuldade: 'facil', palavra: "Adão", proibidas: ["Eva", "Jardim", "Pecado", "Fruto", "Primeiro"], icone: "help-circle" },
      // MÉDIO
      { id: 'p6', dificuldade: 'medio', palavra: "Maná", proibidas: ["Deserto", "Comida", "Céu", "Povo", "Moisés"], icone: "scroll" },
      { id: 'p7', dificuldade: 'medio', palavra: "Torre de Babel", proibidas: ["Línguas", "Céu", "Tijolo", "Confusão", "Construir"], icone: "help-circle" },
      { id: 'p8', dificuldade: 'medio', palavra: "Jonas", proibidas: ["Peixe", "Nínive", "Tempestade", "Fugir", "Mar"], icone: "ship" },
      { id: 'p9', dificuldade: 'medio', palavra: "Salomão", proibidas: ["Sabedoria", "Templo", "Rei", "Riqueza", "Julgamento"], icone: "crown" },
      { id: 'p10', dificuldade: 'medio', palavra: "Muralhas de Jericó", proibidas: ["Josué", "Queda", "Voltas", "Trombetas", "Muro"], icone: "crown" },
      // DIFÍCIL
      { id: 'p11', dificuldade: 'dificil', palavra: "Gideão", proibidas: ["Lã", "300", "Jarros", "Trombetas", "Midianitas"], icone: "zap" },
      { id: 'p12', dificuldade: 'dificil', palavra: "Estrela de Belém", proibidas: ["Jesus", "Nascimento", "Magos", "Céu", "Oriente"], icone: "crown" },
      { id: 'p13', dificuldade: 'dificil', palavra: "Melquisedeque", proibidas: ["Sacerdote", "Abraão", "Dízimo", "Salém", "Rei"], icone: "zap" },
      { id: 'p14', dificuldade: 'dificil', palavra: "Urim e Tumim", proibidas: ["Pedras", "Sacerdote", "Sorte", "Decisão", "Peitoral"], icone: "help-circle" },
      { id: 'p15', dificuldade: 'dificil', palavra: "Querubim", proibidas: ["Anjo", "Asas", "Guarda", "Éden", "Glória"], icone: "zap" }
    ],

    // ==========================================
    // JOGO 3: QUEM DISSE? (15 por nível = 45 cartas no total)
    // ==========================================
    'quem-disse': [
      // FÁCIL
      { id: 'd1', dificuldade: 'facil', palavra: 'Quem disse: "Eu e a minha casa serviremos ao Senhor"?', dicas: ["Moisés", "Josué", "Davi", "Samuel"], resposta: "Josué", referencia: "Josué 24:15", icone: "message-square" },
      { id: 'd2', dificuldade: 'facil', palavra: 'Quem disse: "O Senhor é o meu pastor, nada me faltará"?', dicas: ["Salomão", "Davi", "Moisés", "Isaías"], resposta: "Davi", referencia: "Salmo 23:1", icone: "message-square" },
      { id: 'd3', palavra: 'Quem disse: "Para onde fores irei, e onde tu pousares, ali pousarei; o teu povo é o meu povo"?', dicas: ["Rute", "Ester", "Maria", "Sara"], resposta: "Rute", referencia: "Rute 1:16", icone: "message-square", dificuldade: "facil" },
      { id: 'd4', palavra: 'Quem perguntou a Deus: "Sou eu o guardião do meu irmão"?', dicas: ["Abel", "Caim", "Jacó", "Esaú"], resposta: "Caim", referencia: "Gênesis 4:9", icone: "message-square", dificuldade: "facil" },
      { id: 'd5', palavra: 'Quem exclamou na cruz: "Pai, nas tuas mãos entrego o meu espírito"?', dicas: ["Estêvão", "Jesus", "Pedro", "João"], resposta: "Jesus", referencia: "Lucas 23:46", icone: "message-square", dificuldade: "facil" },
      { id: 'd6', palavra: 'Quem disse: "Eis aqui a serva do Senhor; cumpra-se em mi segundo a tua palavra"?', dicas: ["Isabel", "Maria", "Ana", "Marta"], resposta: "Maria", referencia: "Lucas 1:38", icone: "message-square", dificuldade: "facil" },
      { id: 'd7', palavra: 'Quem disse: "Deixai vir a mim os pequeninos, e não os impeçais"?', dicas: ["Pedro", "Jesus", "João", "Moisés"], resposta: "Jesus", referencia: "Lucas 18:16", icone: "message-square", dificuldade: "facil" },
      { id: 'd8', palavra: 'Quem disse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito"?', dicas: ["Jesus", "João", "Paulo", "Pedro"], resposta: "Jesus", referencia: "João 3:16", icone: "message-square", dificuldade: "facil" },
      { id: 'd9', palavra: 'Quem disse: "Tudo posso naquele que me fortalece"?', dicas: ["Davi", "Paulo", "Pedro", "Josué"], resposta: "Paulo", referencia: "Filipenses 4:13", icone: "message-square", dificuldade: "facil" },
      { id: 'd10', palavra: 'Quem disse: "Se Deus é por nós, quem será contra nós"?', dicas: ["Paulo", "Pedro", "Davi", "Gideão"], resposta: "Paulo", referencia: "Romanos 8:31", icone: "message-square", dificuldade: "facil" },
      { id: 'd11', palavra: 'Quem disse: "Escondi a tua palavra no meu coração, para não pecar contra ti"?', dicas: ["Salomão", "Davi", "Moisés", "Josué"], resposta: "Davi", referencia: "Salmo 119:11", icone: "message-square", dificuldade: "facil" },
      { id: 'd12', palavra: 'Quem gritou: "Arrependei-vos, porque é chegado o reino dos céus"?', dicas: ["Jesus", "João Batista", "Paulo", "Pedro"], resposta: "João Batista", referencia: "Mateus 3:2", icone: "message-square", dificuldade: "facil" },
      { id: 'd13', palavra: 'Quem disse a Jesus: "Senhor, tu sabes todas as coisas; tu sabes que eu te amo"?', dicas: ["João", "Tiago", "Pedro", "Tomé"], resposta: "Pedro", referencia: "João 21:17", icone: "message-square", dificuldade: "facil" },
      { id: 'd14', palavra: 'Quem disse a Jesus: "Se tu quiseres, podes purificar-me"?', dicas: ["Um cego", "Um coxo", "Um leproso", "Um paralítico"], resposta: "Um leproso", referencia: "Mateus 8:2", icone: "message-square", dificuldade: "facil" },
      { id: 'd15', palavra: 'Quem disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo"?', dicas: ["João Batista", "Pedro", "Isaías", "Gabriel"], resposta: "João Batista", referencia: "João 1:29", icone: "message-square", difficulty: "facil",  dificuldade: "facil" },
      // MÉDIO
      { id: 'd16', dificuldade: 'medio', palavra: 'Quem disse a Jesus: "Se tu estivesses aqui, meu irmão não teria morrido"?', dicas: ["Maria", "Marta", "Isabel", "Madalena"], resposta: "Marta", referencia: "João 11:21", icone: "message-square" },
      { id: 'd17', dificuldade: 'medio', palavra: 'Quem disse: "Até aqui nos ajudou o Senhor"?', dicas: ["Saul", "Samuel", "Davi", "Josué"], resposta: "Samuel", referencia: "1 Samuel 7:12", icone: "message-square" },
      { id: 'd18', palavra: 'Quem disse: "Fala, porque o teu servo ouve"?', dicas: ["Samuel", "Eli", "Davi", "Salomão"], resposta: "Samuel", referencia: "1 Samuel 3:10", icone: "message-square", dificuldade: "medio" },
      { id: 'd19', palavra: 'Quem disse: "Não tenho prata nem ouro; mas o que tenho isso te dou"?', dicas: ["João", "Pedro", "Paulo", "Jesus"], resposta: "Pedro", referencia: "Atos 3:6", icone: "message-square", dificuldade: "medio" },
      { id: 'd20', palavra: 'Quem disse: "Se o Senhor está conosco, por que nos sobreveio tudo isto?"', dicas: ["Gideão", "Sansão", "Josué", "Moisés"], resposta: "Gideão", referencia: "Juízes 6:13", icone: "message-square", dificuldade: "medio" },
      { id: 'd21', palavra: 'Quem disse: "Eis-me aqui, envia-me a mim"?', dicas: ["Jeremias", "Isaías", "Ezequiel", "Daniel"], resposta: "Isaías", referencia: "Isaías 6:8", icone: "message-square", dificuldade: "medio" },
      { id: 'd22', palavra: 'Quem confessou: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra"?', dicas: ["Davi", "Jó", "Moisés", "Isaías"], resposta: "Jó", referencia: "Jó 19:25", icone: "message-square", dificuldade: "medio" },
      { id: 'd23', palavra: 'Quem disse: "Como poderei eu cometer este grande mal, e pecar contra Deus?"', dicas: ["José", "Davi", "Daniel", "Sansão"], resposta: "José", referencia: "Gênesis 39:9", icone: "message-square", dificuldade: "medio" },
      { id: 'd24', palavra: 'Quem disse: "A minha alma engrandece ao Senhor"?', dicas: ["Ana", "Maria", "Isabel", "Rute"], resposta: "Maria", referencia: "Lucas 1:46", icone: "message-square", dificuldade: "medio" },
      { id: 'd25', palavra: 'Quem perguntou: "Que é a verdade?" durante o julgamento de Jesus?', dicas: ["Pilatos", "Herodes", "Caifás", "Anás"], resposta: "Pilatos", referencia: "João 18:38", icone: "message-square", dificuldade: "medio" },
      { id: 'd26', palavra: 'Quem disse: "Não andeis ansiosos por coisa alguma; antes em tudo apresentai as vossas petições a Deus"?', dicas: ["Jesus", "Pedro", "Paulo", "Tiago"], resposta: "Paulo", referencia: "Filipenses 4:6", icone: "message-square", dificuldade: "medio" },
      { id: 'd27', palavra: 'Quem disse: "Antes importa obedecer a Deus do que aos homens"?', dicas: ["Paulo", "Pedro", "Estêvão", "João"], resposta: "Pedro", referencia: "Atos 5:29", icone: "message-square", dificuldade: "medio" },
      { id: 'd28', palavra: 'Quem disse: "Senhor, não lhes imputes este pecado", enquanto era apedrejado?', dicas: ["Estêvão", "Paulo", "Tiago", "Filipe"], resposta: "Estêvão", referencia: "Atos 7:60", icone: "message-square", dificuldade: "medio" },
      { id: 'd29', palavra: 'Quem disse: "Seja feita a tua vontade, assim na terra como no céu"?', dicas: ["Moisés", "Davi", "Jesus", "Salomão"], resposta: "Jesus", referencia: "Mateus 6:10", icone: "message-square", dificuldade: "medio" },
      { id: 'd30', palavra: 'Quem disse: "Combati o bom combate, acabei a carreira, guardei a fé"?', dicas: ["Pedro", "Paulo", "Tiago", "João"], resposta: "Paulo", referencia: "2 Timóteo 4:7", icone: "message-square", difficulty: "medio",  dificuldade: "medio" },
      // DIFÍCIL
      { id: 'd31', dificuldade: 'dificil', palavra: 'Quem disse a Davi: "Tu és este homem!" revelando seu pecado?', dicas: ["Samuel", "Natã", "Gad", "Elias"], resposta: "Natã", referencia: "2 Samuel 12:7", icone: "message-square" },
      { id: 'd32', dificuldade: 'dificil', palavra: 'Quem exclamou: "Ainda que ele me mate, nele esperarei"?', dicas: ["Jó", "Davi", "Abraão", "Jeremias"], resposta: "Jó", referencia: "Jó 13:15", icone: "message-square" },
      { id: 'd33', palavra: 'Quem disse: "Antes que te formasse no ventre te conheci"?', dicas: ["Deus (a Jeremias)", "Elias", "Samuel", "Moisés"], resposta: "Deus (a Jeremias)", referencia: "Jeremias 1:5", icone: "message-square", dificuldade: "dificil" },
      { id: 'd34', palavra: 'Quem disse: "A beleza é enganosa... mas a mulher que teme ao Senhor será louvada"?', dicas: ["Salomão", "Davi", "Paulo", "Lemuel"], resposta: "Salomão", referencia: "Provérbios 31:30", icone: "message-square", dificuldade: "dificil" },
      { id: 'd35', palavra: 'Quem disse: "Não fomos nós que lançamos três homens amarrados dentro do fogo?"', dicas: ["Nabucodonosor", "Hamã", "Ciro", "Dario"], resposta: "Nabucodonosor", referencia: "Daniel 3:24", icone: "message-square", dificuldade: "dificil" },
      { id: 'd36', palavra: 'Quem disse: "Necessário vos é nascer de novo"?', dicas: ["Jesus (a Nicodemos)", "Jesus (a Pedro)", "João Batista", "Paulo"], resposta: "Jesus (a Nicodemos)", referencia: "João 3:7", icone: "message-square", dificuldade: "dificil" },
      { id: 'd37', palavra: 'Quem exclamou: "Olhai para mim, e sereis salvos, vós, todos os termos da terra"?', dicas: ["Moisés", "Isaías (Deus)", "Paulo", "Jesus"], resposta: "Isaías (Deus)", referencia: "Isaías 45:22", icone: "message-square", dificuldade: "dificil" },
      { id: 'd38', palavra: 'Quem disse: "Até quando coxeareis entre dois pensamentos?"', dicas: ["Elias", "Eliseu", "Josué", "Moisés"], resposta: "Elias", referencia: "1 Reis 18:21", icone: "message-square", dificuldade: "dificil" },
      { id: 'd39', palavra: 'Quem disse: "Senhor, tu me sondaste e me conheces"?', dicas: ["Davi", "Salomão", "Jeremias", "Isaías"], resposta: "Davi", referencia: "Salmo 139:1", icone: "message-square", dificuldade: "dificil" },
      { id: 'd40', palavra: 'Quem disse a Jesus: "Crê o Senhor na minha incredulidade. Ajuda-me!"', dicas: ["Pedro", "O pai do menino", "Zaqueu", "O centurião"], resposta: "O pai do menino", referencia: "Marcos 9:24", icone: "message-square", dificuldade: "dificil" }
    ],

    // ==========================================
    // JOGO 4: QUAL VERSÍCULO SOU? (15 cartas)
    // ==========================================
    'qual-versiculo-sou': [
      // FÁCIL
      { id: 'v1', dificuldade: 'facil', dicas: ["Falo sobre o amor sacrificial de Deus pelo mundo inteiro.", "Fico localizado no Evangelho de João, no capítulo 3.", "Declaro que todo aquele que crer no Filho não pereça, mas tenha a vida eterna."], resposta: "João 3:16", referencia: "João 3:16", icone: "book-open" },
      { id: 'v2', dificuldade: 'facil', dicas: ["Falo sobre a suficiência do cuidado de Deus em nossas vidas.", "Começo com a frase: 'O Senhor é meu pastor'.", "Termino declarando: 'nada me faltará'."], resposta: "Salmo 23:1", referencia: "Salmo 23:1", icone: "book-open" },
      { id: 'v3', dificuldade: 'facil', dicas: ["Falo sobre a força de fazer todas as coisas através de Cristo.", "Fico no livro de Filipenses, capítulo 4.", "Digo: 'Tudo posso naquele que me fortalece'."], resposta: "Filipenses 4:13", referencia: "Filipenses 4:13", icone: "book-open" },
      { id: 'v4', dificuldade: 'facil', dicas: ["Falo sobre o início de todas as coisas e da criação.", "Sou a primeira frase de toda a Bíblia sagrada.", "Digo: 'No princípio criou Deus os céus e a terra'."], resposta: "Gênesis 1:1", referencia: "Gênesis 1:1", icone: "book-open" },
      { id: 'v5', dificuldade: 'facil', dicas: ["Começo com: 'Pai nosso, que estás nos céus, santificado seja o teu nome'.", "Sou a oração perfeita que Jesus ensinou.", "Fico no Evangelho de Mateus, capítulo 6."], resposta: "Mateus 6:9-13", referencia: "Mateus 6:9-13", icone: "book-open" },
      // MÉDIO
      { id: 'v6', dificuldade: 'medio', dicas: ["Falo sobre a proteção divina contra pragas e setas.", "Meu trecho diz: 'Mil cairão ao teu lado, e dez mil à tua direita...'.", "Sou o Salmo 91."], resposta: "Salmo 91", referencia: "Salmo 91", icone: "book-open" },
      { id: 'v7', dificuldade: 'medio', dicas: ["Falo sobre o valor de guardar a palavra para não pecar.", "Digo: 'Escondi a tua palavra no meu coração...'.", "Sou muito famoso no Salmo 119."], resposta: "Salmo 119:11", referencia: "Salmo 119:11", icone: "book-open" },
      { id: 'v8', dificuldade: 'medio', dicas: ["Falo sobre a verdade que liberta o homem.", "Estou no Evangelho de João, capítulo 8, versículo 32.", "Digo: 'E conhecereis a verdade, e a verdade vos libertará'."], resposta: "João 8:32", referencia: "João 8:32", icone: "book-open" },
      { id: 'v9', dificuldade: 'medio', dicas: ["Falo sobre as escrituras sendo lâmpada para os pés e luz para o caminho.", "Fico no Salmo 119, no versículo 105.", "Ensino a usar a Palavra como guia de passos."], resposta: "Salmo 119:105", referencia: "Salmo 119:105", icone: "book-open" },
      { id: 'v10', dificuldade: 'medio', dicas: ["Falo sobre a instrução de crianças no caminho espiritual correto.", "Fico no livro de Provérbios, capítulo 22, versículo 6.", "Digo: 'Ensina a criança no caminho em que deve andar...'."], resposta: "Provérbios 22:6", referencia: "Provérbios 22:6", icone: "book-open" },
      // DIFÍCIL
      { id: 'v11', dificuldade: 'dificil', dicas: ["Falo sobre a soberania de Deus trabalhando no bem daqueles que o amam.", "Fico na epístola aos Romanos, capítulo 8, versículo 28.", "Digo: 'Todas as coisas cooperam para o bem daqueles que amam a Deus'."], resposta: "Romanos 8:28", referencia: "Romanos 8:28", icone: "book-open" },
      { id: 'v12', dificuldade: 'dificil', dicas: ["Falo sobre a cura e perdão enviados à terra após o arrependimento do povo.", "Fico no livro de 2 Crônicas, capítulo 7, versículo 14.", "Começo com: 'Se o meu povo, que se chama pelo meu nome, se humilhar...'."], resposta: "2 Crônicas 7:14", referencia: "2 Crônicas 7:14", icone: "book-open" },
      { id: 'v13', dificuldade: 'dificil', dicas: ["Falo sobre a fé sendo a certeza do que se espera e convicção do que não se vê.", "Sou a definição oficial de fé nas escrituras.", "Fico em Hebreus, capítulo 11, versículo 1."], resposta: "Hebreus 11:1", referencia: "Hebreus 11:1", icone: "book-open" },
      { id: 'v14', dificuldade: 'dificil', dicas: ["Menciono amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.", "Sou a descrição do fruto do Espírito.", "Fico na epístola aos Gálatas, capítulo 5."], resposta: "Gálatas 5:22-23", referencia: "Gálatas 5:22-23", icone: "book-open" },
      { id: 'v15', dificuldade: 'dificil', dicas: ["Digo que a paz divina guarda vossos corações e sentimentos em Cristo Jesus.", "Falo sobre a paz que excede todo o entendimento.", "Fico em Filipenses, capítulo 4, versículo 7."], resposta: "Filipenses 4:7", referencia: "Filipenses 4:7", icone: "book-open" }
    ],

    // ==========================================
    // JOGO 5: O QUE SOU? (15 cartas)
    // ==========================================
    'o-que-sou': [
      // FÁCIL
      { id: 'o1', dificuldade: 'facil', dicas: ["Fui feita de madeira de acácia e revestida de ouro puro.", "Guardava as tábuas da Lei, o vaso com maná e a vara de Arão.", "Ficava posicionada no Santo dos Santos."], resposta: "Arca da Aliança", referencia: "Êxodo 25", icone: "help-circle" },
      { id: 'o2', dificuldade: 'facil', dicas: ["Fui lançada por um jovem pastor de ovelhas.", "Atingi com precisão a testa de um gigante filisteu.", "Fui a arma de Davi contra Golias."], resposta: "Uma pedra (de funda)", referencia: "1 Samuel 17", icone: "help-circle" },
      { id: 'o3', dificuldade: 'facil', dicas: ["Fui a embarcação gigante construída para salvar a criação.", "Media 300 côvados de comprimento.", "Fui calafetada com betume por Noé."], resposta: "Arca de Noé", referencia: "Gênesis 6", icone: "ship" },
      { id: 'o4', dificuldade: 'facil', dicas: ["Fui o primeiro local de moradia do primeiro casal humano.", "Tinha rios como Tigre e Eufrates ao redor.", "Fui guardado por querubins após a queda."], resposta: "Jardim do Éden", referencia: "Gênesis 2", icone: "help-circle" },
      { id: 'o5', dificuldade: 'facil', dicas: ["Fui o objeto brilhante no céu que guiou os Reis Magos.", "Parei sobre a estrebaria em Belém.", "Indiquei o nascimento de Jesus."], resposta: "A Estrela de Belém", referencia: "Mateus 2", icone: "help-circle" },
      // MÉDIO
      { id: 'o6', dificuldade: 'medio', dicas: ["Fui o cajado de liderança que se transformou em cobra.", "Moisés me usou para tocar na água do Mar Vermelho.", "Bati na rocha de onde brotou água no deserto."], resposta: "O Cajado de Moisés", referencia: "Êxodo 14", icone: "help-circle" },
      { id: 'o7', dificuldade: 'medio', dicas: ["Tinha o sabor de bolo de mel e caía do céu todas as manhãs.", "Fui o alimento enviado por Deus ao povo no deserto.", "Minhas sobras apodreciam no mesmo dia, exceto no sábado."], resposta: "Maná", referencia: "Êxodo 16", icone: "help-circle" },
      { id: 'o8', dificuldade: 'medio', dicas: ["Fui a cidade cujas muralhas caíram após o povo dar voltas.", "Fui conquistada liderados por Josué.", "Apenas a família de Raabe sobreviveu."], resposta: "Jericó", referencia: "Josué 6", icone: "help-circle" },
      { id: 'o9', dificuldade: 'medio', dicas: ["Fui o rio onde Jesus foi batizado por João.", "Josué atravessou minhas águas a pé enxuto.", "Naamã mergulhou sete vezes em mim."], resposta: "Rio Jordão", referencia: "Marcos 1:9", icone: "help-circle" },
      { id: 'o10', dificuldade: 'medio', dicas: ["Fui a primeira praga enviada ao Egito.", "Moisés tocou com o cajado no Rio Nilo e me originou.", "Fiz os peixes morrerem e a água cheirar mal."], resposta: "Água em Sangue", referencia: "Êxodo 7:14", icone: "help-circle" },
      // DIFÍCIL
      { id: 'o11', dificuldade: 'dificil', dicas: ["Fui o objeto construído por homens orgulhosos na terra de Sinar.", "O objetivo era fazer um monumento que alcançasse os céus.", "Deus me interrompeu confundindo os idiomas das pessoas."], resposta: "Torre de Babel", referencia: "Gênesis 11", icone: "help-circle" },
      { id: 'o12', dificuldade: 'dificil', dicas: ["Fui o monte onde Jesus foi crucificado.", "Significo ''Lugar da Caveira'' em aramaico.", "Também sou conhecido como Calvário."], resposta: "Gólgota (Calvário)", referencia: "Mateus 27:33", icone: "help-circle" },
      { id: 'o13', dificuldade: 'dificil', dicas: ["Fui a túnica colorida e luxuosa dada de presente a um filho.", "Pertenci a José, filho de Jacó.", "Fui manchada com sangue de bode por irmãos invejosos."], resposta: "A Túnica Colorida de José", referencia: "Gênesis 37:3", icone: "help-circle" },
      { id: 'o14', dificuldade: 'dificil', dicas: ["Fui a pedra usada por Jacó como travesseiro em Betel.", "Sonhei com uma escada que subia ao céu.", "Fui ungida com azeite na manhã seguinte."], resposta: "Uma pedra", referencia: "Gênesis 28:11", icone: "help-circle" },
      { id: 'o15', dificuldade: 'dificil', dicas: ["Fui a cidade destruída com fogo e enxofre devido ao pecado.", "A esposa de Ló olhou para trás e virou estátua de sal na minha fuga.", "Fazia par com Gomorra."], resposta: "Sodoma", referencia: "Gênesis 19", icone: "help-circle" }
    ],

    // ==========================================
    // JOGO 6: QUEM SABE, RESPONDE! (15 por nível = 45 cartas no total)
    // ==========================================
    'quem-sabe-responde': [
      // FÁCIL
      { id: 'sr1', dificuldade: 'facil', palavra: "Quantos discípulos Jesus escolheu inicialmente para segui-lo?", dicas: ["7", "10", "12", "70"], resposta: "12", referencia: "Mateus 10:1", icone: "list" },
      { id: 'sr2', dificuldade: 'facil', palavra: "Qual destas mulheres foi uma juíza em Israel?", dicas: ["Débora", "Rute", "Sara", "Noemi"], resposta: "Débora", referencia: "Juízes 4:4", icone: "list" },
      { id: 'sr3', palavra: "Qual é o primeiro livro contido na Bíblia Sagrada?", dicas: ["Êxodo", "Salmos", "Mateus", "Gênesis"], resposta: "Gênesis", referencia: "Gênesis 1:1", icone: "list", dificuldade: "facil" },
      { id: 'sr4', palavra: "Em qual cidade Jesus nasceu?", dicas: ["Jerusalém", "Belém", "Nazaré", "Jericó"], resposta: "Belém", referencia: "Mateus 2:1", icone: "list", dificuldade: "facil" },
      { id: 'sr5', palavra: "Quem escreveu a maioria dos Salmos da Bíblia?", dicas: ["Moisés", "Salomão", "Davi", "Isaías"], resposta: "Davi", referencia: "Salmo 23", icone: "list", dificuldade: "facil" },
      { id: 'sr6', palavra: "Por quantas moedas de prata Judas Iscariotes traiu Jesus?", dicas: ["10 moedas", "30 moedas", "50 moedas", "100 moedas"], resposta: "30 moedas", referencia: "Mateus 26:15", icone: "list", dificuldade: "facil" },
      { id: 'sr7', palavra: "Quem foi lançado na cova dos leões por orar a Deus?", dicas: ["Daniel", "José", "Jonas", "David"], resposta: "Daniel", referencia: "Daniel 6", icone: "list", dificuldade: "facil" },
      { id: 'sr8', palavra: "Qual foi o homem mais velho citado na Bíblia, vivendo 969 anos?", dicas: ["Matusalém", "Noé", "Adão", "Enoque"], resposta: "Matusalém", referencia: "Gênesis 5:27", icone: "list", dificuldade: "facil" },
      { id: 'sr9', palavra: "Quantas pragas Deus enviou ao Egito através de Moisés?", dicas: ["7 pragas", "10 pragas", "12 pragas", "3 pragas"], resposta: "10 pragas", referencia: "Êxodo 7-12", icone: "list", dificuldade: "facil" },
      { id: 'sr10', palavra: "Qual apóstolo é conhecido por ter negado Jesus três vezes antes de o galo cantar?", dicas: ["João", "Pedro", "Judas", "Tomé"], resposta: "Pedro", referencia: "Mateus 26:34", icone: "list", dificuldade: "facil" },
      { id: 'sr11', palavra: "Quem construiu o primeiro templo sagrado de Jerusalém?", dicas: ["Davi", "Salomão", "Saul", "Ezequias"], resposta: "Salomão", referencia: "1 Reis 6", icone: "list", dificuldade: "facil" },
      { id: 'sr12', palavra: "Qual o nome do mar que Moisés abriu com o cajado sob ordem divina?", dicas: ["Mar da Galileia", "Mar Morto", "Mar Vermelho", "Mar Mediterrâneo"], resposta: "Mar Vermelho", referencia: "Êxodo 14:21", icone: "list", dificuldade: "facil" },
      { id: 'sr13', palavra: "Quantos pães e peixes Jesus usou para alimentar cinco mil homens?", dicas: ["5 pães e 2 peixes", "7 pães e 3 peixes", "12 pães e 5 peixes", "3 pães e 1 peixe"], resposta: "5 pães e 2 peixes", referencia: "Mateus 14:17", icone: "list", dificuldade: "facil" },
      { id: 'sr14', palavra: "Who was the first king of Israel?", dicas: ["David", "Saul", "Solomon", "Samuel"], resposta: "Saul", referencia: "1 Samuel 9:16", icone: "list", difficulty: "facil",  dificuldade: "facil" },
      { id: 'sr15', palavra: "Quem foi a mãe de Jesus?", dicas: ["Marta", "Isabel", "Maria Madalena", "Maria"], resposta: "Maria", referencia: "Lucas 1:31", icone: "list", difficulty: "facil",  dificuldade: "facil" },
      // MÉDIO
      { id: 'sr16', dificuldade: 'medio', palavra: "Qual destas mulheres foi uma juíza em Israel?", dicas: ["Débora", "Rute", "Sara", "Noemi"], resposta: "Débora", referencia: "Juízes 4:4", icone: "list" },
      { id: 'sr17', dificuldade: 'medio', palavra: "Quem foi o companheiro de Paulo na prisão que cantou louvores à meia-noite?", dicas: ["Pedro", "Silas", "Barnabé", "Timóteo"], resposta: "Silas", referencia: "Atos 16:25", icone: "list" },
      { id: 'sr18', palavra: "Qual destas pessoas foi levada ao céu sem passar pela morte física?", dicas: ["Moisés", "Enoque", "Davi", "Abraão"], resposta: "Enoque", referencia: "Gênesis 5:24", icone: "list", dificuldade: "medio" },
      { id: 'sr19', palavra: "Quem foi a mulher de Ló que se transformou em uma estátua de sal?", dicas: ["Rute", "Sara", "Sua esposa", "Ester"], resposta: "Sua esposa", referencia: "Gênesis 19:26", icone: "list", dificuldade: "medio" },
      { id: 'sr20', palavra: "Quem liderou o povo hebreu após a morte de Moisés?", dicas: ["Arão", "Calebe", "Josué", "Gideão"], resposta: "Josué", referencia: "Josué 1:1-2", icone: "list", dificuldade: "medio" },
      { id: 'sr21', palavra: "Quem foi o irmão de Moisés que falava em seu lugar diante do Faraó?", dicas: ["Josué", "Arão", "Hur", "Calebe"], resposta: "Arão", referencia: "Êxodo 4:14", icone: "list", dificuldade: "medio" },
      { id: 'sr22', palavra: "Qual o livro da Bíblia que narra a saída do povo hebreu do Egito?", dicas: ["Gênesis", "Números", "Levítico", "Êxodo"], resposta: "Êxodo", referencia: "Êxodo 1", icone: "list", dificuldade: "medio" },
      { id: 'sr23', palavra: "Quem teve a cabeça pedida em um prato pela filha de Herodias?", dicas: ["Jesus", "Estêvão", "João Batista", "Tiago"], resposta: "João Batista", referencia: "Mateus 14:8", icone: "list", dificuldade: "medio" },
      { id: 'sr24', palavra: "Qual o nome da montanha onde Moisés recebeu as tábuas dos Dez Mandamentos?", dicas: ["Monte Carmelo", "Monte Sinai", "Monte das Oliveiras", "Monte Ararat"], resposta: "Monte Sinai", referencia: "Êxodo 19:20", icone: "list", dificuldade: "medio" },
      { id: 'sr25', palavra: "Que animal falou com o profeta Balaão no caminho?", dicas: ["Uma jumenta", "Uma ovelha", "Um leão", "Uma serpente"], resposta: "Uma jumenta", referencia: "Números 22:28", icone: "list", dificuldade: "medio" },
      { id: 'sr26', palavra: "Quem é considerado o pai da fé para judeus, cristãos e muçulmanos?", dicas: ["Adão", "Moisés", "Abraão", "Noé"], resposta: "Abraão", referencia: "Gênesis 12", icone: "list", dificuldade: "medio" },
      { id: 'sr27', palavra: "O que caiu do céu no deserto como alimento para os israelitas?", dicas: ["Pão ázimo", "Mel puro", "Maná", "Codornizes"], resposta: "Maná", referencia: "Êxodo 16:15", icone: "list", dificuldade: "medio" },
      { id: 'sr28', palavra: "Qual destas pessoas interpretou os sonhos do Faraó no Egito?", dicas: ["Daniel", "José", "Moisés", "Neemias"], resposta: "José", referencia: "Gênesis 41", icone: "list", dificuldade: "medio" },
      { id: 'sr29', palavra: "Quem escreveu a Carta aos Romanos?", dicas: ["Pedro", "João", "Paulo", "Tiago"], resposta: "Paulo", referencia: "Romanos 1:1", icone: "list", dificuldade: "medio" },
      { id: 'sr30', palavra: "Qual profeta desafiou os 450 profetas de Baal no Monte Carmelo?", dicas: ["Elias", "Eliseu", "Isaías", "Jeremias"], resposta: "Elias", referencia: "1 Reis 18", icone: "list", difficulty: "medio",  dificuldade: "medio" },
      // DIFÍCIL
      { id: 'sr31', dificuldade: 'dificil', palavra: "Qual foi o homem mais velho citado na Bíblia, vivendo 969 anos?", dicas: ["Matusalém", "Noé", "Adão", "Enoque"], resposta: "Matusalém", referencia: "Gênesis 5:27", icone: "list" },
      { id: 'sr32', dificuldade: 'dificil', palavra: "Quantos anos o povo hebreu peregrinou pelo deserto?", dicas: ["10", "40", "70", "100"], resposta: "40", referencia: "Josué 5:6", icone: "list" },
      { id: 'sr33', palavra: "Qual milagre Jesus operou nas Bodas de Caná?", dicas: ["Cura de cego", "Multiplicação", "Água em vinho", "Ressurreição"], resposta: "Água em vinho", referencia: "João 2:1-11", icone: "list", dificuldade: "dificil" },
      { id: 'sr34', palavra: "Qual dos reis de Israel pediu a Deus apenas sabedoria para governar?", dicas: ["Davi", "Saul", "Salomão", "Ezequias"], resposta: "Salomão", referencia: "1 Reis 3:9", icone: "list", dificuldade: "dificil" },
      { id: 'sr35', palavra: "Quem foi ressuscitado por Jesus após estar morto por quatro dias?", dicas: ["Zaqueu", "Lázaro", "Estêvão", "Tiago"], resposta: "Lázaro", referencia: "João 11", icone: "list", dificuldade: "dificil" },
      { id: 'sr36', palavra: "Qual o nome da esposa de Jacó que ele não queria casar primeiro?", dicas: ["Raquel", "Lia", "Bila", "Zilpa"], resposta: "Lia", referencia: "Gênesis 29", icone: "list", dificuldade: "dificil" },
      { id: 'sr37', palavra: "Quem foi o rei de Basã que tinha uma cama de ferro gigante?", dicas: ["Ogue", "Sion", "Balaque", "Agague"], resposta: "Ogue", referencia: "Deuteronômio 3", icone: "list", dificuldade: "dificil" },
      { id: 'sr38', palavra: "Qual o nome da sogra de Rute?", dicas: ["Sara", "Noemi", "Orfa", "Isabel"], resposta: "Noemi", referencia: "Rute 1", icone: "list", dificuldade: "dificil" },
      { id: 'sr39', palavra: "De quem era o rolo de pergaminho que o rei Joaquim queimou com faca e fogo?", dicas: ["Isaías", "Jeremias", "Ezequiel", "Daniel"], resposta: "Jeremias", referencia: "Jeremias 36", icone: "list", dificuldade: "dificil" },
      { id: 'sr40', palavra: "Qual o nome do pai de João Batista?", dicas: ["Zacarias", "José", "Arão", "Eli"], resposta: "Zacarias", referencia: "Lucas 1", icone: "list", dificuldade: "dificil" }
    ],

    // ==========================================
    // JOGO 7: BÍBLIMÍMICAS (15 cartas)
    // ==========================================
    'biblimimicas': [
      // FÁCIL
      { id: 'm1', dificuldade: 'facil', palavra: "Caminhar sobre as águas (Mímica)", proibidas: ["Jesus", "Pedro", "Mar", "Barco", "Afundar"], icone: "smile" },
      { id: 'm2', dificuldade: 'facil', palavra: "Derrubar as muralhas de Jericó (Mímica)", proibidas: ["Buzina", "Trombeta", "Muro", "Grito", "Rodeador"], icone: "smile" },
      { id: 'm3', dificuldade: 'facil', palavra: "Noé construindo a arca com martelo (Mímica)", proibidas: ["Dilúvio", "Madeira", "Animais", "Chuva", "Serrote"], icone: "smile" },
      { id: 'm4', dificuldade: 'facil', palavra: "Davi derrubando Golias com funda (Mímica)", proibidas: ["Pedra", "Gigante", "Estilingue", "Cair", "Fronte"], icone: "smile" },
      { id: 'm5', dificuldade: 'facil', palavra: "Moisés abrindo o Mar Vermelho (Mímica)", proibidas: ["Cajado", "Água", "Egito", "Passagem", "Povo"], icone: "smile" },
      // MÉDIO
      { id: 'm6', dificuldade: 'medio', palavra: "Zaqueu subindo na figueira brava (Mímica)", proibidas: ["Baixo", "Galhos", "Árvore", "Jesus", "Cobrador"], icone: "smile" },
      { id: 'm7', dificuldade: 'medio', palavra: "Jonas sendo cuspido pelo grande peixe (Mímica)", proibidas: ["Baleia", "Mar", "Praia", "Nínive", "Vômito"], icone: "smile" },
      { id: 'm8', dificuldade: 'medio', palavra: "Estrela de Belém guiando Reis Magos (Mímica)", proibidas: ["Céu", "Brilho", "Jesus", "Presentes", "Camelos"], icone: "smile" },
      { id: 'm9', dificuldade: 'medio', palavra: "Sansão empurrando as colunas do templo (Mímica)", proibidas: ["Força", "Cabelo", "Filisteus", "Desabar", "Pilares"], icone: "smile" },
      { id: 'm10', dificuldade: 'medio', palavra: "Daniel orando na cova dos leões (Mímica)", proibidas: ["Garras", "Dentes", "Anjo", "Fera", "Joelho"], icone: "smile" },
      // DIFÍCIL
      { id: 'm11', dificuldade: 'dificil', palavra: "Balaão conversando com a jumenta (Mímica)", proibidas: ["Falar", "Animal", "Bater", "Anjo", "Espada"], icone: "smile" },
      { id: 'm12', dificuldade: 'dificil', palavra: "Jesus multiplicando pães e peixes (Mímica)", proibidas: ["Cesta", "Alimento", "Multidão", "Sobras", "Cesta"], icone: "smile" },
      { id: 'm13', dificuldade: 'dificil', palavra: "Adão e Eva comendo o fruto (Mímica)", proibidas: ["Árvore", "Mordida", "Jardim", "Pecado", "Vergonha"], icone: "smile" },
      { id: 'm14', dificuldade: 'dificil', palavra: "Lázaro saindo da sepultura enfaixado (Mímica)", proibidas: ["Morto", "Túmulo", "Faixas", "Ressuscitar", "Marta"], icone: "smile" },
      { id: 'm15', dificuldade: 'dificil', palavra: "Ló e família correndo de Sodoma (Mímica)", proibidas: ["Fogo", "Sal", "Olhar", "Mulher", "Fuga"], icone: "smile" }
    ],

    // ==========================================
    // JOGO 8: QUEM SOU EU? EXTREME (15 cartas)
    // ==========================================
    'quem-sou-eu-extreme': [
      // FÁCIL (Menos difíceis do modo extreme)
      { id: 'ex1', dificuldade: 'facil', dicas: ["Escrevi fielmente as profecias do profeta Jeremias.", "Meu nome significa 'Bendito' em hebraico.", "Tive um rolo de pergaminho queimado pelo rei Joaquim."], resposta: "Baruque", referencia: "Jeremias 36", icone: "zap" },
      { id: 'ex2', dificuldade: 'facil', dicas: ["Fui a esposa do soldado Urias antes de me casar com o rei Davi.", "Fui avistada pelo rei tomando banho do terraço do palácio.", "Fui a mãe do sábio rei Salomão."], resposta: "Bate-Seba", referencia: "2 Samuel 11", icone: "zap" },
      { id: 'ex3', dificuldade: 'facil', dicas: ["Matei um leão em uma cova num dia de neve.", "Fui o comandante da guarda pessoal de elite de Davi.", "Fui filho de Joiada, vindo da cidade de Cabzeel."], resposta: "Benaia", referencia: "2 Samuel 23:20", icone: "zap" },
      { id: 'ex4', dificuldade: 'facil', dicas: ["Fui a rainha ímpia que persegui o profeta Elias.", "Fui esposa do rei Acabe e introduzi Baal em Israel.", "Morri ao ser empurrada de uma janela e devorada por cães."], resposta: "Jezabel", referencia: "1 Reis 16", icone: "zap" },
      { id: 'ex5', dificuldade: 'facil', dicas: ["Fui o homem que cedeu o túmulo novo para o sepultamento de Jesus.", "Fui membro rico do Sinédrio e discípulo secreto.", "Era originário de Arimateia."], resposta: "José de Arimateia", referencia: "Mateus 27:57", icone: "zap" },
      // MÉDIO
      { id: 'ex6', dificuldade: 'medio', dicas: ["Fui o homem que tocou na Arca para evitar que ela caísse do carro de bois.", "Fui ferido de morte por Deus imediatamente após o ato.", "Aconteceu na eira de Nacom."], resposta: "Uzá", referencia: "2 Samuel 6:6-7", icone: "zap" },
      { id: 'ex7', dificuldade: 'medio', dicas: ["Fui o general do exército da Síria que sofria de lepra.", "Fui curado após mergulhar sete vezes no Rio Jordão.", "Tentei pagar Eliseu pela cura mas ele recusou."], resposta: "Naamã", referencia: "2 Reis 5", icone: "zap" },
      { id: 'ex8', dificuldade: 'medio', dicas: ["Fui a costureira de Jope ressuscitada por Pedro.", "Meu nome grego significa Dorcas (gazela).", "Fui muito conhecida por minhas boas obras e roupas aos pobres."], resposta: "Tabita (Dorcas)", referencia: "Atos 9:36", icone: "zap" },
      { id: 'ex9', dificuldade: 'medio', dicas: ["Fui o centurião romano que mandou chamar Pedro para pregar em minha casa.", "Fui a primeira conversão oficial de gentios descrita em Atos.", "Vivia na cidade costeira de Cesareia."], resposta: "Cornélio", referencia: "Atos 10", icone: "zap" },
      { id: 'ex10', dificuldade: 'medio', dicas: ["Fui o sogro de Moisés e sacerdote de Midiã.", "Aconselhei Moisés a delegar julgamentos a outros líderes.", "Também fui conhecido pelo nome de Reuel."], resposta: "Jetro", referencia: "Êxodo 18", icone: "zap" },
      // DIFÍCIL
      { id: 'ex11', dificuldade: 'dificil', dicas: ["Fui o último dos gigantes refains derrotados por Moisés.", "Tinha uma cama gigante de ferro de 9 côvados de comprimento.", "Fui o rei de Basã derrotado na batalha de Edrei."], resposta: "Ogue", referencia: "Deuteronômio 3:1-11", icone: "zap" },
      { id: 'ex12', dificuldade: 'dificil', dicas: ["Fui o discípulo que substituiu Judas Iscariotes no grupo dos doze.", "Fui escolhido através do lançamento de sortes contra José Barsabás.", "Fui eleito pelos onze em Jerusalém."], resposta: "Matias", referencia: "Atos 1:21-26", icone: "zap" },
      { id: 'ex13', dificuldade: 'dificil', dicas: ["Fui o rei que comecei a reinar com apenas sete anos de idade.", "Fui escondido no Templo por seis anos para escapar de Atalia.", "Fui orientado pelo sumo sacerdote Joiada."], resposta: "Joás", referencia: "2 Reis 11", icone: "zap" },
      { id: 'ex14', dificuldade: 'dificil', dicas: ["Fui o pai de Samuel e marido de Ana e Penina.", "Vivia em Ramataim-Zofim, na região montanhosa de Efraim.", "Subia anualmente a Siló para adorar e sacrificar."], resposta: "Elcana", referencia: "1 Samuel 1", icone: "zap" },
      { id: 'ex15', dificuldade: 'dificil', dicas: ["Fui o profeta menor que questionei a Deus sobre a violência em Judá.", "Minha oração termina declarando: 'ainda que a figueira não floresça... exultarei no Deus da minha salvação'.", "Escrevi um livro de apenas três capítulos contendo uma visão de juízo."], resposta: "Habacuque", referencia: "Habacuque 3:17", icone: "zap" }
    ],

    // ==========================================
    // JOGO 9: ONDE ESTOU? (15 cartas)
    // ==========================================
    'onde-estou': [
      // FÁCIL
      { id: 'on1', dificuldade: 'facil', dicas: ["Fui a cidade onde Jesus cresceu e passou a infância.", "Fui a cidade de origem de José e Maria.", "Jesus foi chamado pelo nome desta cidade em sua vida pública."], resposta: "Nazaré", referencia: "Lucas 2:39-40", icone: "book-open" },
      { id: 'on2', dificuldade: 'facil', dicas: ["Sou a cidade onde ficava o Templo de Salomão.", "Fui conquistada por Davi e me tornei a capital espiritual de Israel.", "Fui o local onde Jesus foi crucificado."], resposta: "Jerusalém", referencia: "2 Samuel 5", icone: "book-open" },
      { id: 'on3', dificuldade: 'facil', dicas: ["Fui a cidade onde Jesus nasceu em uma manjedoura.", "Fui profetizada por Miqueias como origem do Messias.", "Ficava na região da Judeia."], resposta: "Belém", referencia: "Mateus 2:1", icone: "book-open" },
      { id: 'on4', dificuldade: 'facil', dicas: ["Fui a cidade cercada de muralhas que caíram.", "Fui a primeira conquista hebreia liderada por Josué.", "Ficava perto do Rio Jordão."], resposta: "Jericó", referencia: "Josué 6", icone: "book-open" },
      { id: 'on5', dificuldade: 'facil', dicas: ["Fui o jardim onde Adão e Eva foram colocados por Deus.", "Tinha as árvores da Vida e do Conhecimento no centro.", "Tinha rios como Tigre e Eufrates fluindo de mim."], resposta: "Jardim do Éden", referencia: "Gênesis 2", icone: "book-open" },
      // MÉDIO
      { id: 'on6', dificuldade: 'medio', dicas: ["Fui o monte onde Moisés recebeu os Dez Mandamentos.", "Toda a minha cúpula se encheu de fogo, fumaça e tremores.", "Também sou conhecido como Monte Horebe."], resposta: "Monte Sinai", referencia: "Êxodo 19", icone: "book-open" },
      { id: 'on7', dificuldade: 'medio', dicas: ["Fui o mar cujas águas foram abertas por Moisés com o cajado.", "Permiti a travessia de milhões de hebreus a pé enxuto.", "Engoli todo o exército do Faraó que tentou nos seguir."], resposta: "Mar Vermelho", referencia: "Êxodo 14", icone: "book-open" },
      { id: 'on8', dificuldade: 'medio', dicas: ["Fui o rio onde João Batista pregava o arrependimento.", "Fui o rio onde Naamã mergulhou sete vezes para ser curado de lepra.", "Fui cruzado por Josué com a Arca da Aliança."], resposta: "Rio Jordão", referencia: "Marcos 1:9", icone: "book-open" },
      { id: 'on9', dificuldade: 'medio', dicas: ["Fui a cidade onde viviam Marta, Maria e Lázaro.", "Ficava a poucos quilômetros de Jerusalém.", "Jesus operou a ressurreição de Lázaro em minhas terras."], resposta: "Betânia", referencia: "João 11:1", icone: "book-open" },
      { id: 'on10', dificuldade: 'medio', dicas: ["Fui a cidade onde Jesus operou seu primeiro milagre transformando água em vinho.", "Fui visitada por Jesus durante uma festa de casamento.", "Ficava localizada na região da Galileia."], resposta: "Caná da Galileia", referencia: "João 2:1-11", icone: "book-open" },
      // DIFÍCIL
      { id: 'on11', dificuldade: 'dificil', dicas: ["Fui o monte onde a arca de Noé pousou após o Dilúvio.", "Fico localizado na atual Turquia.", "Minhas águas baixaram até que a arca tocasse meu solo."], resposta: "Monte Ararat", referencia: "Gênesis 8:4", icone: "book-open" },
      { id: 'on12', dificuldade: 'dificil', dicas: ["Fui o ribeiro onde Davi recolheu as cinco pedras lisas.", "Fui o cenário da batalha entre o exército de Saul e Golias.", "Ficava localizado no vale de Elá."], resposta: "Vale de Elá (Ribeiro)", referencia: "1 Samuel 17", icone: "book-open" },
      { id: 'on13', dificuldade: 'dificil', dicas: ["Fui o poço onde Jesus conversou com a mulher samaritana.", "Fui escavado por um antigo patriarca em Siquém.", "Ficava nas terras que Jacó deu a seu filho José."], resposta: "Poço de Jacó", referencia: "João 4:5-6", icone: "book-open" },
      { id: 'on14', dificuldade: 'dificil', dicas: ["Fui o monte onde Moisés morreu após avistar a Terra Prometida.", "Ficava na terra de Moabe, em frente a Jericó.", "Deus sepultou Moisés em um vale próximo a mim."], resposta: "Monte Nebo", referencia: "Deuteronômio 34:1-6", icone: "book-open" },
      { id: 'on15', dificuldade: 'dificil', dicas: ["Fui a ilha onde o apóstolo João escreveu o Apocalipse.", "Fui exilado para mim devido à Palavra de Deus.", "Fico localizada no Mar Egeu."], resposta: "Ilha de Patmos", referencia: "Apocalipse 1:9", icone: "book-open" }
    ],

    // ==========================================
    // JOGO 10: FAMÍLIAS DA BÍBLIA (15 cartas)
    // ==========================================
    'familias-da-biblia': [
      // FÁCIL
      { id: 'fa1', dificuldade: 'facil', palavra: "Quem foi a mãe do filho prometido de Abraão, Isaque, que riu da promessa na velhice?", dicas: ["Sara", "Hagar", "Rebeca", "Raquel"], resposta: "Sara", referencia: "Gênesis 18:12", icone: "message-square" },
      { id: 'fa2', dificuldade: 'facil', palavra: "Quem foi o irmão de Abel que o matou por inveja das ofertas?", dicas: ["Caim", "Sete", "Enoque", "Lameque"], resposta: "Caim", referencia: "Gênesis 4:8", icone: "message-square" },
      { id: 'fa3', palavra: "Quem foi a esposa de Jacó que ele trabalhou 14 anos para conquistar?", dicas: ["Lia", "Bila", "Zilpa", "Raquel"], resposta: "Raquel", referencia: "Gênesis 29", icone: "message-square", dificuldade: "facil" },
      { id: 'fa4', palavra: "Quais eram os nomes dos três filhos de Noé que repovoaram a terra após o dilúvio?", dicas: ["Caim, Abel e Sete", "Sem, Cam e Jafé", "Esaú, Jacó e José", "Abraão, Naor e Harã"], resposta: "Sem, Cam e Jafé", referencia: "Gênesis 6:10", icone: "message-square", dificuldade: "facil" },
      { id: 'fa5', palavra: "Quem foi o filho favorito de Jacó que ganhou a túnica colorida?", dicas: ["Rúben", "Judá", "José", "Benjamin"], resposta: "José", referencia: "Gênesis 37:3", icone: "message-square", dificuldade: "facil" },
      // MÉDIO
      { id: 'fa6', dificuldade: 'medio', palavra: "Quem foi a esposa de Isaque e mãe dos gêmeos Esaú e Jacó?", dicas: ["Rebeca", "Sara", "Raquel", "Lia"], resposta: "Rebeca", referencia: "Gênesis 25:20", icone: "message-square" },
      { id: 'fa7', dificuldade: 'medio', palavra: "Quem foi a sogra de Rute, com quem ela retornou a Belém de Moabe?", dicas: ["Orfa", "Noemi", "Sara", "Débora"], resposta: "Noemi", referencia: "Rute 1:16", icone: "message-square" },
      { id: 'fa8', palavra: "Quem foram os pais de João Batista na sua velhice?", dicas: ["José e Maria", "Elcana e Ana", "Zacarias e Isabel", "Abraão e Sara"], resposta: "Zacarias e Isabel", referencia: "Lucas 1:57", icone: "message-square", dificuldade: "medio" },
      { id: 'fa9', palavra: "Quem foi o primo e protetor da rainha Ester na Pérsia?", dicas: ["Haman", "Mardoqueu", "Assuero", "Ciro"], resposta: "Mardoqueu", referencia: "Ester 2:7", icone: "message-square", dificuldade: "medio" },
      { id: 'fa10', palavra: "Quem era a irmã de Moisés e Arão que liderou as mulheres com pandeiros?", dicas: ["Miriã", "Zípora", "Joquebede", "Coibi"], resposta: "Miriã", referencia: "Êxodo 15:20", icone: "message-square", dificuldade: "medio" },
      // DIFÍCIL
      { id: 'fa11', dificuldade: 'dificil', palavra: "Quem era a mãe de Moisés, que o escondeu num cesto de junco?", dicas: ["Miriã", "Joquebede", "Zípora", "Elisama"], resposta: "Joquebede", referencia: "Êxodo 6:20", icone: "message-square" },
      { id: 'fa12', dificuldade: 'dificil', palavra: "Quem foi a mãe do rei Salomão, que intercedeu por sua coroação?", dicas: ["Bate-Seba", "Abigail", "Mical", "Maaca"], resposta: "Bate-Seba", referencia: "1 Reis 1", icone: "message-square" },
      { id: 'fa13', palavra: "Quem foi o sogro de Jacó que o enganou substituindo as noivas?", dicas: ["Abraão", "Labão", "Isaque", "Lot"], resposta: "Labão", referencia: "Gênesis 29:25", icone: "message-square", dificuldade: "dificil" },
      { id: 'fa14', palavra: "Quem era a avó materna e a mãe de Timóteo descritas por Paulo como mulheres de fé sincera?", dicas: ["Lois e Eunice", "Ana e Penina", "Isabel e Maria", "Marta e Maria"], resposta: "Lois e Eunice", referencia: "2 Timóteo 1:5", icone: "message-square", dificuldade: "dificil" },
      { id: 'fa15', palavra: "Quem foi o pai de Davi, que tinha oito filhos e morava em Belém?", dicas: ["Jessé", "Boaz", "Obede", "Salomão"], resposta: "Jessé", referencia: "1 Samuel 16:1", icone: "message-square", dificuldade: "dificil" }
    ],

    // ==========================================
    // JOGO 11: FAZ SENTIDO? (15 cartas)
    // ==========================================
    'faz-sentido': [
      // FÁCIL
      { id: 'fs1', dificuldade: 'facil', palavra: "A Arca de Noé salvando casais de animais do dilúvio.", icone: "ship" },
      { id: 'fs2', dificuldade: 'facil', palavra: "Davi derrotando o gigante Golias com uma funda.", icone: "crown" },
      { id: 'fs3', dificuldade: 'facil', palavra: "Moisés abrindo as águas do Mar Vermelho com seu cajado.", icone: "scroll" },
      { id: 'fs4', dificuldade: 'facil', palavra: "Sansão perdendo sua força após ter seus cabelos cortados.", icone: "zap" },
      { id: 'fs5', dificuldade: 'facil', palavra: "O nascimento de Jesus em uma manjedoura simples em Belém.", icone: "crown" },
      // MÉDIO
      { id: 'fs6', dificuldade: 'medio', palavra: "Zaqueu subindo na árvore figueira brava para ver Jesus passar.", icone: "help-circle" },
      { id: 'fs7', dificuldade: 'medio', palavra: "Jonas tentando fugir de barco para Társis e sendo engolido.", icone: "ship" },
      { id: 'fs8', dificuldade: 'medio', palavra: "O maná caindo do céu todas as manhãs para alimentar o povo hebreu.", icone: "scroll" },
      { id: 'fs9', dificuldade: 'medio', palavra: "Daniel saindo ileso da cova de leões famintos por intervenção divina.", icone: "help-circle" },
      { id: 'fs10', dificuldade: 'medio', palavra: "Muralhas de Jericó ruindo após o povo rodear soprando trombetas.", icone: "crown" },
      // DIFÍCIL
      { id: 'fs11', dificuldade: 'dificil', palavra: "O escriba Baruque registrando com tinta as profecias de Jeremias.", icone: "zap" },
      { id: 'fs12', dificuldade: 'dificil', palavra: "Uzá tocando na Arca da Aliança e caindo morto imediatamente.", icone: "help-circle" },
      { id: 'fs13', dificuldade: 'dificil', palavra: "O rei Ogue de Basã deitando-se em sua cama de ferro gigante.", icone: "zap" },
      { id: 'fs14', dificuldade: 'dificil', palavra: "Eliseu fazendo flutuar a cabeça de ferro de um machado na água.", icone: "zap" },
      { id: 'fs15', dificuldade: 'dificil', palavra: "A sombra do relógio solar retrocedendo dez graus a pedido do rei.", icone: "zap" }
    ],

    // ==========================================
    // JOGO 12: DESAFIO DOS VERSÍCULOS (15 cartas)
    // ==========================================
    'desafio-versiculos': [
      // FÁCIL
      { id: 'dv1', dificuldade: 'facil', palavra: "Complete: 'No princípio criou Deus os ___ e a terra.'", dicas: ["homens", "céus", "animais", "mares"], resposta: "céus", referencia: "Gênesis 1:1", icone: "list" },
      { id: 'dv2', dificuldade: 'facil', palavra: "Complete: 'O Senhor é o meu pastor, nada me ___.'", dicas: ["faltará", "assustará", "sobrará", "cansará"], resposta: "faltará", referencia: "Salmo 23:1", icone: "list" },
      { id: 'dv3', palavra: "Complete: 'Tudo posso naquele que me ___.'", dicas: ["ensina", "ouve", "fortalece", "salva"], resposta: "fortalece", referencia: "Filipenses 4:13", icone: "list", dificuldade: "facil" },
      { id: 'dv4', palavra: "Complete: 'Ensina a criança no ___ em que deve andar.'", dicas: ["caminho", "templo", "livro", "passo"], resposta: "caminho", referencia: "Provérbios 22:6", icone: "list", dificuldade: "facil" },
      { id: 'dv5', palavra: "Complete: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho ___.'", dicas: ["amado", "unigênito", "primogênito", "escolhido"], resposta: "unigênito", referencia: "João 3:16", icone: "list", dificuldade: "facil" },
      // MÉDIO
      { id: 'dv6', dificuldade: 'medio', palavra: "Complete: 'E conhecereis a ___, e a ___ vos libertará.'", dicas: ["vida", "lei", "verdade", "graça"], resposta: "verdade", referencia: "João 8:32", icone: "list" },
      { id: 'dv7', dificuldade: 'medio', palavra: "Complete: 'Lâmpada para os meus pés é a tua palavra, e ___ para o meu caminho.'", dicas: ["guia", "luz", "escudo", "sol"], resposta: "luz", referencia: "Salmo 119:105", icone: "list" },
      { id: 'dv8', palavra: "Complete: 'Escondi a tua palavra no meu ___, para não pecar contra ti.'", dicas: ["peito", "pensamento", "coração", "diário"], resposta: "coração", referencia: "Salmo 119:11", icone: "list", dificuldade: "medio" },
      { id: 'dv9', palavra: "Complete: 'Eu sou o caminho, e a verdade, e a ___; ninguém vem ao Pai senão por mim.'", dicas: ["luz", "vida", "porta", "paz"], resposta: "vida", referencia: "João 14:6", icone: "list", dificuldade: "medio" },
      { id: 'dv10', palavra: "Complete: 'Mil cairão ao teu lado, e dez mil à tua direita, mas não ___ a ti.'", dicas: ["atingirá", "chegará", "baterá", "matará"], resposta: "chegará", referencia: "Salmo 91:7", icone: "list", dificuldade: "medio" },
      // DIFÍCIL
      { id: 'dv11', dificuldade: 'dificil', palavra: "Complete: 'Todas as coisas ___ para o bem daqueles que amam a Deus.'", dicas: ["funcionam", "cooperam", "caminham", "ajudam"], resposta: "cooperam", referencia: "Romanos 8:28", icone: "list" },
      { id: 'dv12', dificuldade: 'dificil', palavra: "Complete: 'Se o meu povo... se humilhar, e orar, e buscar a minha face... eu ouvirei dos céus, perdoarei os seus pecados, e sararei a sua ___.'", dicas: ["vida", "terra", "família", "alma"], resposta: "terra", referencia: "2 Crônicas 7:14", icone: "list" },
      { id: 'dv13', palavra: "Complete: 'Ora, a fé é a ___ das coisas que se esperam, e a convicção das que se não veem.'", dicas: ["certeza", "prova", "esperança", "razão"], resposta: "certeza", referencia: "Hebreus 11:1", icone: "list", dificuldade: "dificil" },
      { id: 'dv14', palavra: "Complete: 'Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como ___.'", dicas: ["águias", "anjos", "pombas", "falcões"], resposta: "águias", referencia: "Isaías 40:31", icone: "list", dificuldade: "dificil" },
      { id: 'dv15', palavra: "Complete: 'E a paz de Deus, que excede todo o ___, guardará os vossos corações.'", dicas: ["entendimento", "saber", "pensar", "sentido"], resposta: "entendimento", referencia: "Filipenses 4:7", icone: "list", dificuldade: "dificil" }
    ]
  }
};
