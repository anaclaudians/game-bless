// --- BANCO DE DADOS DE FALLBACK (Catálogo Completo Expandido) ---
export const mockDatabase = {
  jogos: [
    { id: 'quem-sou-eu', nome: 'Quem Sou Eu?', tipo: 'dicas', cor: '#E0664B', capa: '/capa-quem-sou-eu.png', regras: 'Leia as dicas uma a uma. O jogador deve adivinhar o personagem bíblico descrito. Quanto menos dicas usar, melhor!' },
    { id: 'palavra-proibida', nome: 'Palavra Bíblica Proibida', tipo: 'acao', cor: '#C25134', capa: '/capa-palavra-proibida.png', regras: 'Tente fazer sua equipe adivinhar a palavra principal da carta. ATENÇÃO: É proibido falar qualquer uma das outras 5 palavras listadas na carta!' },
    { id: 'quem-disse', nome: 'Quem Disse?', tipo: 'quiz', cor: '#9E4733', capa: '/capa-quem-disse.png', regras: 'Leia o versículo bíblico apresentado na tela e selecione o autor correto da frase entre as quatro opções de resposta.' },
    { id: 'qual-versiculo-sou', nome: 'Qual Versículo Sou?', tipo: 'dicas', cor: '#D17A22', capa: '/capa-qual-versiculo-sou.png', regras: 'Adivinhe qual é o versículo ou Salmo descrito através de 3 pistas progressivas sobre o seu significado e conteúdo.' },
    { id: 'o-que-sou', nome: 'O Que Sou?', tipo: 'dicas', cor: '#9A5B43', capa: '/capa-o-que-sou.png', regras: 'Adivinhe qual objeto, animal ou local sagrado da Bíblia está sendo descrito com base em 3 pistas inteligentes.' },
    { id: 'quem-sabe-responde', nome: 'Quem Sabe, Responde!', tipo: 'quiz', cor: '#6B4F4F', capa: '/capa-quem-sabe-responde.png', regras: 'Um teste clássico de conhecimentos bíblicos gerais de múltipla escolha. Escolha a resposta certa entre as 4 alternativas.' },
    { id: 'biblimimicas', nome: 'Bíblimímicas', tipo: 'acao', cor: '#B55A30', capa: '/capa-biblimimicas.png', regras: 'Um jogador deve encenar em mímica a ação ou passagem bíblica exibida na tela. O restante do grupo tenta adivinhar. O tempo está correndo!' },
    { id: 'quem-sou-eu-extreme', nome: 'Quem Sou Eu? (Extreme)', tipo: 'dicas', cor: '#842E1B', capa: '/capa-quem-sou-eu-extreme.png', regras: 'Para estudiosos da Bíblia! Adivinhe o personagem com base em 3 pistas sobre detalhes obscuros ou pouco conhecidos das Escrituras.' },
    { id: 'onde-estou', nome: 'Onde Estou?', tipo: 'dicas', cor: '#9E4773', capa: '/capa-onde-estou.png', regras: 'Descubra qual cidade, monte, rio ou localidade geográfica da Bíblia está sendo descrita pelas 3 pistas progressivas.' },
    { id: 'familias-da-biblia', nome: 'Famílias da Bíblia', tipo: 'quiz', cor: '#7A8B47', capa: '/capa-familias-da-biblia.png', regras: 'Teste seus conhecimentos sobre as linhagens, casamentos, parentescos e histórias das famílias que marcaram as Escrituras.' },
    { id: 'faz-sentido', nome: 'Faz Sentido?', tipo: 'acao', cor: '#D15E84', capa: '/capa-faz-sentido.png', regras: 'Debate e conexão! Jogue cartas de conceitos físicos e veja se eles têm relação lógica com a carta no centro da mesa. Votem e gerenciem as 3 vidas locais de cada um dos 4 participantes.' },
    { id: 'desafio-versiculos', nome: 'Desafio dos Versículos', tipo: 'quiz', cor: '#39A087', capa: '/capa-desafio-versiculos.png', regras: 'Complete a palavra ausente ou adivinhe o versículo-chave correto apresentado na pergunta de múltipla escolha.' }
  ],
  cartas: {
    // ==========================================
    // JOGO 1: QUEM SOU EU? (30 cartas reais)
    // ==========================================
    'quem-sou-eu': [
      // FÁCIL
      { id: 'q1', dificuldade: 'facil', dicas: ["Fui colocado numa arca de madeira para me salvar do dilúvio.", "Deus enviou um arco-íris no céu como promessa.", "Fui o pai de Sem, Cam e Jafé."], resposta: "Noé", referencia: "Gênesis 6-9", icone: "ship" },
      { id: 'q2', dificuldade: 'facil', dicas: ["Derrotei o gigante filisteu com uma funda e cinco pedras.", "Fui o rei de Israel que escreveu muitos Salmos.", "Fui chamado de homem segundo o coração de Deus."], resposta: "Davi", referencia: "1 Samuel 17", icone: "crown" },
      { id: 'q3', dificuldade: 'facil', dicas: ["Fui o homem mais forte da Bíblia.", "Minha força estava ligada aos meus cabelos compridos.", "Fui traído por Dalila, que me vendeu aos filisteus."], resposta: "Sansão", referencia: "Juízes 13-16", icone: "zap" },
      { id: 'q4', dificuldade: 'facil', dicas: ["Fui tirado das águas do Nilo pela filha do Faraó.", "Deus me usou para abrir o Mar Vermelho.", "Recebi as tábuas da Lei no Monte Sinai."], resposta: "Moisés", referencia: "Êxodo 2", icone: "scroll" },
      { id: 'q5', dificuldade: 'facil', dicas: ["Fui a primeira mulher criada por Deus.", "Fui tentada pela serpente a comer o fruto.", "Fui formada da costela de Adão."], resposta: "Eva", referencia: "Gênesis 2", icone: "help-circle" },
      { id: 'q6', dificuldade: 'facil', dicas: ["Fui o primeiro homem criado por Deus.", "Fui colocado no Jardim do Éden para cuidar dele.", "Dei nome a todos os animais da criação."], resposta: "Adão", referencia: "Gênesis 2", icone: "help-circle" },
      { id: 'q7', dificuldade: 'facil', dicas: ["Fui lançada na cova dos leões por orar três vezes ao dia.", "Deus enviou um anjo para fechar a boca dos leões.", "Fui um jovem hebreu exilado na Babilônia."], resposta: "Daniel", referencia: "Daniel 6", icone: "zap" },
      { id: 'q8', dificuldade: 'facil', dicas: ["Fui o homem mais rico e sábio de Israel.", "Escrevi o livro de Provérbios e Eclesiastes.", "Construí o primeiro grande Templo de Jerusalém."], resposta: "Salomão", referencia: "1 Reis 3", icone: "crown" },
      { id: 'q9', dificuldade: 'facil', dicas: ["Fui ressuscitado por Jesus após estar morto há quatro dias.", "Fui irmão de Marta e de Maria.", "Jesus chorou antes de ordenar que eu saísse do sepulcro."], resposta: "Lázaro", referencia: "João 11", icone: "help-circle" },
      { id: 'q10', dificuldade: 'facil', dicas: ["Fui o pai de Isaque na minha velhice.", "Deus me prometeu uma descendência numerosa como as estrelas.", "Sou conhecido nas Escrituras como o Pai da Fé."], resposta: "Abraão", referencia: "Gênesis 12-22", icone: "scroll" },
      // MÉDIO
      { id: 'q11', dificuldade: 'medio', dicas: ["Fui um cobrador de impostos muito baixo.", "Subi em um sicômoro (figueira brava) para ver Jesus passar.", "Jesus jantou na minha casa e mudei de vida."], resposta: "Zaqueu", referencia: "Lucas 19:1-10", icone: "help-circle" },
      { id: 'q12', dificuldade: 'medio', dicas: ["Julgava o povo debaixo de uma palmeira.", "Fui a única mulher a ser juíza em Israel.", "Fui à batalha com Baraque e ajudei a libertar o povo."], resposta: "Débora", referencia: "Juízes 4-5", icone: "scroll" },
      { id: 'q13', dificuldade: 'medio', dicas: ["Fui engolido por um grande peixe após desobedecer a Deus.", "Tentei fugir de navio para Társis em vez de pregar em Nínive.", "Fiquei três dias e noites no ventre do peixe."], resposta: "Jonas", referencia: "Jonas 1", icone: "ship" },
      { id: 'q14', dificuldade: 'medio', dicas: ["Fui vendido pelos meus irmãos por moedas de prata.", "Fui preso injustamente, mas interpretei os sonhos do Faraó.", "Me tornei governador do Egito."], resposta: "José", referencia: "Gênesis 37", icone: "scroll" },
      { id: 'q15', dificuldade: 'medio', dicas: ["Fui a rainha judia que salvou meu povo da destruição.", "Fui escolhida em concurso pelo rei Assuero da Pérsia.", "Meu primo e protetor se chamava Mardoqueu."], resposta: "Ester", referencia: "Ester 2", icone: "crown" },
      { id: 'q16', dificuldade: 'medio', dicas: ["Liderei o exército de 300 homens que derrotou os midianitas.", "Pedi a Deus sinais envolvendo o orvalho e um velo de lã.", "Usei trombetas, jarros vazios e tochas para assustar o inimigo."], resposta: "Gideão", referencia: "Juízes 6-8", icone: "zap" },
      { id: 'q17', dificuldade: 'medio', dicas: ["Fui o grande precursor e primo de Jesus Cristo.", "Batizava no Rio Jordão e pregava o arrependimento.", "Minhas vestes eram de pelos de camelo e me alimentava de gafanhotos."], resposta: "João Batista", referencia: "Mateus 3", icone: "message-square" },
      { id: 'q18', dificuldade: 'medio', dicas: ["Fui a primeira mulher a ver Jesus ressuscitado perto do túmulo.", "Fui liberta por Jesus de sete demônios.", "Segui a Jesus por toda a Galileia e Judeia."], resposta: "Maria Madalena", referencia: "João 20", icone: "smile" },
      { id: 'q19', dificuldade: 'medio', dicas: ["Fui o apóstolo conhecido como 'o duvidoso'.", "Disse que só acreditaria na ressurreição se tocasse nas feridas de Jesus.", "Jesus me apareceu e disse: 'Não sejas incrédulo, mas crente'."], resposta: "Tomé", referencia: "João 20:24-29", icone: "help-circle" },
      { id: 'q20', dificuldade: 'medio', dicas: ["Fui o primeiro rei ungido de Israel.", "Fui ungido pelo profeta Samuel.", "Perdi o reinado devido à minha desobediência a Deus."], resposta: "Saul", referencia: "1 Samuel 9", icone: "crown" },
      // DIFÍCIL
      { id: 'q21', dificuldade: 'dificil', dicas: ["Fui o sumo sacerdote mentor espiritual do profeta Samuel.", "Meus filhos Hofni e Finéias pecaram gravemente.", "Morri aos 98 anos ao cair de costas da cadeira."], resposta: "Eli", referencia: "1 Samuel 1", icone: "zap" },
      { id: 'q22', dificuldade: 'dificil', dicas: ["Fui o primeiro mártir da igreja cristã primitiva.", "Fui apedrejado e orei pedindo perdão para os algozes.", "Vi os céus abertos e Jesus em pé à direita de Deus."], resposta: "Estêvão", referencia: "Atos 7", icone: "zap" },
      { id: 'q23', dificuldade: 'dificil', dicas: ["Fui a esposa de Urias que depois se casou com o rei Davi.", "Fui avistada tomando banho do terraço do palácio do rei.", "Fui a mãe do rei Salomão."], resposta: "Bate-Seba", referencia: "2 Samuel 11", icone: "zap" },
      { id: 'q24', dificuldade: 'dificil', dicas: ["Lutei com Deus em Peniel e saí mancando da coxa.", "Tive meu nome mudado para Israel.", "Fui o pai das doze tribos."], resposta: "Jacó", referencia: "Gênesis 32", icone: "scroll" },
      { id: 'q25', dificuldade: 'dificil', dicas: ["Fui o profeta que subiu ao céu em uma carruagem de fogo.", "Desafiei os 450 profetas de Baal no Monte Carmelo.", "Orei para parar de chover e depois orei para chover novamente."], resposta: "Elias", referencia: "1 Reis 18", icone: "zap" },
      { id: 'q26', dificuldade: 'dificil', dicas: ["Fui a nora de Noemi que escolheu ficar com ela até a morte.", "Recolhi espigas no campo de Boaz.", "Me tornei bisavó do rei Davi."], resposta: "Rute", referencia: "Rute 1-4", icone: "scroll" },
      { id: 'q27', dificuldade: 'dificil', dicas: ["Tive dez filhos e perdi tudo em um único dia.", "Fui acometido por sarnas malignas da cabeça aos pés.", "Minha paciência diante da provação ficou famosa."], resposta: "Jó", referencia: "Jó 1", icone: "help-circle" },
      { id: 'q28', dificuldade: 'dificil', dicas: ["Fui um rei ímpio da Babilônia que viu uma mão escrevendo na parede.", "Dei um banquete profanando os utensílios de ouro do templo.", "Fui deposto e morto na mesma noite da visão."], resposta: "Belsazar", referencia: "Daniel 5", icone: "crown" },
      { id: 'q29', dificuldade: 'dificil', dicas: ["Fui o sucessor do profeta Elias e recebi porção dobrada do seu espírito.", "Fiz o ferro de um machado flutuar na água.", "Ordenei a cura da lepra do general Naamã."], resposta: "Eliseu", referencia: "2 Reis 2-6", icone: "zap" },
      { id: 'q30', dificuldade: 'dificil', dicas: ["Fui a única filha mulher de Jacó citada nas Escrituras.", "Fui raptada por Siquém, filho de Hamor.", "Meus irmãos Levi e Simeão vingaram minha honra destruindo a cidade."], resposta: "Diná", referencia: "Gênesis 34", icone: "scroll" }
    ],

    // ==========================================
    // JOGO 2: PALAVRA BÍBLICA PROIBIDA (30 cartas reais)
    // ==========================================
    'palavra-proibida': [
      // FÁCIL
      { id: 'p1', dificuldade: 'facil', palavra: "Arca de Noé", proibidas: ["Noé", "Chuva", "Dilúvio", "Animais", "Barco"], icone: "ship" },
      { id: 'p2', dificuldade: 'facil', palavra: "Davi", proibidas: ["Golias", "Rei", "Funda", "Harpa", "Ovelhas"], icone: "crown" },
      { id: 'p3', dificuldade: 'facil', palavra: "Moisés", proibidas: ["Mar Vermelho", "Egito", "Pragas", "Cajado", "Mandamentos"], icone: "scroll" },
      { id: 'p4', dificuldade: 'facil', palavra: "Cruz", proibidas: ["Jesus", "Morte", "Calvário", "Madeiro", "Salvação"], icone: "zap" },
      { id: 'p5', dificuldade: 'facil', palavra: "Adão", proibidas: ["Eva", "Jardim", "Pecado", "Fruto", "Primeiro"], icone: "help-circle" },
      { id: 'p6', dificuldade: 'facil', palavra: "Eva", proibidas: ["Adão", "Serpente", "Fruto", "Costela", "Mulher"], icone: "help-circle" },
      { id: 'p7', dificuldade: 'facil', palavra: "Jesus", proibidas: ["Messias", "Deus", "Cruz", "Milagres", "Filho"], icone: "zap" },
      { id: 'p8', dificuldade: 'facil', palavra: "Daniel", proibidas: ["Leões", "Cova", "Babilônia", "Oração", "Rei"], icone: "zap" },
      { id: 'p9', dificuldade: 'facil', palavra: "Jardim do Éden", proibidas: ["Adão", "Eva", "Árvore", "Fruto", "Serpente"], icone: "help-circle" },
      { id: 'p10', dificuldade: 'facil', palavra: "Bíblia", proibidas: ["Livro", "Sagrada", "Deus", "Versículos", "Testamento"], icone: "scroll" },
      // MÉDIO
      { id: 'p11', dificuldade: 'medio', palavra: "Maná", proibidas: ["Deserto", "Comida", "Céu", "Povo", "Moisés"], icone: "scroll" },
      { id: 'p12', dificuldade: 'medio', palavra: "Torre de Babel", proibidas: ["Línguas", "Céu", "Tijolo", "Confusão", "Construir"], icone: "help-circle" },
      { id: 'p13', dificuldade: 'medio', palavra: "Jonas", proibidas: ["Peixe", "Nínive", "Tempestade", "Fugir", "Mar"], icone: "ship" },
      { id: 'p14', dificuldade: 'medio', palavra: "Salomão", proibidas: ["Sabedoria", "Templo", "Rei", "Riqueza", "Julgamento"], icone: "crown" },
      { id: 'p15', dificuldade: 'medio', palavra: "Muralhas de Jericó", proibidas: ["Josué", "Queda", "Voltas", "Trombetas", "Muro"], icone: "crown" },
      { id: 'p16', dificuldade: 'medio', palavra: "Sansão", proibidas: ["Cabelo", "Dalila", "Força", "Filisteus", "Leão"], icone: "zap" },
      { id: 'p17', dificuldade: 'medio', palavra: "João Batista", proibidas: ["Batismo", "Jordão", "Precursor", "Cabeça", "Mel"], icone: "message-square" },
      { id: 'p18', dificuldade: 'medio', palavra: "Maria Madalena", proibidas: ["Jesus", "Ressurreição", "Túmulo", "Demônios", "Mulher"], icone: "smile" },
      { id: 'p19', dificuldade: 'medio', palavra: "Ester", proibidas: ["Rainha", "Pérsia", "Assuero", "Mardoqueu", "Hamã"], icone: "crown" },
      { id: 'p20', dificuldade: 'medio', palavra: "Dez Mandamentos", proibidas: ["Tábuas", "Sinai", "Moisés", "Lei", "Escrito"], icone: "scroll" },
      // DIFÍCIL
      { id: 'p21', dificuldade: 'dificil', palavra: "Gideão", proibidas: ["Lã", "300", "Jarros", "Trombetas", "Midianitas"], icone: "zap" },
      { id: 'p22', dificuldade: 'dificil', palavra: "Estrela de Belém", proibidas: ["Jesus", "Nascimento", "Magos", "Céu", "Oriente"], icone: "crown" },
      { id: 'p23', dificuldade: 'dificil', palavra: "Melquisedeque", proibidas: ["Sacerdote", "Abraão", "Dízimo", "Salém", "Rei"], icone: "zap" },
      { id: 'p24', dificuldade: 'dificil', palavra: "Urim e Tumim", proibidas: ["Pedras", "Sacerdote", "Sorte", "Decisão", "Peitoral"], icone: "help-circle" },
      { id: 'p25', dificuldade: 'dificil', palavra: "Querubim", proibidas: ["Anjo", "Asas", "Guarda", "Éden", "Glória"], icone: "zap" },
      { id: 'p26', dificuldade: 'dificil', palavra: "Matusalém", proibidas: ["Idade", "Anos", "969", "Noé", "Genealogia"], icone: "help-circle" },
      { id: 'p27', dificuldade: 'dificil', palavra: "Belsazar", proibidas: ["Banquete", "Parede", "Mão", "Escrita", "Babilônia"], icone: "crown" },
      { id: 'p28', dificuldade: 'dificil', palavra: "Estêvão", proibidas: ["Mártir", "Apedrejado", "Saulo", "Céus", "Diácono"], icone: "zap" },
      { id: 'p29', dificuldade: 'dificil', palavra: "Tabernáculo", proibidas: ["Tenda", "Deserto", "Santo", "Moisés", "Aliança"], icone: "ship" },
      { id: 'p30', dificuldade: 'dificil', palavra: "Centurião", proibidas: ["Soldado", "Romano", "Fé", "Jesus", "Oficial"], icone: "zap" }
    ],

    // ==========================================
    // JOGO 3: QUEM DISSE? (30 cartas reais)
    // ==========================================
    'quem-disse': [
      // FÁCIL
      { id: 'd1', dificuldade: 'facil', palavra: 'Quem disse: "Eu e a minha casa serviremos ao Senhor"?', dicas: ["Moisés", "Josué", "Davi", "Samuel"], resposta: "Josué", referencia: "Josué 24:15", icone: "message-square" },
      { id: 'd2', dificuldade: 'facil', palavra: 'Quem disse: "O Senhor é o meu pastor, nada me faltará"?', dicas: ["Salomão", "Davi", "Moisés", "Isaías"], resposta: "Davi", referencia: "Salmo 23:1", icone: "message-square" },
      { id: 'd3', dificuldade: 'facil', palavra: 'Quem disse: "Para onde fores irei, e onde tu pousares, ali pousarei; o teu povo é o meu povo"?', dicas: ["Rute", "Ester", "Maria", "Sara"], resposta: "Rute", referencia: "Rute 1:16", icone: "message-square" },
      { id: 'd4', dificuldade: 'facil', palavra: 'Quem perguntou a Deus: "Sou eu o guardião do meu irmão"?', dicas: ["Abel", "Caim", "Jacó", "Esaú"], resposta: "Caim", referencia: "Gênesis 4:9", icone: "message-square" },
      { id: 'd5', dificuldade: 'facil', palavra: 'Quem exclamou na cruz: "Pai, nas tuas mãos entrego o meu espírito"?', dicas: ["Estêvão", "Jesus", "Pedro", "João"], resposta: "Jesus", referencia: "Lucas 23:46", icone: "message-square" },
      { id: 'd6', dificuldade: 'facil', palavra: 'Quem disse: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra"?', dicas: ["Isabel", "Maria", "Ana", "Marta"], resposta: "Maria", referencia: "Lucas 1:38", icone: "message-square" },
      { id: 'd7', dificuldade: 'facil', palavra: 'Quem disse: "Deixai vir a mim os pequeninos, e não os impeçais"?', dicas: ["Pedro", "Jesus", "João", "Moisés"], resposta: "Jesus", referencia: "Lucas 18:16", icone: "message-square" },
      { id: 'd8', dificuldade: 'facil', palavra: 'Quem disse: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito"?', dicas: ["Jesus", "João", "Paulo", "Pedro"], resposta: "Jesus", referencia: "João 3:16", icone: "message-square" },
      { id: 'd9', dificuldade: 'facil', palavra: 'Quem disse: "Tudo posso naquele que me fortalece"?', dicas: ["Davi", "Paulo", "Pedro", "Josué"], resposta: "Paulo", referencia: "Filipenses 4:13", icone: "message-square" },
      { id: 'd10', dificuldade: 'facil', palavra: 'Quem disse: "Se Deus é por nós, quem será contra nós"?', dicas: ["Paulo", "Pedro", "Davi", "Gideão"], resposta: "Paulo", referencia: "Romanos 8:31", icone: "message-square" },
      // MÉDIO
      { id: 'd11', dificuldade: 'medio', palavra: 'Quem disse a Jesus: "Se tu estivesses aqui, meu irmão não teria morrido"?', dicas: ["Maria", "Marta", "Isabel", "Madalena"], resposta: "Marta", referencia: "João 11:21", icone: "message-square" },
      { id: 'd12', dificuldade: 'medio', palavra: 'Quem disse: "Até aqui nos ajudou o Senhor"?', dicas: ["Saul", "Samuel", "Davi", "Josué"], resposta: "Samuel", referencia: "1 Samuel 7:12", icone: "message-square" },
      { id: 'd13', dificuldade: 'medio', palavra: 'Quem disse: "Fala, porque o teu servo ouve"?', dicas: ["Samuel", "Eli", "Davi", "Salomão"], resposta: "Samuel", referencia: "1 Samuel 3:10", icone: "message-square" },
      { id: 'd14', dificuldade: 'medio', palavra: 'Quem disse: "Não tenho prata nem ouro; mas o que tenho isso te dou"?', dicas: ["João", "Pedro", "Paulo", "Jesus"], resposta: "Pedro", referencia: "Atos 3:6", icone: "message-square" },
      { id: 'd15', dificuldade: 'medio', palavra: 'Quem disse: "Se o Senhor está conosco, por que nos sobreveio tudo isto?"', dicas: ["Gideão", "Sansão", "Josué", "Moisés"], resposta: "Gideão", referencia: "Juízes 6:13", icone: "message-square" },
      { id: 'd16', dificuldade: 'medio', palavra: 'Quem disse: "Eis-me aqui, envia-me a mim"?', dicas: ["Jeremias", "Isaías", "Ezequiel", "Daniel"], resposta: "Isaías", referencia: "Isaías 6:8", icone: "message-square" },
      { id: 'd17', dificuldade: 'medio', palavra: 'Quem confessou: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra"?', dicas: ["Davi", "Jó", "Moisés", "Isaías"], resposta: "Jó", referencia: "Jó 19:25", icone: "message-square" },
      { id: 'd18', dificuldade: 'medio', palavra: 'Quem disse: "Como poderei eu cometer este grande mal, e pecar contra Deus?"', dicas: ["José", "Davi", "Daniel", "Sansão"], resposta: "José", referencia: "Gênesis 39:9", icone: "message-square" },
      { id: 'd19', dificuldade: 'medio', palavra: 'Quem disse: "A minha alma engrandece ao Senhor"?', dicas: ["Ana", "Maria", "Isabel", "Rute"], resposta: "Maria", referencia: "Lucas 1:46", icone: "message-square" },
      { id: 'd20', dificuldade: 'medio', palavra: 'Quem perguntou: "Que é a verdade?" durante o julgamento de Jesus?', dicas: ["Pilatos", "Herodes", "Caifás", "Anás"], resposta: "Pilatos", referencia: "João 18:38", icone: "message-square" },
      // DIFÍCIL
      { id: 'd21', dificuldade: 'dificil', palavra: 'Quem disse a Davi: "Tu és este homem!" revelando seu pecado?', dicas: ["Samuel", "Natã", "Gad", "Elias"], resposta: "Natã", referencia: "2 Samuel 12:7", icone: "message-square" },
      { id: 'd22', dificuldade: 'dificil', palavra: 'Quem exclamou: "Ainda que ele me mate, nele esperarei"?', dicas: ["Jó", "Davi", "Abraão", "Jeremias"], resposta: "Jó", referencia: "Jó 13:15", icone: "message-square" },
      { id: 'd23', dificuldade: 'dificil', palavra: 'Quem disse: "Antes que te formasse no ventre te conheci"?', dicas: ["Deus (a Jeremias)", "Elias", "Samuel", "Moisés"], resposta: "Deus (a Jeremias)", referencia: "Jeremias 1:5", icone: "message-square" },
      { id: 'd24', dificuldade: 'dificil', palavra: 'Quem disse: "A beleza é enganosa... mas a mulher que teme ao Senhor será louvada"?', dicas: ["Salomão", "Davi", "Paulo", "Lemuel"], resposta: "Salomão", referencia: "Provérbios 31:30", icone: "message-square" },
      { id: 'd25', dificuldade: 'dificil', palavra: 'Quem disse: "Não fomos nós que lançamos três homens amarrados dentro do fogo?"', dicas: ["Nabucodonosor", "Hamã", "Ciro", "Dario"], resposta: "Nabucodonosor", referencia: "Daniel 3:24", icone: "message-square" },
      { id: 'd26', dificuldade: 'dificil', palavra: 'Quem disse: "Necessário vos é nascer de novo"?', dicas: ["Jesus (a Nicodemos)", "Jesus (a Pedro)", "João Batista", "Paulo"], resposta: "Jesus (a Nicodemos)", referencia: "João 3:7", icone: "message-square" },
      { id: 'd27', dificuldade: 'dificil', palavra: 'Quem exclamou: "Olhai para mim, e sereis salvos, vós, todos os termos da terra"?', dicas: ["Moisés", "Isaías (Deus)", "Paulo", "Jesus"], resposta: "Isaías (Deus)", referencia: "Isaías 45:22", icone: "message-square" },
      { id: 'd28', dificuldade: 'dificil', palavra: 'Quem disse: "Até quando coxeareis entre dois pensamentos?"', dicas: ["Elias", "Eliseu", "Josué", "Moisés"], resposta: "Elias", referencia: "1 Reis 18:21", icone: "message-square" },
      { id: 'd29', dificuldade: 'dificil', palavra: 'Quem disse: "Senhor, tu me sondaste e me conheces"?', dicas: ["Davi", "Salomão", "Jeremias", "Isaías"], resposta: "Davi", referencia: "Salmo 139:1", icone: "message-square" },
      { id: 'd30', dificuldade: 'dificil', palavra: 'Quem disse a Jesus: "Creio Senhor! Ajuda-me na minha incredulidade."', dicas: ["Pedro", "O pai do menino", "Zaqueu", "O centurião"], resposta: "O pai do menino", referencia: "Marcos 9:24", icone: "message-square" }
    ],

    // ==========================================
    // JOGO 4: QUAL VERSÍCULO SOU? (30 cartas reais)
    // ==========================================
    'qual-versiculo-sou': [
      // FÁCIL
      { id: 'v1', dificuldade: 'facil', dicas: ["Falo sobre o amor sacrificial de Deus pelo mundo inteiro.", "Fico localizado no Evangelho de João, no capítulo 3.", "Declaro que todo aquele que crer no Filho não pereça, mas tenha a vida eterna."], resposta: "João 3:16", referencia: "João 3:16", icone: "book-open" },
      { id: 'v2', dificuldade: 'facil', dicas: ["Falo sobre a suficiência do cuidado de Deus em nossas vidas.", "Começo com a frase: 'O Senhor é meu pastor'.", "Termino declarando: 'nada me faltará'."], resposta: "Salmo 23:1", referencia: "Salmo 23:1", icone: "book-open" },
      { id: 'v3', dificuldade: 'facil', dicas: ["Falo sobre a força de fazer todas as coisas através de Cristo.", "Fico no livro de Filipenses, capítulo 4.", "Digo: 'Tudo posso naquele que me fortalece'."], resposta: "Filipenses 4:13", referencia: "Filipenses 4:13", icone: "book-open" },
      { id: 'v4', dificuldade: 'facil', dicas: ["Falo sobre o início de todas as coisas e da criação.", "Sou a primeira frase de toda a Bíblia sagrada.", "Digo: 'No princípio criou Deus os céus e a terra'."], resposta: "Gênesis 1:1", referencia: "Gênesis 1:1", icone: "book-open" },
      { id: 'v5', dificuldade: 'facil', dicas: ["Começo com: 'Pai nosso, que estás nos céus, santificado seja o teu nome'.", "Sou a oração perfeita que Jesus ensinou.", "Fico no Evangelho de Mateus, capítulo 6."], resposta: "Mateus 6:9-13", referencia: "Mateus 6:9-13", icone: "book-open" },
      { id: 'v6', dificuldade: 'facil', dicas: ["Ensino a guardar no coração a palavra divina.", "O objetivo é evitar pecar contra Deus.", "Fico no Salmo 119, versículo 11."], resposta: "Salmo 119:11", referencia: "Salmo 119:11", icone: "book-open" },
      { id: 'v7', dificuldade: 'facil', dicas: ["Falo sobre as palavras de Deus serem guia para os caminhos.", "Comparo as Escrituras a uma lâmpada para os pés.", "Fico no Salmo 119, versículo 105."], resposta: "Salmo 119:105", referencia: "Salmo 119:105", icone: "book-open" },
      { id: 'v8', dificuldade: 'facil', dicas: ["Digo que a verdade divina liberta os homens.", "Começo com: 'E conhecereis a verdade...'.", "Fico em João 8:32."], resposta: "João 8:32", referencia: "João 8:32", icone: "book-open" },
      { id: 'v9', dificuldade: 'facil', dicas: ["Digo que Jesus é o único caminho para Deus.", "Menciono o caminho, a verdade e a vida.", "Afirmo: 'ninguém vem ao Pai senão por mim'."], resposta: "João 14:6", referencia: "João 14:6", icone: "book-open" },
      { id: 'v10', dificuldade: 'facil', dicas: ["Digo para instruir a criança no caminho correto.", "Afirmo que mesmo na velhice ela não se desviará dele.", "Fico em Provérbios 22:6."], resposta: "Provérbios 22:6", referencia: "Provérbios 22:6", icone: "book-open" },
      // MÉDIO
      { id: 'v11', dificuldade: 'medio', dicas: ["Falo sobre a proteção divina contra pragas e setas.", "Meu trecho diz: 'Mil cairão ao teu lado, e dez mil à tua direita...'.", "Sou o Salmo 91."], resposta: "Salmo 91", referencia: "Salmo 91", icone: "book-open" },
      { id: 'v12', dificuldade: 'medio', dicas: ["Digo que a fé é a certeza das coisas que se esperam.", "Falo que é a convicção de fatos que não se veem.", "Fico em Hebreus 11:1."], resposta: "Hebreus 11:1", referencia: "Hebreus 11:1", icone: "book-open" },
      { id: 'v13', dificuldade: 'medio', dicas: ["Falo sobre as virtudes como amor, paz, bondade e mansidão.", "Chamo isso de 'fruto do Espírito'.", "Fico no livro de Gálatas, no capítulo 5."], resposta: "Gálatas 5:22-23", referencia: "Gálatas 5:22-23", icone: "book-open" },
      { id: 'v14', dificuldade: 'medio', dicas: ["Digo que se o povo de Deus orar e buscar a face divina, Ele sarará a terra.", "Menciono humilhar-se, buscar e converter-se.", "Fico em 2 Crônicas 7:14."], resposta: "2 Crônicas 7:14", referencia: "2 Crônicas 7:14", icone: "book-open" },
      { id: 'v15', dificuldade: 'medio', dicas: ["Digo que todas as coisas operam juntas para o bem daqueles que amam a Deus.", "Menciono os que são chamados segundo o seu propósito.", "Fico em Romanos 8:28."], resposta: "Romanos 8:28", referencia: "Romanos 8:28", icone: "book-open" },
      { id: 'v16', dificuldade: 'medio', dicas: ["Falo sobre Deus ser o nosso refúgio e fortaleza.", "Menciono que Ele é socorro bem presente na angústia.", "Fico no Salmo 46, no primeiro versículo."], resposta: "Salmo 46:1", referencia: "Salmo 46:1", icone: "book-open" },
      { id: 'v17', dificuldade: 'medio', dicas: ["Menciono que a resposta branda desvia o furor.", "Menciono que a palavra dura suscita a ira.", "Fico no livro de Provérbios, no capítulo 15."], resposta: "Provérbios 15:1", referencia: "Provérbios 15:1", icone: "book-open" },
      { id: 'v18', dificuldade: 'medio', dicas: ["Exorto a clamar a Deus, que Ele responderá.", "Prometo anunciar coisas grandes e ocultas que não sabes.", "Fico no livro de Jeremias, capítulo 33, versículo 3."], resposta: "Jeremias 33:3", referencia: "Jeremias 33:3", icone: "book-open" },
      { id: 'v19', dificuldade: 'medio', dicas: ["Digo que o salário do pecado é a morte.", "Mas o dom gratuito de Deus é a vida eterna em Cristo.", "Fico na epístola aos Romanos, capítulo 6, versículo 23."], resposta: "Romanos 6:23", referencia: "Romanos 6:23", icone: "book-open" },
      { id: 'v20', dificuldade: 'medio', dicas: ["Digo que os que esperam no Senhor renovam as forças.", "Afirmo que sobem com asas como águias.", "Fico no livro de Isaías, no capítulo 40."], resposta: "Isaías 40:31", referencia: "Isaías 40:31", icone: "book-open" },
      // DIFÍCIL
      { id: 'v21', dificuldade: 'dificil', dicas: ["Digo que a paz divina guarda vossos corações e sentimentos em Cristo Jesus.", "Falo sobre a paz que excede todo o entendimento.", "Fico em Filipenses, capítulo 4, versículo 7."], resposta: "Filipenses 4:7", referencia: "Filipenses 4:7", icone: "book-open" },
      { id: 'v22', dificuldade: 'dificil', dicas: ["Digo que o coração alegre serve de bom remédio.", "Mas o espírito abatido seca os próprios ossos.", "Fico em Provérbios 17:22."], resposta: "Provérbios 17:22", referencia: "Provérbios 17:22", icone: "book-open" },
      { id: 'v23', dificuldade: 'dificil', dicas: ["Menciono que a vossa palavra deve ser sim, sim; não, não.", "Afirmo que o que passa disso provém do maligno.", "Fico no Evangelho de Mateus, capítulo 5."], resposta: "Mateus 5:37", referencia: "Mateus 5:37", icone: "book-open" },
      { id: 'v24', dificuldade: 'dificil', dicas: ["Digo que a palavra de Deus é viva e eficaz, e mais cortante do que espada de dois gumes.", "Falo que ela penetra até à divisão da alma e do espírito.", "Fico na epístola aos Hebreus, capítulo 4, versículo 12."], resposta: "Hebreus 4:12", referencia: "Hebreus 4:12", icone: "book-open" },
      { id: 'v25', dificuldade: 'dificil', dicas: ["Menciono que a beleza é enganosa e a vaidade é passageira.", "Mas a mulher que teme ao Senhor será louvada.", "Fico no último capítulo de Provérbios, no versículo 30."], resposta: "Provérbios 31:30", referencia: "Provérbios 31:30", icone: "book-open" },
      { id: 'v26', dificuldade: 'dificil', dicas: ["Instruo a lançar sobre Deus toda a vossa ansiedade.", "Digo que o motivo é que Ele tem cuidado de vós.", "Fico na primeira epístola de Pedro, capítulo 5, versículo 7."], resposta: "1 Pedro 5:7", referencia: "1 / Pedro 5:7", icone: "book-open" },
      { id: 'v27', dificuldade: 'dificil', dicas: ["Afirmo que o choro pode durar uma noite.", "Mas a alegria vem logo pela manhã.", "Fico no Salmo 30, no versículo 5."], resposta: "Salmo 30:5", referencia: "Salmo 30:5", icone: "book-open" },
      { id: 'v28', dificuldade: 'dificil', dicas: ["Escrevo que não nos foi dado espírito de temor.", "Mas de fortaleza, de amor e de moderação.", "Fico na segunda epístola de Paulo a Timóteo, capítulo 1."], resposta: "2 Timóteo 1:7", referencia: "2 Timóteo 1:7", icone: "book-open" },
      { id: 'v29', dificuldade: 'dificil', dicas: ["Menciono que os que semeiam em lágrimas.", "Com júbilo ceifarão.", "Fico no Salmo 126, no versículo 5."], resposta: "Salmo 126:5", referencia: "Salmo 126:5", icone: "book-open" },
      { id: 'v30', dificuldade: 'dificil', dicas: ["Menciono que Deus sabe os pensamentos que tem sobre nós.", "Pensamentos de paz, e não de mal, para vos dar o fim que esperais.", "Fico no livro de Jeremias, capítulo 29, versículo 11."], resposta: "Jeremias 29:11", referencia: "Jeremias 29:11", icone: "book-open" }
    ],

    // ==========================================
    // JOGO 5: O QUE SOU? (30 cartas reais)
    // ==========================================
    'o-que-sou': [
      // FÁCIL
      { id: 'o1', dificuldade: 'facil', dicas: ["Fui feita de madeira de acácia e revestida de ouro puro.", "Guardava as tábuas da Lei, o vaso com maná e a vara de Arão.", "Ficava posicionada no Santo dos Santos."], resposta: "Arca da Aliança", referencia: "Êxodo 25", icone: "help-circle" },
      { id: 'o2', dificuldade: 'facil', dicas: ["Fui lançada por um jovem pastor de ovelhas.", "Atingi com precisão a testa de um gigante filisteu.", "Fui a arma de Davi contra Golias."], resposta: "Uma pedra (de funda)", referencia: "1 Samuel 17", icone: "help-circle" },
      { id: 'o3', dificuldade: 'facil', dicas: ["Fui a embarcação gigante construída para salvar a criação.", "Media 300 côvados de comprimento.", "Fui calafetada com betume por Noé."], resposta: "Arca de Noé", referencia: "Gênesis 6", icone: "ship" },
      { id: 'o4', dificuldade: 'facil', dicas: ["Fui o primeiro local de moradia do primeiro casal humano.", "Tinha rios como Tigre e Eufrates ao redor.", "Fui guardado por querubins após a queda."], resposta: "Jardim do Éden", referencia: "Gênesis 2", icone: "help-circle" },
      { id: 'o5', dificuldade: 'facil', dicas: ["Fui o objeto brilhante no céu que guiou os Reis Magos.", "Parei sobre a estrebaria em Belém.", "Indiquei o nascimento de Jesus."], resposta: "A Estrela de Belém", referencia: "Mateus 2", icone: "help-circle" },
      { id: 'o6', dificuldade: 'facil', dicas: ["Fui o arbusto que queimava mas não se consumia.", "Deus falou com Moisés através de mim no deserto.", "Moisés teve que tirar as sandálias diante de mim."], resposta: "Sarça Ardente", referencia: "Êxodo 3", icone: "help-circle" },
      { id: 'o7', dificuldade: 'facil', dicas: ["Fomos as pedras gravadas com os mandamentos divinos.", "Fomos dadas a Moisés no Monte Sinai.", "Fomos guardadas dentro da Arca da Aliança."], resposta: "Tábuas da Lei", referencia: "Êxodo 31:18", icone: "scroll" },
      { id: 'o8', dificuldade: 'facil', dicas: ["Fui o local onde os discípulos de Jesus se esconderam no dia de Pentecostes.", "Um vento impetuoso encheu a sala e línguas de fogo apareceram.", "O Espírito Santo foi derramado sobre nós."], resposta: "Cenáculo", referencia: "Atos 2", icone: "help-circle" },
      { id: 'o9', dificuldade: 'facil', dicas: ["Fui o alimento milagroso multiplicado por Jesus.", "Alimentei mais de cinco mil pessoas na relva.", "Sobraram doze cestas cheias após todos comerem."], resposta: "Pães e Peixes", referencia: "Mateus 14", icone: "help-circle" },
      { id: 'o10', dificuldade: 'facil', dicas: ["Fui o instrumento usado para crucificar Jesus Cristo.", "Fui carregada por Simão Cirineu por um trecho do caminho.", "Me tornei o símbolo supremo da redenção cristã."], resposta: "Cruz", referencia: "João 19", icone: "zap" },
      // MÉDIO
      { id: 'o11', dificuldade: 'medio', dicas: ["Fui o cajado de liderança que se transformou em cobra.", "Moisés me usou para tocar na água do Mar Vermelho.", "Bati na rocha de onde brotou água no deserto."], resposta: "O Cajado de Moisés", referencia: "Êxodo 14", icone: "help-circle" },
      { id: 'o12', dificuldade: 'medio', dicas: ["Tinha o sabor de bolo de mel e caía do céu todas as manhãs.", "Fui o alimento enviado por Deus ao povo no deserto.", "Minhas sobras apodreciam no mesmo dia, exceto no sábado."], resposta: "Maná", referencia: "Êxodo 16", icone: "help-circle" },
      { id: 'o13', dificuldade: 'medio', dicas: ["Fui a cidade cujas muralhas caíram após o povo dar voltas.", "Fui conquistada liderados por Josué.", "Apenas a família de Raabe sobreviveu."], resposta: "Jericó", referencia: "Josué 6", icone: "help-circle" },
      { id: 'o14', dificuldade: 'medio', dicas: ["Fui o rio onde Jesus foi batizado por João.", "Naamã mergulhou sete vezes em mim para ser curado de lepra.", "Fui atravessado a pé enxuto pelo povo com a Arca."], resposta: "Rio Jordão", referencia: "Marcos 1:9", icone: "help-circle" },
      { id: 'o15', dificuldade: 'medio', dicas: ["Fui a primeira praga enviada ao Egito.", "Moisés tocou com o cajado no Rio Nilo e me originou.", "Fiz os peixes morrerem e a água cheirar mal."], resposta: "Água em Sangue", referencia: "Êxodo 7:14", icone: "help-circle" },
      { id: 'o16', dificuldade: 'medio', dicas: ["Fui a ave que trouxe uma folha de oliveira no bico.", "Mostrei a Noé que as águas do dilúvio haviam baixado.", "Fui solta da arca três vezes."], font: "Gênesis 8:11", resposta: "Pomba", referencia: "Gênesis 8", icone: "help-circle" },
      { id: 'o17', dificuldade: 'medio', dicas: ["Fui o instrumento musical tocado por Davi.", "Acalmava o espírito atormentado do rei Saul.", "Sou um dos instrumentos de corda mais antigos do mundo."], resposta: "Harpa", referencia: "1 Samuel 16:23", icone: "help-circle" },
      { id: 'o18', dificuldade: 'medio', dicas: ["Fui o objeto vendido por Esaú a seu irmão Jacó por um prato de lentilhas.", "Garantia direitos especiais ao filho mais velho.", "Esaú me desprezou por estar com fome."], resposta: "Primogenitura (Direito)", referencia: "Gênesis 25:34", icone: "scroll" },
      { id: 'o19', dificuldade: 'medio', dicas: ["Fui o animal que engoliu o profeta Jonas.", "Fui designado por Deus para preservá-lo da tempestade.", "Cuspi Jonas na praia após três dias e três noites."], resposta: "Grande Peixe", referencia: "Jonas 1:17", icone: "ship" },
      { id: 'o20', dificuldade: 'medio', dicas: ["Fui a cidade destruída com fogo e enxofre devido ao pecado.", "A esposa de Ló olhou para trás e virou estátua de sal na minha fuga.", "Fazia par com Gomorra."], resposta: "Sodoma", referencia: "Gênesis 19", icone: "help-circle" },
      // DIFÍCIL
      { id: 'o21', dificuldade: 'dificil', dicas: ["Fui o objeto construído por homens orgulhosos na terra de Sinar.", "O objetivo era fazer um monumento que alcançasse os céus.", "Deus me interrompeu confundindo os idiomas das pessoas."], resposta: "Torre de Babel", referencia: "Gênesis 11", icone: "help-circle" },
      { id: 'o22', dificuldade: 'dificil', dicas: ["Fui o monte onde Jesus foi crucificado.", "Significo ''Lugar da Caveira'' em aramaico.", "Também sou conhecido como Calvário."], resposta: "Gólgota (Calvário)", referencia: "Mateus 27:33", icone: "help-circle" },
      { id: 'o23', dificuldade: 'dificil', dicas: ["Fui a túnica colorida e luxuosa dada de presente a um filho.", "Pertenci a José, filho de Jacó.", "Fui manchada com sangue de bode por irmãos invejosos."], resposta: "A Túnica Colorida de José", referencia: "Gênesis 37:3", icone: "help-circle" },
      { id: 'o24', dificuldade: 'dificil', dicas: ["Fui a pedra usada por Jacó como travesseiro em Betel.", "Sonhei com uma escada que subia ao céu.", "Fui ungida com azeite na manhã seguinte."], resposta: "Uma pedra", referencia: "Gênesis 28:11", icone: "help-circle" },
      { id: 'o25', dificuldade: 'dificil', dicas: ["Fui o poço onde Jesus encontrou a mulher samaritana.", "Fico nas terras que Jacó deu a seu filho José.", "Muitos tiravam água de mim no calor do meio-dia."], resposta: "Poço de Jacó", referencia: "João 4:5-6", icone: "help-circle" },
      { id: 'o26', dificuldade: 'dificil', dicas: ["Fui o óleo precioso derramado sobre a cabeça de Jesus por Maria em Betânia.", "Era feito de nardo puro e tinha altíssimo valor comercial.", "Judas reclamou que deveria ser vendido para dar aos pobres."], resposta: "Perfume de Nardo", referencia: "João 12:3", icone: "help-circle" },
      { id: 'o27', dificuldade: 'dificil', dicas: ["Fui o objeto de metal que flutuou nas águas do Rio Jordão.", "Pertencia a um dos jovens profetas que ajudava Eliseu.", "Eliseu jogou um pedaço de madeira para me fazer boiar."], resposta: "Machado de Ferro", referencia: "2 Reis 6:5-7", icone: "zap" },
      { id: 'o28', dificuldade: 'dificil', dicas: ["Fui a serpente de bronze levantada por Moisés no deserto.", "Quem olhava para mim era curado das picadas de cobra.", "Fui destruída séculos depois pelo rei Ezequias por virar objeto de idolatria."], resposta: "Neustã", referencia: "Números 21:9 / 2 Reis 18:4", icone: "zap" },
      { id: 'o29', dificuldade: 'dificil', dicas: ["Fomos as pedras sagradas guardadas no peitoral do sumo sacerdote.", "Éramos usadas para consultar a vontade de Deus em decisões importantes.", "Significamos ''Luzes e Perfeições''."], resposta: "Urim e Tumim", referencia: "Êxodo 28:30", icone: "help-circle" },
      { id: 'o30', dificuldade: 'dificil', dicas: ["Fui a planta que cresceu rápido para dar sombra a Jonas.", "E no dia seguinte fui comida por um verme sob ordem divina.", "Servi de lição de Deus sobre compaixão."], resposta: "Aboboreira", referencia: "Jonas 4:6", icone: "help-circle" }
    ],

    // ==========================================
    // JOGO 6: QUEM SABE, RESPONDE! (30 cartas reais)
    // ==========================================
    'quem-sabe-responde': [
      // FÁCIL
      { id: 'sr1', dificuldade: 'facil', palavra: "Quantos discípulos Jesus escolheu inicialmente para segui-lo?", dicas: ["7", "10", "12", "70"], resposta: "12", referencia: "Mateus 10:1", icone: "list" },
      { id: 'sr2', dificuldade: 'facil', palavra: "Qual destas mulheres foi uma juíza em Israel?", dicas: ["Débora", "Rute", "Sara", "Noemi"], resposta: "Débora", referencia: "Juízes 4:4", icone: "list" },
      { id: 'sr3', dificuldade: 'facil', palavra: "Qual é o primeiro livro contido na Bíblia Sagrada?", dicas: ["Êxodo", "Salmos", "Mateus", "Gênesis"], resposta: "Gênesis", referencia: "Gênesis 1:1", icone: "list" },
      { id: 'sr4', dificuldade: 'facil', palavra: "Em qual cidade Jesus nasceu?", dicas: ["Jerusalém", "Belém", "Nazaré", "Jericó"], resposta: "Belém", referencia: "Mateus 2:1", icone: "list" },
      { id: 'sr5', dificuldade: 'facil', palavra: "Quem escreveu a maioria dos Salmos da Bíblia?", dicas: ["Moisés", "Salomão", "Davi", "Isaías"], resposta: "Davi", referencia: "Salmo 23", icone: "list" },
      { id: 'sr6', dificuldade: 'facil', palavra: "Por quantas moedas de prata Judas Iscariotes traiu Jesus?", dicas: ["10 moedas", "30 moedas", "50 moedas", "100 moedas"], resposta: "30 moedas", referencia: "Mateus 26:15", icone: "list" },
      { id: 'sr7', dificuldade: 'facil', palavra: "Quem foi lançado na cova dos leões por orar a Deus?", dicas: ["Daniel", "José", "Jonas", "Davi"], resposta: "Daniel", referencia: "Daniel 6", icone: "list" },
      { id: 'sr8', dificuldade: 'facil', palavra: "Qual foi o homem mais velho citado na Bíblia, vivendo 969 anos?", dicas: ["Matusalém", "Noé", "Adão", "Enoque"], resposta: "Matusalém", referencia: "Gênesis 5:27", icone: "list" },
      { id: 'sr9', dificuldade: 'facil', palavra: "Quantas pragas Deus enviou ao Egito através de Moisés?", dicas: ["7 pragas", "10 pragas", "12 pragas", "3 pragas"], resposta: "10 pragas", referencia: "Êxodo 7-12", icone: "list" },
      { id: 'sr10', dificuldade: 'facil', palavra: "Qual apóstolo é conhecido por ter negado Jesus três vezes?", dicas: ["João", "Pedro", "Judas", "Tomé"], resposta: "Pedro", referencia: "Mateus 26:34", icone: "list" },
      // MÉDIO
      { id: 'sr11', dificuldade: 'medio', palavra: "Quem foi o companheiro de Paulo na prisão que cantou louvores à meia-noite?", dicas: ["Pedro", "Silas", "Barnabé", "Timóteo"], resposta: "Silas", referencia: "Atos 16:25", icone: "list" },
      { id: 'sr12', dificuldade: 'medio', palavra: "Qual destas pessoas foi levada ao céu sem passar pela morte física?", dicas: ["Moisés", "Enoque", "Davi", "Abraão"], resposta: "Enoque", referencia: "Gênesis 5:24", icone: "list" },
      { id: 'sr13', dificuldade: 'medio', palavra: "Quem liderou o povo hebreu após a morte de Moisés?", dicas: ["Arão", "Calebe", "Josué", "Gideão"], resposta: "Josué", referencia: "Josué 1:1-2", icone: "list" },
      { id: 'sr14', dificuldade: 'medio', palavra: "Quem era a irmã de Moisés e Arão?", dicas: ["Sara", "Miriã", "Débora", "Rebeca"], resposta: "Miriã", referencia: "Êxodo 15:20", icone: "list" },
      { id: 'sr15', dificuldade: 'medio', palavra: "Qual o livro da Bíblia que narra a saída do povo hebreu do Egito?", dicas: ["Gênesis", "Números", "Levítico", "Êxodo"], resposta: "Êxodo", referencia: "Êxodo 1", icone: "list" },
      { id: 'sr16', dificuldade: 'medio', palavra: "Quem teve a cabeça pedida em um prato pela filha de Herodias?", dicas: ["Jesus", "Estêvão", "João Batista", "Tiago"], resposta: "João Batista", referencia: "Mateus 14:8", icone: "list" },
      { id: 'sr17', dificuldade: 'medio', palavra: "Qual o nome da montanha onde Moisés recebeu os Dez Mandamentos?", dicas: ["Monte Carmelo", "Monte Sinai", "Monte das Oliveiras", "Monte Ararat"], resposta: "Monte Sinai", referencia: "Êxodo 19:20", icone: "list" },
      { id: 'sr18', dificuldade: 'medio', palavra: "Que animal falou com o profeta Balaão no caminho?", dicas: ["Uma jumenta", "Uma ovelha", "Um leão", "Uma serpente"], resposta: "Uma jumenta", referencia: "Números 22:28", icone: "list" },
      { id: 'sr19', dificuldade: 'medio', palavra: "O que caiu do céu no deserto como alimento para os israelitas?", dicas: ["Pão ázimo", "Mel puro", "Maná", "Codornizes"], resposta: "Maná", referencia: "Êxodo 16:15", icone: "list" },
      { id: 'sr20', dificuldade: 'medio', palavra: "Qual profeta desafiou os 450 profetas de Baal no Monte Carmelo?", dicas: ["Elias", "Eliseu", "Isaías", "Jeremias"], resposta: "Elias", referencia: "1 Reis 18", icone: "list" },
      // DIFÍCIL
      { id: 'sr21', dificuldade: 'dificil', palavra: "Quantos anos o povo hebreu peregrinou pelo deserto?", dicas: ["10", "40", "70", "100"], resposta: "40", referencia: "Josué 5:6", icone: "list" },
      { id: 'sr22', dificuldade: 'dificil', palavra: "Qual milagre Jesus operou nas Bodas de Caná?", dicas: ["Cura de cego", "Multiplicação", "Água em vinho", "Ressurreição"], resposta: "Água em vinho", referencia: "João 2:1-11", icone: "list" },
      { id: 'sr23', dificuldade: 'dificil', palavra: "Qual dos reis de Israel pediu a Deus apenas sabedoria para governar?", dicas: ["Davi", "Saul", "Salomão", "Ezequias"], resposta: "Salomão", referencia: "1 Reis 3:9", icone: "list" },
      { id: 'sr24', dificuldade: 'dificil', palavra: "Qual o nome da esposa de Jacó que ele não queria casar primeiro?", dicas: ["Raquel", "Lia", "Bila", "Zilpa"], resposta: "Lia", referencia: "Gênesis 29", icone: "list" },
      { id: 'sr25', dificuldade: 'dificil', palavra: "Quem foi o rei de Basã que tinha uma cama de ferro gigante?", dicas: ["Ogue", "Sion", "Balaque", "Agague"], resposta: "Ogue", referencia: "Deuteronômio 3", icone: "list" },
      { id: 'sr26', dificuldade: 'dificil', palavra: "Qual o nome da sogra de Rute?", dicas: ["Sara", "Noemi", "Orfa", "Isabel"], resposta: "Noemi", referencia: "Rute 1", icone: "list" },
      { id: 'sr27', dificuldade: 'dificil', palavra: "De quem era o rolo de pergaminho que o rei Joaquim queimou?", dicas: ["Isaías", "Jeremias", "Ezequiel", "Daniel"], resposta: "Jeremias", referencia: "Jeremias 36", icone: "list" },
      { id: 'sr28', dificuldade: 'dificil', palavra: "Qual o nome do pai de João Batista?", dicas: ["Zacarias", "José", "Arão", "Eli"], resposta: "Zacarias", referencia: "Lucas 1", icone: "list" },
      { id: 'sr29', dificuldade: 'dificil', palavra: "Qual o nome da ilha onde João escreveu o Apocalipse?", dicas: ["Creta", "Patmos", "Malta", "Chipre"], resposta: "Patmos", referencia: "Apocalipse 1:9", icone: "list" },
      { id: 'sr30', dificuldade: 'dificil', palavra: "Quem foi a única filha mulher de Jacó?", dicas: ["Diná", "Raquel", "Lia", "Bila"], resposta: "Diná", referencia: "Gênesis 30:21", icone: "list" }
    ],

    // ==========================================
    // JOGO 7: BÍBLIMÍMICAS (30 cartas reais)
    // ==========================================
    'biblimimicas': [
      // FÁCIL
      { id: 'm1', dificuldade: 'facil', palavra: "Caminhar sobre as águas (Mímica)", proibidas: ["Jesus", "Pedro", "Mar", "Barco", "Afundar"], icone: "smile" },
      { id: 'm2', dificuldade: 'facil', palavra: "Derrubar as muralhas de Jericó (Mímica)", proibidas: ["Buzina", "Trombeta", "Muro", "Grito", "Rodeador"], icone: "smile" },
      { id: 'm3', dificuldade: 'facil', palavra: "Noé construindo a arca com martelo (Mímica)", proibidas: ["Dilúvio", "Madeira", "Animais", "Chuva", "Serrote"], icone: "smile" },
      { id: 'm4', dificuldade: 'facil', palavra: "Davi derrubando Golias com funda (Mímica)", proibidas: ["Pedra", "Gigante", "Estilingue", "Cair", "Fronte"], icone: "smile" },
      { id: 'm5', dificuldade: 'facil', palavra: "Moisés abrindo o Mar Vermelho (Mímica)", proibidas: ["Cajado", "Água", "Egito", "Passagem", "Povo"], icone: "smile" },
      { id: 'm6', dificuldade: 'facil', palavra: "Daniel dormindo com leões (Mímica)", proibidas: ["Feras", "Cova", "Orar", "Anjo", "Garras"], icone: "smile" },
      { id: 'm7', dificuldade: 'facil', palavra: "Adão comendo a maçã do fruto (Mímica)", proibidas: ["Eva", "Mordida", "Jardim", "Árvore", "Pecado"], icone: "smile" },
      { id: 'm8', dificuldade: 'facil', palavra: "Os magos seguindo a estrela no céu (Mímica)", proibidas: ["Reis", "Jesus", "Camelos", "Presentes", "Belém"], icone: "smile" },
      { id: 'm9', dificuldade: 'facil', palavra: "Lázaro saindo do túmulo enfaixado (Mímica)", proibidas: ["Morto", "Jesus", "Marta", "Ressuscitar", "Sepulcro"], icone: "smile" },
      { id: 'm10', dificuldade: 'facil', palavra: "Maria segurando o bebê na manjedoura (Mímica)", proibidas: ["Jesus", "Nascimento", "Estrebaria", "José", "Belém"], icone: "smile" },
      // MÉDIO
      { id: 'm11', dificuldade: 'medio', palavra: "Zaqueu subindo na figueira brava (Mímica)", proibidas: ["Baixo", "Galhos", "Árvore", "Jesus", "Cobrador"], icone: "smile" },
      { id: 'm12', dificuldade: 'medio', palavra: "Jonas sendo cuspido pelo grande peixe (Mímica)", proibidas: ["Baleia", "Mar", "Praia", "Nínive", "Vômito"], icone: "smile" },
      { id: 'm13', dificuldade: 'medio', palavra: "Sansão perdendo o cabelo com Dalila (Mímica)", proibidas: ["Força", "Cabelo", "Tesoura", "Filisteus", "Leão"], icone: "smile" },
      { id: 'm14', dificuldade: 'medio', palavra: "O cego Bartimeu clamando por Jesus (Mímica)", proibidas: ["Olhos", "Gritar", "Capa", "Cura", "Caminho"], icone: "smile" },
      { id: 'm15', dificuldade: 'medio', palavra: "Moisés descendo com as tábuas da lei (Mímica)", proibidas: ["Sinai", "Tábuas", "Mandamentos", "Pedra", "Bezerro"], icone: "smile" },
      { id: 'm16', dificuldade: 'medio', palavra: "Jesus lavando os pés dos discípulos (Mímica)", proibidas: ["Pedro", "Bacia", "Água", "Toalha", "Cena"], icone: "smile" },
      { id: 'm17', dificuldade: 'medio', palavra: "Pedro pescando e puxando rede cheia (Mímica)", proibidas: ["Barco", "Peixes", "Mar", "Rede", "Redes"], icone: "smile" },
      { id: 'm18', dificuldade: 'medio', palavra: "A mulher samaritana tirando água do poço (Mímica)", proibidas: ["Balde", "Jesus", "Siquém", "Cântaro", "Água"], icone: "smile" },
      { id: 'm19', dificuldade: 'medio', palavra: "O paralítico descendo pelo telhado (Mímica)", proibidas: ["Cura", "Casa", "Cordas", "Jesus", "Leito"], icone: "smile" },
      { id: 'm20', dificuldade: 'medio', palavra: "Paulo sendo picado por víbora na fogueira (Mímica)", proibidas: ["Malta", "Cobra", "Fogo", "Mão", "Veneno"], icone: "smile" },
      // DIFÍCIL
      { id: 'm21', dificuldade: 'dificil', palavra: "Balaão conversando com a jumenta (Mímica)", proibidas: ["Falar", "Animal", "Bater", "Anjo", "Espada"], icone: "smile" },
      { id: 'm22', dificuldade: 'dificil', palavra: "Eliseu fazendo boiar o machado (Mímica)", proibidas: ["Ferro", "Rio", "Madeira", "Flutuar", "Jordão"], icone: "smile" },
      { id: 'm23', dificuldade: 'dificil', palavra: "Ló e família fugindo de Sodoma (Mímica)", proibidas: ["Sal", "Estátua", "Olhar", "Fogo", "Destruição"], icone: "smile" },
      { id: 'm24', dificuldade: 'dificil', palavra: "Enoque sendo transladado ao céu (Mímica)", proibidas: ["Morte", "Deus", "Subir", "Desaparecer", "Caminhar"], icone: "smile" },
      { id: 'm25', dificuldade: 'dificil', palavra: "Elias subindo na carruagem de fogo (Mímica)", proibidas: ["Carro", "Cavalos", "Torvelinho", "Céu", "Eliseu"], icone: "smile" },
      { id: 'm26', dificuldade: 'dificil', palavra: "Uzá caindo morto ao tocar na Arca (Mímica)", proibidas: ["Tocar", "Caixa", "Bois", "Carroça", "Morrer"], icone: "smile" },
      { id: 'm27', dificuldade: 'dificil', palavra: "Jacó lutando com o anjo até o amanhecer (Mímica)", proibidas: ["Peniel", "Luta", "Coxa", "Mancar", "Israel"], icone: "smile" },
      { id: 'm28', dificuldade: 'dificil', palavra: "Gideão escolhendo os homens pela água (Mímica)", proibidas: ["300", "Lamber", "Beber", "Rio", "Cão"], icone: "smile" },
      { id: 'm29', dificuldade: 'dificil', palavra: "Belsazar vendo os dedos na parede (Mímica)", proibidas: ["Mão", "Escrever", "Mene", "Banquete", "Daniel"], icone: "smile" },
      { id: 'm30', dificuldade: 'dificil', palavra: "Rute recolhendo espigas nos campos (Mímica)", proibidas: ["Boaz", "Cereal", "Noemi", "Trigo", "Chão"], icone: "smile" }
    ],

    // ==========================================
    // JOGO 8: QUEM SOU EU? EXTREME (30 cartas reais)
    // ==========================================
    'quem-sou-eu-extreme': [
      // FÁCIL
      { id: 'ex1', dificuldade: 'facil', dicas: ["Escrevi fielmente as profecias do profeta Jeremias.", "Meu nome significa 'Bendito' em hebraico.", "Tive um rolo de pergaminho queimado pelo rei Joaquim."], resposta: "Baruque", referencia: "Jeremias 36", icone: "zap" },
      { id: 'ex2', dificuldade: 'facil', dicas: ["Fui a esposa do soldado Urias antes de me casar com o rei Davi.", "Fui avistada pelo rei tomando banho do terraço do palácio.", "Fui a mãe do sábio rei Salomão."], resposta: "Bate-Seba", referencia: "2 Samuel 11", icone: "zap" },
      { id: 'ex3', dificuldade: 'facil', dicas: ["Matei um leão em uma cova num dia de neve.", "Fui o comandante da guarda pessoal de elite de Davi.", "Fui filho de Joiada, vindo da cidade de Cabzeel."], resposta: "Benaia", referencia: "2 Samuel 23:20", icone: "zap" },
      { id: 'ex4', dificuldade: 'facil', dicas: ["Fui a rainha ímpia que persegui o profeta Elias.", "Fui esposa do rei Acabe e introduzi Baal em Israel.", "Morri ao ser empurrada de uma janela e devorada por cães."], resposta: "Jezabel", referencia: "1 Reis 16", icone: "zap" },
      { id: 'ex5', dificuldade: 'facil', dicas: ["Fui o homem que cedeu o túmulo novo para o sepultamento de Jesus.", "Fui membro rico do Sinédrio e discípulo secreto.", "Era originário de Arimateia."], resposta: "José de Arimateia", referencia: "Mateus 27:57", icone: "zap" },
      { id: 'ex6', dificuldade: 'facil', dicas: ["Fui o homem que andou com Deus e desapareceu porque Deus o levou.", "Fui pai de Matusalém.", "Não passei pela morte física antes de ir ao céu."], resposta: "Enoque", referencia: "Gênesis 5:24", icone: "zap" },
      { id: 'ex7', dificuldade: 'facil', dicas: ["Fui a rainha que visitei o rei Salomão para testar sua sabedoria.", "Vim de terras muito distantes com especiarias e ouro.", "Fiquei maravilhada com o palácio e o templo."], resposta: "Rainha de Sabá", referencia: "1 Reis 10", icone: "zap" },
      { id: 'ex8', dificuldade: 'facil', dicas: ["Fui o centurião romano que mandou chamar Pedro para pregar em minha casa.", "Fui o primeiro gentio a receber o Espírito Santo oficialmente.", "Vivia na cidade de Cesareia."], resposta: "Cornélio", referencia: "Atos 10", icone: "zap" },
      { id: 'ex9', dificuldade: 'facil', dicas: ["Fui a mulher que acolhi os dois espias hebreus em Jericó.", "Pendurei um cordão vermelho na minha janela para salvar minha família.", "Sou citada na genealogia de Jesus."], resposta: "Raabe", referencia: "Josué 2", icone: "zap" },
      { id: 'ex10', dificuldade: 'facil', dicas: ["Fui o sogro de Moisés e sacerdote de Midiã.", "Aconselhei Moisés a criar líderes auxiliares para julgar as causas menores.", "Também me chamavam de Reuel."], resposta: "Jetro", referencia: "Êxodo 18", icone: "zap" },
      // MÉDIO
      { id: 'ex11', dificuldade: 'medio', dicas: ["Fui o homem que tocou na Arca para evitar que ela caísse do carro de bois.", "Fui ferido de morte por Deus imediatamente após o ato.", "Aconteceu na eira de Nacom."], resposta: "Uzá", referencia: "2 Samuel 6:6-7", icone: "zap" },
      { id: 'ex12', dificuldade: 'medio', dicas: ["Fui o general do exército da Síria que sofria de lepra.", "Fui curado após mergulhar sete vezes no Rio Jordão.", "Tentei pagar Eliseu pela cura mas ele recusou."], resposta: "Naamã", referencia: "2 Reis 5", icone: "zap" },
      { id: 'ex13', dificuldade: 'medio', dicas: ["Fui a costureira de Jope ressuscitada por Pedro.", "Meu nome grego significa Dorcas (gazela).", "Fui muito conhecida por minhas boas obras e roupas aos pobres."], resposta: "Tabita (Dorcas)", referencia: "Atos 9:36", icone: "zap" },
      { id: 'ex14', dificuldade: 'medio', dicas: ["Fui a mulher de fé sincera, mãe do jovem pastor Timóteo.", "Fui elogiada pelo apóstolo Paulo junto com minha mãe Lois.", "Ensinei as escrituras sagradas ao meu filho desde a infância."], resposta: "Eunice", referencia: "2 Timóteo 1:5", icone: "zap" },
      { id: 'ex15', dificuldade: 'medio', dicas: ["Fui o rei de Israel que comecei a reinar com apenas sete anos.", "Fui escondido no Templo durante seis anos para escapar da tirana Atalia.", "Fui orientado pelo sábio sumo sacerdote Joiada."], resposta: "Joás", referencia: "2 Reis 11", icone: "zap" },
      { id: 'ex16', dificuldade: 'medio', dicas: ["Fui o profeta menor que fugi da presença de Deus rumo a Társis.", "Fui engolido por um grande peixe durante uma tempestade.", "Preguei o arrependimento na cidade de Nínive."], resposta: "Jonas", referencia: "Jonas 1", icone: "zap" },
      { id: 'ex17', dificuldade: 'medio', dicas: ["Fui a única juíza mulher de Israel.", "Liderei o povo hebreu debaixo de uma palmeira em Efraim.", "Fui à guerra junto com o general Baraque."], resposta: "Débora", referencia: "Juízes 4", icone: "zap" },
      { id: 'ex18', dificuldade: 'medio', dicas: ["Fui o sumo sacerdote mentor espiritual do profeta Samuel na infância.", "Meus filhos Hofni e Finéias pecaram gravemente no tabernáculo.", "Morri ao cair de costas da minha cadeira ao receber notícias da arca perdida."], resposta: "Eli", referencia: "1 Samuel 4", icone: "zap" },
      { id: 'ex19', dificuldade: 'medio', dicas: ["Fui a esposa do patriarca Isaque.", "Fui escolhida por um servo em um poço com camelos.", "Fui mãe dos gêmeos Esaú e Jacó."], resposta: "Rebeca", referencia: "Gênesis 24", icone: "zap" },
      { id: 'ex20', dificuldade: 'medio', dicas: ["Fui a cunhada de Rute que escolheu voltar para seu povo em Moabe.", "Me despedi de Noemi com um beijo choroso.", "Fui nora de Noemi antes de ficar viúva."], resposta: "Orfa", referencia: "Rute 1:14", icone: "zap" },
      // DIFÍCIL
      { id: 'ex21', dificuldade: 'dificil', dicas: ["Fui o último dos gigantes refains derrotados por Moisés.", "Tinha uma cama gigante de ferro de 9 côvados de comprimento.", "Fui o rei de Basã derrotado na batalha de Edrei."], resposta: "Ogue", referencia: "Deuteronômio 3:1-11", icone: "zap" },
      { id: 'ex22', dificuldade: 'dificil', dicas: ["Fui o discípulo que substituiu Judas Iscariotes no grupo dos doze.", "Fui escolhido através do lançamento de sortes contra José Barsabás.", "Fui eleito pelos onze em Jerusalém."], resposta: "Matias", referencia: "Atos 1:21-26", icone: "zap" },
      { id: 'ex23', dificuldade: 'dificil', dicas: ["Fui o pai de Samuel e marido de Ana e Penina.", "Vivia em Ramataim-Zofim, na região montanhosa de Efraim.", "Subia anualmente a Siló para adorar e sacrificar."], resposta: "Elcana", referencia: "1 Samuel 1", icone: "zap" },
      { id: 'ex24', dificuldade: 'dificil', dicas: ["Fui o profeta menor que questionei a Deus sobre a violência em Judá.", "Minha oração termina declarando: 'ainda que a figueira não floresça... exultarei no Deus da minha salvação'.", "Escrevi um livro de apenas três capítulos contendo uma visão de juízo."], resposta: "Habacuque", referencia: "Habacuque 3:17", icone: "zap" },
      { id: 'ex25', dificuldade: 'dificil', dicas: ["Fui o ourives que liderei a oposição contra o apóstolo Paulo em Éfeso.", "Fabriquei pequenos templos de prata da deusa Diana.", "Provoquei um tumulto enorme no teatro da cidade."], resposta: "Demétrio", referencia: "Atos 19:24", icone: "zap" },
      { id: 'ex26', dificuldade: 'dificil', dicas: ["Fui o rei de Moabe que contratei Balaão para amaldiçoar os israelitas.", "Tentei erguer altares em montes para obter a maldição.", "Ofereci riquezas e honras ao profeta Balaão."], resposta: "Balaque", referencia: "Números 22", icone: "zap" },
      { id: 'ex27', dificuldade: 'dificil', dicas: ["Fui o homem que ajudei a carregar a Arca da Aliança e acolhi a arca em minha casa por três meses.", "Toda a minha casa foi abençoada grandemente por Deus devido à presença da arca.", "Era originário de Gate."], resposta: "Obede-Edom", referencia: "2 Samuel 6:11", icone: "zap" },
      { id: 'ex28', dificuldade: 'dificil', dicas: ["Fui a esposa do rei hebreu Acazias que usurpei o trono de Judá.", "Tentei exterminar toda a linhagem real de Davi para governar sozinha.", "Fui morta nas proximidades do templo pelo exército de Joiada."], resposta: "Atalia", referencia: "2 Reis 11", icone: "zap" },
      { id: 'ex29', dificuldade: 'dificil', dicas: ["Fui o rei sacerdote de Salém que abençoei Abraão.", "Abraão me entregou o dízimo de todos os despojos de guerra.", "Não possuo genealogia ou registro de início ou fim de dias listado."], resposta: "Melquisedeque", referencia: "Gênesis 14:18-20 / Hebreus 7", icone: "zap" },
      { id: 'ex30', dificuldade: 'dificil', dicas: ["Fui o jovem que caí do terceiro andar de uma janela enquanto Paulo pregava.", "Dormi profundamente devido ao longo discurso que durou até a meia-noite.", "Fui recolhido morto, mas Paulo me ressuscitou descendo e abraçando-me."], resposta: "Êutico", referencia: "Atos 20:9-12", icone: "zap" }
    ],

    // ==========================================
    // JOGO 9: ONDE ESTOU? (30 cartas reais)
    // ==========================================
    'onde-estou': [
      // FÁCIL
      { id: 'on1', dificuldade: 'facil', dicas: ["Fui a cidade onde Jesus cresceu e passou a infância.", "Fui a cidade de origem de José e Maria.", "Jesus foi chamado pelo nome desta cidade em sua vida pública."], resposta: "Nazaré", referencia: "Lucas 2:39-40", icone: "book-open" },
      { id: 'on2', dificuldade: 'facil', dicas: ["Sou a cidade onde ficava o Templo de Salomão.", "Fui conquistada por Davi e me tornei a capital espiritual de Israel.", "Fui o local onde Jesus foi crucificado."], resposta: "Jerusalém", referencia: "2 Samuel 5", icone: "book-open" },
      { id: 'on3', dificuldade: 'facil', dicas: ["Fui a cidade onde Jesus nasceu em uma manjedoura.", "Fui profetizada por Miqueias como origem do Messias.", "Ficava na região da Judeia."], resposta: "Belém", referencia: "Mateus 2:1", icone: "book-open" },
      { id: 'on4', dificuldade: 'facil', dicas: ["Fui a cidade cercada de muralhas que caíram.", "Fui a primeira conquista hebreia liderada por Josué.", "Ficava perto do Rio Jordão."], resposta: "Jericó", referencia: "Josué 6", icone: "book-open" },
      { id: 'on5', dificuldade: 'facil', dicas: ["Fui o jardim onde Adão e Eva foram colocados por Deus.", "Tinha as árvores da Vida e do Conhecimento no centro.", "Tinha rios como Tigre e Eufrates fluindo de mim."], resposta: "Jardim do Éden", referencia: "Gênesis 2", icone: "book-open" },
      { id: 'on6', dificuldade: 'facil', dicas: ["Fui o mar cujas águas foram abertas por Moisés com o cajado.", "Permiti a travessia de milhões de hebreus a pé enxuto.", "Engoli todo o exército do Faraó que tentou nos seguir."], resposta: "Mar Vermelho", referencia: "Êxodo 14", icone: "book-open" },
      { id: 'on7', dificuldade: 'facil', dicas: ["Fui a cidade onde ficava a grande torre construída para alcançar o céu.", "Deus confundiu os idiomas do povo para parar a construção.", "Fui fundada na terra de Sinar."], resposta: "Babel", referencia: "Gênesis 11", icone: "book-open" },
      { id: 'on8', dificuldade: 'facil', dicas: ["Fui o monte onde Jesus ensinou o sermão das bem-aventuranças.", "Muitos discípulos se assentaram na encosta para ouvir.", "Fico nas proximidades do Mar da Galileia."], resposta: "Monte das Bem-Aventuranças", referencia: "Mateus 5", icone: "book-open" },
      { id: 'on9', dificuldade: 'facil', dicas: ["Fui a cidade onde vivia a família de Lázaro, Marta e Maria.", "Jesus operou a ressurreição de Lázaro em minhas terras.", "Ficava a cerca de três quilômetros de Jerusalém."], resposta: "Betânia", referencia: "João 11", icone: "book-open" },
      { id: 'on10', dificuldade: 'facil', dicas: ["Fui o rio onde Jesus foi batizado por João Batista.", "Fui o local onde Naamã mergulhou sete vezes para ser curado.", "Separo as terras de Canaã e o deserto."], resposta: "Rio Jordão", referencia: "Marcos 1:9", icone: "book-open" },
      // MÉDIO
      { id: 'on11', dificuldade: 'medio', dicas: ["Fui o monte onde Moisés recebeu os Dez Mandamentos.", "Toda a minha cúpula se encheu de fogo, fumaça e tremores.", "Também sou conhecido como Monte Horebe."], resposta: "Monte Sinai", referencia: "Êxodo 19", icone: "book-open" },
      { id: 'on12', dificuldade: 'medio', dicas: ["Fui a cidade onde Jesus operou seu primeiro milagre transformando água em vinho.", "Fui visitada por Jesus durante uma festa de casamento.", "Ficava localizada na região da Galileia."], resposta: "Caná da Galileia", referencia: "João 2:1-11", icone: "book-open" },
      { id: 'on13', dificuldade: 'medio', dicas: ["Fui o vale onde ocorreu a batalha entre Davi e Golias.", "O exército de Saul acampou de um lado e os filisteus do outro.", "Tinha um ribeiro no centro onde Davi pegou as pedras."], resposta: "Vale de Elá", referencia: "1 Samuel 17:2", icone: "book-open" },
      { id: 'on14', dificuldade: 'medio', dicas: ["Fui o monte onde a arca de Noé repousou após o dilúvio.", "Fico situado na atual região da Turquia.", "Tive minhas águas secas até que a arca tocasse meu solo."], resposta: "Monte Ararat", referencia: "Gênesis 8:4", icone: "book-open" },
      { id: 'on15', dificuldade: 'medio', dicas: ["Fui a ilha onde o apóstolo João escreveu o livro do Apocalipse.", "Fui o local de exílio de João devido ao evangelho de Cristo.", "Fico localizada no Mar Egeu."], resposta: "Ilha de Patmos", referencia: "Apocalipse 1:9", icone: "book-open" },
      { id: 'on16', dificuldade: 'medio', dicas: ["Fui o monte onde o profeta Elias desafiou os 450 profetas de Baal.", "Deus respondeu enviando fogo que consumiu o holocausto e a água.", "Fico localizado na cordilheira de Israel, perto do mar."], resposta: "Monte Carmelo", referencia: "1 Reis 18", icone: "book-open" },
      { id: 'on17', dificuldade: 'medio', dicas: ["Fui a cidade destruída com fogo e enxofre junto com Gomorra.", "Fui o local de moradia do sobrinho de Abraão, Ló.", "Minhas terras eram férteis como o jardim do Senhor antes do juízo."], resposta: "Sodoma", referencia: "Gênesis 19", icone: "book-open" },
      { id: 'on18', dificuldade: 'medio', dicas: ["Fui a cidade onde Jesus curou o cego Bartimeu no caminho.", "Fui uma cidade antiga com muralhas derrubadas séculos antes.", "Ficava na rota de peregrinação para Jerusalém."], resposta: "Jericó", referencia: "Marcos 10:46", icone: "book-open" },
      { id: 'on19', dificuldade: 'medio', dicas: ["Fui a terra onde Moisés viveu como pastor por 40 anos.", "Fugiu para mim após matar um egípcio.", "Fui a terra onde Moisés casou-se com Zípora, filha de Jetro."], resposta: "Midiã", referencia: "Êxodo 2:15", icone: "book-open" },
      { id: 'on20', dificuldade: 'medio', dicas: ["Fui o tanque de águas em Jerusalém onde Jesus curou um paralítico.", "Anjos agitavam minhas águas de tempos em tempos para cura.", "Tinha cinco alpendres ao redor."], resposta: "Tanque de Betesda", referencia: "João 5:2", icone: "book-open" },
      // DIFÍCIL
      { id: 'on21', dificuldade: 'dificil', dicas: ["Fui o monte de onde Moisés avistou a Terra Prometida antes de morrer.", "Fico localizado na cordilheira de Abarim, na terra de Moabe.", "Deus me sepultou Moisés em um vale próximo."], resposta: "Monte Nebo", referencia: "Deuteronômio 34", icone: "book-open" },
      { id: 'on22', dificuldade: 'dificil', dicas: ["Fui o poço onde Jesus encontrou a mulher samaritana.", "Fui escavado por um antigo patriarca hebreu em Siquém.", "Ficava nas terras dadas a José por seu pai Jacó."], resposta: "Poço de Jacó", referencia: "João 4:5-6", icone: "book-open" },
      { id: 'on23', dificuldade: 'dificil', dicas: ["Fui o local de origem do profeta Elias.", "Fico localizado na região montanhosa de Gileade.", "Também me chamavam de Tisbe."], resposta: "Tisbe", referencia: "1 Reis 17:1", icone: "book-open" },
      { id: 'on24', dificuldade: 'dificil', dicas: ["Fui a cidade onde o apóstolo Paulo nasceu.", "Ficava na província romana da Cilícia.", "Fui um importante centro cultural e acadêmico da época."], resposta: "Tarso", referencia: "Atos 22:3", icone: "book-open" },
      { id: 'on25', dificuldade: 'dificil', dicas: ["Fui a localidade onde Jesus se transfigurou diante de Pedro, Tiago e João.", "Fui identificada historicamente como uma alta montanha na Galileia.", "Alguns associam meu cume ao Monte Tabor."], resposta: "Monte da Transfiguração (Tabor)", referencia: "Mateus 17", icone: "book-open" },
      { id: 'on26', dificuldade: 'dificil', dicas: ["Fui a cidade da Mesopotâmia de onde Deus chamou Abraão.", "Fui a terra original da família dos patriarcas.", "Ficava na terra dos Caldeus."], resposta: "Ur dos Caldeus", referencia: "Gênesis 11:31", icone: "book-open" },
      { id: 'on27', dificuldade: 'dificil', dicas: ["Fui o ribeiro onde Jacó lutou com o anjo.", "Ficava perto do Rio Jordão e marcava a fronteira de Moabe.", "Também conhecido pelo nome de Jaboque."], resposta: "Ribeiro de Jaboque", referencia: "Gênesis 32:22", icone: "book-open" },
      { id: 'on28', dificuldade: 'dificil', dicas: ["Fui a cidade de onde veio o profeta Jonas.", "Ficava na tribo de Zebulom.", "Também conhecida como Gate-Hefer."], resposta: "Gate-Hefer", referencia: "2 Reis 14:25", icone: "book-open" },
      { id: 'on29', dificuldade: 'dificil', dicas: ["Fui a ilha onde o apóstolo Paulo naufragou a caminho de Roma.", "Seus habitantes nos acolheram com fogueiras.", "Paulo foi picado por uma víbora na minha praia sem sofrer dano."], resposta: "Malta", referencia: "Atos 28:1", icone: "book-open" },
      { id: 'on30', dificuldade: 'dificil', dicas: ["Fui a colina em Atenas onde Paulo discursou aos filósofos gregos.", "Fui o tribunal supremo da cidade.", "Falei sobre o 'Deus Desconhecido' nas minhas dependências."], resposta: "Areópago", referencia: "Atos 17:19-22", icone: "book-open" }
    ],

    // ==========================================
    // JOGO 10: FAMÍLIAS DA BÍBLIA (30 cartas reais)
    // ==========================================
    'familias-da-biblia': [
      // FÁCIL
      { id: 'fa1', dificuldade: 'facil', palavra: "Quem foi a mãe do filho prometido de Abraão, Isaque, que riu da promessa na velhice?", dicas: ["Sara", "Hagar", "Rebeca", "Raquel"], resposta: "Sara", referencia: "Gênesis 18:12", icone: "message-square" },
      { id: 'fa2', dificuldade: 'facil', palavra: "Quem foi o irmão de Abel que o matou por inveja das ofertas?", dicas: ["Caim", "Sete", "Enoque", "Lameque"], resposta: "Caim", referencia: "Gênesis 4:8", icone: "message-square" },
      { id: 'fa3', dificuldade: 'facil', palavra: "Quem foi a esposa de Jacó que ele trabalhou 14 anos para conquistar?", dicas: ["Lia", "Bila", "Zilpa", "Raquel"], resposta: "Raquel", referencia: "Gênesis 29", icone: "message-square" },
      { id: 'fa4', dificuldade: 'facil', palavra: "Quais eram os nomes dos três filhos de Noé que repovoaram a terra?", dicas: ["Caim, Abel e Sete", "Sem, Cam e Jafé", "Esaú, Jacó e José", "Abraão, Naor e Harã"], resposta: "Sem, Cam e Jafé", referencia: "Gênesis 6:10", icone: "message-square" },
      { id: 'fa5', dificuldade: 'facil', palavra: "Quem foi o filho favorito de Jacó que ganhou a túnica colorida?", dicas: ["Rúben", "Judá", "José", "Benjamin"], resposta: "José", referencia: "Gênesis 37:3", icone: "message-square" },
      { id: 'fa6', dificuldade: 'facil', palavra: "Quem foi o primeiro casal humano criado por Deus no Éden?", dicas: ["Abraão e Sara", "Adão e Eva", "Isaque e Rebeca", "Jacó e Lia"], resposta: "Adão e Eva", referencia: "Gênesis 2", icone: "message-square" },
      { id: 'fa7', dificuldade: 'facil', palavra: "Quem foi a mãe terrena de Jesus Cristo?", dicas: ["Maria Madalena", "Isabel", "Marta", "Maria"], resposta: "Maria", referencia: "Lucas 1", icone: "message-square" },
      { id: 'fa8', dificuldade: 'facil', palavra: "Quem foi o irmão mais velho de Moisés que serviu como sumo sacerdote?", dicas: ["Arão", "Hur", "Calebe", "Miriã"], resposta: "Arão", referencia: "Êxodo 4", icone: "message-square" },
      { id: 'fa9', dificuldade: 'facil', palavra: "Quem foi o filho de Abraão nascido de Hagar, a serva?", dicas: ["Isaque", "Ismael", "Esaú", "Jacó"], resposta: "Ismael", referencia: "Gênesis 16", icone: "message-square" },
      { id: 'fa10', dificuldade: 'facil', palavra: "Quem foi o pai do rei Davi, morador de Belém de Judá?", dicas: ["Saul", "Jessé", "Samuel", "Salomão"], resposta: "Jessé", referencia: "1 Samuel 16", icone: "message-square" },
      // MÉDIO
      { id: 'fa11', dificuldade: 'medio', palavra: "Quem foi a esposa de Isaque e mãe dos gêmeos Esaú e Jacó?", dicas: ["Rebeca", "Sara", "Raquel", "Lia"], resposta: "Rebeca", referencia: "Gênesis 25:20", icone: "message-square" },
      { id: 'fa12', dificuldade: 'medio', palavra: "Quem foi a sogra de Rute, com quem ela retornou a Belém de Moabe?", dicas: ["Orfa", "Noemi", "Sara", "Débora"], resposta: "Noemi", referencia: "Rute 1:16", icone: "message-square" },
      { id: 'fa13', dificuldade: 'medio', palavra: "Quem foram os pais de João Batista na sua velhice?", dicas: ["José e Maria", "Elcana e Ana", "Zacarias e Isabel", "Abraão e Sara"], resposta: "Zacarias e Isabel", referencia: "Lucas 1:57", icone: "message-square" },
      { id: 'fa14', dificuldade: 'medio', palavra: "Quem foi o primo e protetor da rainha Ester na Pérsia?", dicas: ["Haman", "Mardoqueu", "Assuero", "Ciro"], resposta: "Mardoqueu", referencia: "Ester 2:7", icone: "message-square" },
      { id: 'fa15', dificuldade: 'medio', palavra: "Quem era a irmã de Moisés e Arão que liderou as lideranças femininas?", dicas: ["Miriã", "Zípora", "Joquebede", "Coibi"], resposta: "Miriã", referencia: "Êxodo 15:20", icone: "message-square" },
      { id: 'fa16', dificuldade: 'medio', palavra: "Quem foi a sogra de Moisés, pai de sua esposa Zípora?", dicas: ["Hur", "Jetro", "Balaão", "Finéias"], resposta: "Jetro", referencia: "Êxodo 18", icone: "message-square" },
      { id: 'fa17', dificuldade: 'medio', palavra: "Quem foi o filho primogênito de Jacó que perdeu seus direitos por pecado?", dicas: ["Judá", "José", "Rúben", "Benjamin"], resposta: "Rúben", referencia: "Gênesis 49:3", icone: "message-square" },
      { id: 'fa18', dificuldade: 'medio', palavra: "Quem foi a primeira esposa de Jacó, irmã mais velha de Raquel?", dicas: ["Bila", "Zilpa", "Lia", "Rebeca"], resposta: "Lia", referencia: "Gênesis 29", icone: "message-square" },
      { id: 'fa19', dificuldade: 'medio', palavra: "Quem foi o avô de Davi, filho de Rute e Boaz?", dicas: ["Obede", "Jessé", "Salomão", "Isaque"], resposta: "Obede", referencia: "Rute 4:21-22", icone: "message-square" },
      { id: 'fa20', dificuldade: 'medio', palavra: "Quem foi o filho gêmeo de Jacó que vendeu sua primogenitura?", dicas: ["Esaú", "José", "Benjamin", "Rúben"], resposta: "Esaú", referencia: "Gênesis 25:34", icone: "message-square" },
      // DIFÍCIL
      { id: 'fa21', dificuldade: 'dificil', palavra: "Quem era a mãe de Moisés, que o escondeu num cesto de junco?", dicas: ["Miriã", "Joquebede", "Zípora", "Elisama"], resposta: "Joquebede", referencia: "Êxodo 6:20", icone: "message-square" },
      { id: 'fa22', dificuldade: 'dificil', palavra: "Quem foi a mãe do rei Salomão, que intercedeu por sua coroação?", dicas: ["Bate-Seba", "Abigail", "Mical", "Maaca"], resposta: "Bate-Seba", referencia: "1 Reis 1", icone: "message-square" },
      { id: 'fa23', dificuldade: 'dificil', palavra: "Quem foi o sogro de Jacó que o enganou substituindo as noivas?", dicas: ["Abraão", "Labão", "Isaque", "Lot"], resposta: "Labão", referencia: "Gênesis 29:25", icone: "message-square" },
      { id: 'fa24', dificuldade: 'dificil', palavra: "Quem era a avó materna e a mãe de Timóteo descritas por Paulo?", dicas: ["Lois e Eunice", "Ana e Penina", "Isabel e Maria", "Marta e Maria"], resposta: "Lois e Eunice", referencia: "2 Timóteo 1:5", icone: "message-square" },
      { id: 'fa25', dificuldade: 'dificil', palavra: "Quem foi o pai de Samuel e marido de Ana e Penina?", dicas: ["Elcana", "Eli", "Zacarias", "Jessé"], resposta: "Elcana", referencia: "1 Samuel 1", icone: "message-square" },
      { id: 'fa26', dificuldade: 'dificil', palavra: "Quem foi a esposa de Moisés, natural de Midiã?", dicas: ["Zípora", "Miriã", "Joquebede", "Coibi"], resposta: "Zípora", referencia: "Êxodo 2:21", icone: "message-square" },
      { id: 'fa27', dificuldade: 'dificil', palavra: "Quem foram os dois filhos de Aarão consumidos por trazer fogo estranho?", dicas: ["Hofni e Finéias", "Nadabe e Abiú", "Simeão e Levi", "Esaú e Jacó"], resposta: "Nadabe e Abiú", referencia: "Levítico 10:1-2", icone: "message-square" },
      { id: 'fa28', dificuldade: 'dificil', palavra: "Quem foi o avô de Matusalém e pai de Enoque?", dicas: ["Jarede", "Sete", "Enos", "Lameque"], resposta: "Jarede", referencia: "Gênesis 5:18", icone: "message-square" },
      { id: 'fa29', dificuldade: 'dificil', palavra: "Quem foi o genro do rei Davi que liderou conspiração contra o próprio pai?", dicas: ["Salomão", "Absalão", "Adonias", "Amnon"], resposta: "Absalão", referencia: "2 Samuel 15", icone: "message-square" },
      { id: 'fa30', dificuldade: 'dificil', palavra: "Quem foi a esposa de Ló que virou estátua de sal na fuga?", dicas: ["Sua esposa", "Sara", "Ester", "Noemi"], resposta: "Sua esposa", referencia: "Gênesis 19:26", icone: "message-square" }
    ],

    // ==========================================
    // JOGO 11: FAZ SENTIDO? (30 cartas reais)
    // ==========================================
    'faz-sentido': [
      // FÁCIL
      { id: 'fs1', dificuldade: 'facil', palavra: "A Arca de Noé salvando casais de animais do dilúvio.", icone: "ship" },
      { id: 'fs2', dificuldade: 'facil', palavra: "Davi derrotando o gigante Golias com uma funda.", icone: "crown" },
      { id: 'fs3', dificuldade: 'facil', palavra: "Moisés abrindo as águas do Mar Vermelho com seu cajado.", icone: "scroll" },
      { id: 'fs4', dificuldade: 'facil', palavra: "Sansão perdendo sua força após ter seus cabelos cortados.", icone: "zap" },
      { id: 'fs5', dificuldade: 'facil', palavra: "O nascimento de Jesus em uma manjedoura simples em Belém.", icone: "crown" },
      { id: 'fs6', dificuldade: 'facil', palavra: "Daniel saindo vivo da cova cheia de leões famintos.", icone: "zap" },
      { id: 'fs7', dificuldade: 'facil', palavra: "Adão e Eva comendo o fruto proibido no Jardim do Éden.", icone: "help-circle" },
      { id: 'fs8', dificuldade: 'facil', palavra: "A pomba trazendo a folha de oliveira após o dilúvio acabar.", icone: "ship" },
      { id: 'fs9', dificuldade: 'facil', palavra: "A cruz de madeira se tornando o símbolo mundial da fé cristã.", icone: "zap" },
      { id: 'fs10', dificuldade: 'facil', palavra: "A multiplicação de cinco pães e dois peixes para cinco mil.", icone: "help-circle" },
      // MÉDIO
      { id: 'fs11', dificuldade: 'medio', palavra: "Zaqueu subindo na árvore figueira brava para ver Jesus passar.", icone: "help-circle" },
      { id: 'fs12', GuideName: "Jonas tentando fugir de barco para Társis e sendo engolido.", icone: "ship" },
      { id: 'fs13', dificuldade: 'medio', palavra: "O maná caindo do céu todas as manhãs para alimentar o povo hebreu.", icone: "scroll" },
      { id: 'fs14', dificuldade: 'medio', palavra: "Muralhas de Jericó ruindo após o povo rodear soprando trombetas.", icone: "crown" },
      { id: 'fs15', dificuldade: 'medio', palavra: "Moisés tirando as sandálias diante da sarça ardente no deserto.", icone: "scroll" },
      { id: 'fs16', dificuldade: 'medio', palavra: "Zaqueu devolvendo quatro vezes o valor cobrado injustamente.", icone: "help-circle" },
      { id: 'fs17', dificuldade: 'medio', palavra: "Naamã curando a lepra após mergulhar sete vezes no Jordão.", icone: "zap" },
      { id: 'fs18', dificuldade: 'medio', palavra: "Pedro caminhando sobre as águas do mar e afundando ao temer.", icone: "ship" },
      { id: 'fs19', dificuldade: 'medio', palavra: "A rainha Ester arriscando a vida ao entrar sem ser chamada pelo rei.", icone: "crown" },
      { id: 'fs20', dificuldade: 'medio', palavra: "Os 300 homens de Gideão assustando milhares com jarros e tochas.", icone: "zap" },
      // DIFÍCIL
      { id: 'fs21', dificuldade: 'dificil', palavra: "O escriba Baruque registrando com tinta as profecias de Jeremias.", icone: "zap" },
      { id: 'fs22', dificuldade: 'dificil', palavra: "Uzá tocando na Arca da Aliança e caindo morto imediatamente.", icone: "help-circle" },
      { id: 'fs23', dificuldade: 'dificil', palavra: "O rei Ogue de Basã deitando-se em sua cama de ferro gigante.", icone: "zap" },
      { id: 'fs24', dificuldade: 'dificil', palavra: "Eliseu fazendo flutuar a cabeça de ferro de um machado na água.", icone: "zap" },
      { id: 'fs25', dificuldade: 'dificil', palavra: "A sombra do relógio solar retrocedendo dez graus a pedido do rei.", icone: "zap" },
      { id: 'fs26', dificuldade: 'dificil', palavra: "Enoque desaparecendo de repente da terra por ter andado com Deus.", icone: "scroll" },
      { id: 'fs27', dificuldade: 'dificil', palavra: "Os dedos da mão escrevendo palavras misteriosas na parede do palácio.", icone: "crown" },
      { id: 'fs28', dificuldade: 'dificil', palavra: "A jumenta de Balaão falando para alertar sobre o anjo com espada.", icone: "zap" },
      { id: 'fs29', dificuldade: 'dificil', palavra: "Uzá caindo morto por segurar a arca quando os bois tropeçaram.", icone: "help-circle" },
      { id: 'fs30', dificuldade: 'dificil', palavra: "Elcana consolando Ana dizendo que valia mais do que dez filhos.", icone: "scroll" }
    ],

    // ==========================================
    // JOGO 12: DESAFIO DOS VERSÍCULOS (30 cartas reais)
    // ==========================================
    'desafio-versiculos': [
      // FÁCIL
      { id: 'dv1', dificuldade: 'facil', palavra: "Complete: 'No princípio criou Deus os ___ e a terra.'", dicas: ["homens", "céus", "animais", "mares"], resposta: "céus", referencia: "Gênesis 1:1", icone: "list" },
      { id: 'dv2', dificuldade: 'facil', palavra: "Complete: 'O Senhor é o meu pastor, nada me ___.'", dicas: ["faltará", "assustará", "sobrará", "cansará"], resposta: "faltará", referencia: "Salmo 23:1", icone: "list" },
      { id: 'dv3', dificuldade: 'facil', palavra: "Complete: 'Tudo posso naquele que me ___.'", dicas: ["ensina", "ouve", "fortalece", "salva"], resposta: "fortalece", referencia: "Filipenses 4:13", icone: "list" },
      { id: 'dv4', dificuldade: 'facil', palavra: "Complete: 'Ensina a criança no ___ em que deve andar.'", dicas: ["caminho", "templo", "livro", "passo"], resposta: "caminho", referencia: "Provérbios 22:6", icone: "list" },
      { id: 'dv5', dificuldade: 'facil', palavra: "Complete: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho ___.'", dicas: ["amado", "unigênito", "primogênito", "escolhido"], resposta: "unigênito", referencia: "João 3:16", icone: "list" },
      { id: 'dv6', dificuldade: 'facil', palavra: "Complete: 'Pai nosso, que estás nos ___, santificado seja o teu nome.'", dicas: ["templos", "céus", "altares", "corações"], resposta: "céus", referencia: "Mateus 6:9", icone: "list" },
      { id: 'dv7', dificuldade: 'facil', palavra: "Complete: 'Vós sois o ___ da terra; e se o ___ for insípido, com que se há de salgar?'", dicas: ["sal", "açúcar", "adubo", "pão"], resposta: "sal", referencia: "Mateus 5:13", icone: "list" },
      { id: 'dv8', dificuldade: 'facil', palavra: "Complete: 'Guarda o teu ___, porque dele procedem as fontes da vida.'", dicas: ["caminho", "coração", "olhar", "templo"], resposta: "coração", referencia: "Provérbios 4:23", icone: "list" },
      { id: 'dv9', dificuldade: 'facil', palavra: "Complete: 'Acheguemo-nos, pois, com confiança ao trono da ___.'", dicas: ["justiça", "glória", "graça", "lei"], resposta: "graça", referencia: "Hebreus 4:16", icone: "list" },
      { id: 'dv10', dificuldade: 'facil', palavra: "Complete: 'O choro pode durar uma noite, mas a ___ vem pela manhã.'", dicas: ["paz", "vitória", "alegria", "esperança"], resposta: "alegria", referencia: "Salmo 30:5", icone: "list" },
      // MÉDIO
      { id: 'dv11', dificuldade: 'medio', palavra: "Complete: 'E conhecereis a ___, e a ___ vos libertará.'", dicas: ["vida", "lei", "verdade", "graça"], resposta: "verdade", referencia: "João 8:32", icone: "list" },
      { id: 'dv12', dificuldade: 'medio', palavra: "Complete: 'Lâmpada para os meus pés é a tua palavra, e ___ para o meu caminho.'", dicas: ["guia", "luz", "escudo", "sol"], resposta: "luz", referencia: "Salmo 119:105", icone: "list" },
      { id: 'dv13', dificuldade: 'medio', palavra: "Complete: 'Escondi a tua palavra no meu ___, para não pecar contra ti.'", dicas: ["peito", "pensamento", "coração", "diário"], resposta: "coração", referencia: "Salmo 119:11", icone: "list" },
      { id: 'dv14', dificuldade: 'medio', palavra: "Complete: 'Eu sou o caminho, e a verdade, e a ___; ninguém vem ao Pai senão por mim.'", dicas: ["luz", "vida", "porta", "paz"], resposta: "vida", referencia: "João 14:6", icone: "list" },
      { id: 'dv15', dificuldade: 'medio', palavra: "Complete: 'Mil cairão ao teu lado, e dez mil à tua direita, mas não ___ a ti.'", dicas: ["atingirá", "chegará", "baterá", "matará"], resposta: "chegará", referencia: "Salmo 91:7", icone: "list" },
      { id: 'dv16', dificuldade: 'medio', palavra: "Complete: 'O Senhor é a minha luz e a minha ___; a quem temerei?'", dicas: ["força", "salvação", "fortaleza", "rocha"], resposta: "salvação", referencia: "Salmo 27:1", icone: "list" },
      { id: 'dv17', dificuldade: 'medio', palavra: "Complete: 'A resposta ___ desvia o furor, mas a palavra dura suscita a ira.'", dicas: ["branda", "calma", "sábia", "humilde"], resposta: "branda", referencia: "Provérbios 15:1", icone: "list" },
      { id: 'dv18', dificuldade: 'medio', palavra: "Complete: 'Clama a mim, e responder-te-ei, e anunciar-te-ei coisas ___ e firmes.'", dicas: ["grandes", "belas", "novas", "ocultas"], resposta: "grandes", referencia: "Jeremias 33:3", icone: "list" },
      { id: 'dv19', dificuldade: 'medio', palavra: "Complete: 'Porque o salário do pecado é a ___, mas o dom gratuito de Deus é a vida eterna.'", dicas: ["dor", "morte", "condenação", "tristeza"], resposta: "morte", referencia: "Romanos 6:23", icone: "list" },
      { id: 'dv20', dificuldade: 'medio', palavra: "Complete: 'Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como ___.'", dicas: ["águias", "anjos", "pombas", "falcões"], resposta: "águias", referencia: "Isaías 40:31", icone: "list" },
      // DIFÍCIL
      { id: 'dv21', dificuldade: 'dificil', palavra: "Complete: 'Todas as coisas ___ para o bem daqueles que amam a Deus.'", dicas: ["funcionam", "cooperam", "caminham", "ajudam"], resposta: "cooperam", referencia: "Romanos 8:28", icone: "list" },
      { id: 'dv22', dificuldade: 'dificil', palavra: "Complete: 'Se o meu povo... se humilhar, e orar, e buscar a minha face... eu ouvirei dos céus, perdoarei os seus pecados, e sararei a sua ___.'", dicas: ["vida", "terra", "família", "alma"], resposta: "terra", referencia: "2 Crônicas 7:14", icone: "list" },
      { id: 'dv23', dificuldade: 'dificil', palavra: "Complete: 'Ora, a fé é a ___ das coisas que se esperam, e a convicção das que se não veem.'", dicas: ["certeza", "prova", "esperança", "razão"], resposta: "certeza", referencia: "Hebreus 11:1", icone: "list" },
      { id: 'dv24', dificuldade: 'dificil', palavra: "Complete: 'E a paz de Deus, que excede todo o ___, guardará os vossos corações.'", dicas: ["entendimento", "saber", "pensar", "sentido"], resposta: "entendimento", referencia: "Filipenses 4:7", icone: "list" },
      { id: 'dv25', dificuldade: 'dificil', palavra: "Complete: 'Porque a palavra da cruz é loucura para os que perecem; mas para nós, que somos salvos, é o ___ de Deus.'", dicas: ["poder", "amor", "saber", "plano"], resposta: "poder", referencia: "1 Coríntios 1:18", icone: "list" },
      { id: 'dv26', dificuldade: 'dificil', palavra: "Complete: 'Porque a palavra de Deus é viva e ___ e mais penetrante do que espada alguma.'", dicas: ["forte", "eficaz", "doce", "verdadeira"], resposta: "eficaz", referencia: "Hebreus 4:12", icone: "list" },
      { id: 'dv27', dificuldade: 'dificil', palavra: "Complete: 'Não andeis, pois, inquietos, dizendo: Que comeremos, ou que beberemos, ou com que nos ___?'", dicas: ["vestiremos", "alegraremos", "sustentaremos", "cobriremos"], resposta: "vestiremos", referencia: "Mateus 6:31", icone: "list" },
      { id: 'dv28', dificuldade: 'dificil', palavra: "Complete: 'O coração alegre é bom ___ , mas o espírito abatido seca os ossos.'", dicas: ["remédio", "alimento", "guia", "tesouro"], resposta: "remédio", referencia: "Provérbios 17:22", icone: "list" },
      { id: 'dv29', dificuldade: 'dificil', palavra: "Complete: 'Buscai primeiro o reino de Deus, e a sua ___, e todas estas coisas vos serão acrescentadas.'", dicas: ["vontade", "justiça", "lei", "verdade"], resposta: "justiça", referencia: "Mateus 6:33", icone: "list" },
      { id: 'dv30', dificuldade: 'dificil', palavra: "Complete: 'Porque pela ___ sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.'", dicas: ["lei", "graça", "obra", "promessa"], resposta: "graça", referencia: "Efésios 2:8", icone: "list" }
    ]
  }
};
