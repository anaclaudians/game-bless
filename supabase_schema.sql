-- ====================================================
-- Script SQL para Configuração do Banco de Dados no Supabase
-- ====================================================

-- 1. Remoção de Tabelas Existentes
DROP TABLE IF EXISTS cartas;
DROP TABLE IF EXISTS jogos;

-- 2. Criação da Tabela 'jogos'
CREATE TABLE jogos (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    tipo TEXT NOT NULL CHECK (tipo IN ('dicas', 'acao', 'quiz')),
    cor TEXT NOT NULL,  -- Cores hexadecimais (ex: '#E0664B')
    capa TEXT,          -- Caminho da imagem de capa (ex: '/capa-quem-sou-eu.png')
    regras TEXT,        -- Descrição sucinta das regras do jogo
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Criação da Tabela 'cartas'
CREATE TABLE cartas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    jogo_id TEXT NOT NULL REFERENCES jogos(id) ON DELETE CASCADE,
    dificuldade TEXT NOT NULL DEFAULT 'facil' CHECK (dificuldade IN ('facil', 'medio', 'dificil')),
    palavra TEXT,     -- Usado como Palavra Principal, Pergunta ou Conceito
    proibidas JSONB,  -- Array de strings para 'Palavra Proibida' e 'Bíblimímicas'
    dicas JSONB,      -- Array de dicas progressivas OU alternativas no Quiz
    resposta TEXT,    -- Resposta correta
    referencia TEXT,  -- Referência bíblica
    icone TEXT,       -- Identificador de ícone (ex: 'crown', 'ship', 'scroll', 'book', 'help', 'message', 'zap')
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Habilitar RLS (Row Level Security)
ALTER TABLE jogos ENABLE ROW LEVEL SECURITY;
ALTER TABLE cartas ENABLE ROW LEVEL SECURITY;

-- 5. Criar Políticas de Leitura Pública
CREATE POLICY "Permitir leitura pública de jogos" 
ON jogos FOR SELECT 
TO anon 
USING (true);

CREATE POLICY "Permitir leitura pública de cartas" 
ON cartas FOR SELECT 
TO anon 
USING (true);

-- 6. Inserção do Catálogo de Jogos (Com Regras e Capas Exclusivas)
INSERT INTO jogos (id, nome, tipo, cor, capa, regras) VALUES
('quem-sou-eu', 'Quem Sou Eu?', 'dicas', '#E0664B', '/capa-quem-sou-eu.png', 'Leia as dicas uma a uma. O jogador deve adivinhar o personagem bíblico descrito. Quanto menos dicas usar, melhor!'),
('palavra-proibida', 'Palavra Bíblica Proibida', 'acao', '#C25134', '/capa-palavra-proibida.png', 'Tente fazer sua equipe adivinhar a palavra principal da carta. ATENÇÃO: É proibido falar qualquer uma das outras 5 palavras listadas na carta!'),
('quem-disse', 'Quem Disse?', 'quiz', '#9E4733', '/capa-quem-disse.png', 'Leia o versículo bíblico apresentado na tela e selecione o autor correto da frase entre as quatro opções de resposta.'),
('qual-versiculo-sou', 'Qual Versículo Sou?', 'dicas', '#D17A22', '/capa-qual-versiculo-sou.png', 'Adivinhe qual é o versículo ou Salmo descrito através de 3 pistas progressivas sobre o seu significado e conteúdo.'),
('o-que-sou', 'O Que Sou?', 'dicas', '#9A5B43', '/capa-o-que-sou.png', 'Adivinhe qual objeto, animal ou local sagrado da Bíblia está sendo descrito com base em 3 pistas inteligentes.'),
('quem-sabe-responde', 'Quem Sabe, Responde!', 'quiz', '#6B4F4F', '/capa-quem-sabe-responde.png', 'Um teste clássico de conhecimentos bíblicos gerais de múltipla escolha. Escolha a resposta certa entre as 4 alternativas.'),
('biblimimicas', 'Bíblimímicas', 'acao', '#B55A30', '/capa-biblimimicas.png', 'Um jogador deve encenar em mímica a ação ou passagem bíblica exibida na tela. O restante do grupo tenta adivinhar. O tempo está correndo!'),
('quem-sou-eu-extreme', 'Quem Sou Eu? (Extreme)', 'dicas', '#842E1B', '/capa-quem-sou-eu-extreme.png', 'Para estudiosos da Bíblia! Adivinhe o personagem com base em 3 pistas sobre detalhes obscuros ou pouco conhecidos das Escrituras.'),
('onde-estou', 'Onde Estou?', 'dicas', '#9E4773', '/capa-onde-estou.png', 'Descubra qual cidade, monte, rio ou localidade geográfica da Bíblia está sendo descrita pelas 3 pistas progressivas.'),
('familias-da-biblia', 'Famílias da Bíblia', 'quiz', '#7A8B47', '/capa-familias-da-biblia.png', 'Teste seus conhecimentos sobre as linhagens, casamentos, parentescos e histórias das famílias que marcaram as Escrituras.'),
('faz-sentido', 'Faz Sentido?', 'acao', '#D15E84', '/capa-faz-sentido.png', 'Debate e conexão! Jogue cartas de conceitos físicos e veja se eles têm relação lógica com a carta no centro da mesa. Votem e gerenciem as 3 vidas locais de cada um dos 4 participantes.'),
('desafio-versiculos', 'Desafio dos Versículos', 'quiz', '#39A087', '/capa-desafio-versiculos.png', 'Complete a palavra ausente ou adivinhe o versículo-chave correto apresentado na pergunta de múltipla escolha.');

-- 7. Inserção de Amostras de Cartas por Níveis (Exemplos representativos de semente)
-- Cartas para "Quem Sou Eu?"
INSERT INTO cartas (jogo_id, dificuldade, dicas, resposta, referencia, icone) VALUES
('quem-sou-eu', 'facil', '["Fui colocado numa arca para escapar do dilúvio.", "Deus enviou um arco-íris como promessa.", "Levei casais de animais de cada espécie."]', 'Noé', 'Gênesis 6-9', 'ship'),
('quem-sou-eu', 'facil', '["Derrotei o gigante Golias com uma funda.", "Fui o rei mais famoso de Israel.", "Escrevi muitos dos Salmos."]', 'Davi', '1 Samuel 17', 'crown'),
('quem-sou-eu', 'medio', '["Fui um cobrador de impostos muito baixo.", "Subi em uma árvore figueira brava para ver Jesus.", "Jesus almoçou na minha casa."]', 'Zaqueu', 'Lucas 19:1-10', 'help-circle'),
('quem-sou-eu', 'medio', '["Julgava o povo debaixo de uma palmeira.", "Fui a única juíza mulher de Israel.", "Fui à batalha com Baraque."]', 'Débora', 'Juízes 4-5', 'scroll'),
('quem-sou-eu', 'dificil', '["Fui o primeiro mártir da igreja cristã.", "Fui apedrejado enquanto via os céus abertos.", "Paulo presenciou a minha morte."]', 'Estêvão', 'Atos 7', 'zap'),
('quem-sou-eu', 'dificil', '["Fui o sumo sacerdote que criei o jovem Samuel.", "Meus filhos Hofni e Finéias pecaram contra Deus.", "Morri ao cair de costas da cadeira."]', 'Eli', '1 Samuel 1-4', 'zap');

-- Cartas para "Palavra Bíblica Proibida"
INSERT INTO cartas (jogo_id, dificuldade, palavra, proibidas, icone) VALUES
('palavra-proibida', 'facil', 'Moisés', '["Mar Vermelho", "Egito", "Pragas", "Cajado", "Mandamentos"]', 'scroll'),
('palavra-proibida', 'facil', 'Cruz', '["Jesus", "Morte", "Calvário", "Madeiro", "Salvação"]', 'zap'),
('palavra-proibida', 'medio', 'Maná', '["Deserto", "Comida", "Céu", "Povo", "Moisés"]', 'scroll'),
('palavra-proibida', 'medio', 'Torre de Babel', '["Línguas", "Céu", "Tijolo", "Confusão", "Construir"]', 'help-circle'),
('palavra-proibida', 'dificil', 'Gideão', '["Lã", "300", "Jarro", "Trombeta", "Midianitas"]', 'zap'),
('palavra-proibida', 'dificil', 'Estrela de Belém', '["Jesus", "Nascimento", "Magos", "Céu", "Oriente"]', 'crown');

-- Cartas para "Quem Disse?"
INSERT INTO cartas (jogo_id, dificuldade, palavra, dicas, resposta, referencia, icone) VALUES
('quem-disse', 'facil', 'Quem disse: "Eu e a minha casa serviremos ao Senhor"?', '["Moisés", "Josué", "Davi", "Samuel"]'::jsonb, 'Josué', 'Josué 24:15', 'message-square'),
('quem-disse', 'facil', 'Quem disse: "O Senhor é o meu pastor, nada me faltará"?', '["Salomão", "Davi", "Moisés", "Isaías"]'::jsonb, 'Davi', 'Salmo 23:1', 'message-square'),
('quem-disse', 'medio', 'Quem disse a Jesus: "Se tu estivesses aqui, meu irmão não teria morrido"?', '["Maria", "Marta", "Isabel", "Madalena"]'::jsonb, 'Marta', 'João 11:21', 'message-square'),
('quem-disse', 'medio', 'Quem disse: "Até aqui nos ajudou o Senhor"?', '["Saul", "Samuel", "Davi", "Josué"]'::jsonb, 'Samuel', '1 Samuel 7:12', 'message-square'),
('quem-disse', 'dificil', 'Quem disse a Davi: "Tu és este homem!" revelando seu pecado?', '["Samuel", "Natã", "Gad", "Elias"]'::jsonb, 'Natã', '2 Samuel 12:7', 'message-square'),
('quem-disse', 'dificil', 'Quem exclamou: "Ainda que ele me mate, nele esperarei"?', '["Jó", "Davi", "Abraão", "Jeremias"]'::jsonb, 'Jó', 'Jó 13:15', 'message-square');

-- Cartas para "Quem Sabe, Responde!"
INSERT INTO cartas (jogo_id, dificuldade, palavra, dicas, resposta, referencia, icone) VALUES
('quem-sabe-responde', 'facil', 'Quantos discípulos Jesus escolheu inicialmente?', '["7", "10", "12", "70"]'::jsonb, '12', 'Mateus 10:1', 'list'),
('quem-sabe-responde', 'facil', 'Qual o primeiro livro contido na Bíblia?', '["Êxodo", "Mateus", "Gênesis", "João"]'::jsonb, 'Gênesis', 'Gênesis 1:1', 'list'),
('quem-sabe-responde', 'medio', 'Quem foi o companheiro de Paulo que cantou com ele na prisão?', '["Pedro", "Silas", "Barnabé", "Timóteo"]'::jsonb, 'Silas', 'Atos 16:25', 'list'),
('quem-sabe-responde', 'medio', 'Qual destas mulheres foi uma juíza em Israel?', '["Débora", "Sara", "Rute", "Ester"]'::jsonb, 'Débora', 'Juízes 4:4', 'list'),
('quem-sabe-responde', 'dificil', 'Qual foi o homem mais velho citado na Bíblia, vivendo 969 anos?', '["Matusalém", "Noé", "Adão", "Enoque"]'::jsonb, 'Matusalém', 'Gênesis 5:27', 'list'),
('quem-sabe-responde', 'dificil', 'Quantos anos o povo hebreu peregrinou pelo deserto?', '["10", "40", "70", "100"]'::jsonb, '40', 'Josué 5:6', 'list');

-- Cartas para "Faz Sentido?"
INSERT INTO cartas (jogo_id, dificuldade, palavra, icone) VALUES
('faz-sentido', 'facil', 'A Arca de Noé salvando casais de animais.', 'ship'),
('faz-sentido', 'facil', 'Davi derrotando o gigante com uma pedra.', 'crown'),
('faz-sentido', 'medio', 'Moisés tirando as sandálias diante da sarça ardente.', 'scroll'),
('faz-sentido', 'medio', 'Zaqueu devolvendo quatro vezes o valor cobrado.', 'help-circle'),
('faz-sentido', 'dificil', 'O escriba Baruque registrando profecias de Jeremias.', 'zap'),
('faz-sentido', 'dificil', 'Uzá tocando na Arca da Aliança e caindo morto.', 'help-circle');
