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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Criação da Tabela 'cartas'
CREATE TABLE cartas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    jogo_id TEXT NOT NULL REFERENCES jogos(id) ON DELETE CASCADE,
    palavra TEXT,     -- Usado como Palavra Principal ou Pergunta no Quiz
    proibidas JSONB,  -- Array de strings para 'Palavra Proibida'
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

-- 6. Inserção de Dados (Catálogo Completo da Penkal Books com Capas Artísticas)
INSERT INTO jogos (id, nome, tipo, cor, capa) VALUES
('quem-sou-eu', 'Quem Sou Eu?', 'dicas', '#E0664B', '/capa-quem-sou-eu.png'),
('palavra-proibida', 'Palavra Bíblica Proibida', 'acao', '#C25134', '/capa-palavra-proibida.png'),
('quem-disse', 'Quem Disse?', 'quiz', '#9E4733', '/capa-quiz.png'),
('qual-versiculo-sou', 'Qual Versículo Sou?', 'dicas', '#D17A22', '/capa-quiz.png'), -- Compartilha ilustração de Quiz
('o-que-sou', 'O Que Sou?', 'dicas', '#9A5B43', '/capa-quem-sou-eu.png'),       -- Compartilha ilustração de Dicas
('quem-sabe-responde', 'Quem Sabe, Responde!', 'quiz', '#6B4F4F', '/capa-quiz.png'),
('biblimimicas', 'Bíblimímicas', 'acao', '#B55A30', '/capa-biblimimicas.png'),
('quem-sou-eu-extreme', 'Quem Sou Eu? (Extreme)', 'dicas', '#842E1B', '/capa-faz-sentido.png');

-- Cartas para "Quem Sou Eu?"
INSERT INTO cartas (jogo_id, dicas, resposta, referencia, icone) VALUES
('quem-sou-eu', '["Fui vendido pelos meus irmãos", "Interpretei os sonhos do Faraó", "Me tornei governador do Egito"]'::jsonb, 'José', 'Gênesis 37-50', 'scroll'),
('quem-sou-eu', '["Fui o primeiro rei de Israel", "Fui ungido por Samuel", "Perdi meu reinado por desobediência"]'::jsonb, 'Saul', '1 Samuel 9-31', 'crown');

-- Cartas para "Palavra Bíblica Proibida"
INSERT INTO cartas (jogo_id, palavra, proibidas, icone) VALUES
('palavra-proibida', 'Arca de Noé', '["Noé", "Chuva", "Dilúvio", "Animais", "Barco"]'::jsonb, 'ship'),
('palavra-proibida', 'Davi', '["Golias", "Rei", "Funda", "Harpa", "Ovelhas"]'::jsonb, 'crown');

-- Cartas para "Quem Disse?"
INSERT INTO cartas (jogo_id, palavra, dicas, resposta, referencia, icone) VALUES
('quem-disse', 'De quem é a famosa fala: "Eu e a minha casa serviremos ao Senhor"?', '["Moisés", "Josué", "Davi", "Samuel"]'::jsonb, 'Josué', 'Josué 24:15', 'message-square'),
('quem-disse', 'Quem disse: "Para onde fores irei, e onde tu pousares, ali pousarei; o teu povo é o meu povo"?', '["Rute", "Ester", "Maria", "Sara"]'::jsonb, 'Rute', 'Rute 1:16', 'message-square');

-- Cartas para "Qual Versículo Sou?"
INSERT INTO cartas (jogo_id, dicas, resposta, referencia, icone) VALUES
('qual-versiculo-sou', '["Falo sobre o amor sacrificial de Deus pelo mundo.", "Fico localizado no Evangelho de João, no capítulo 3.", "Declaro que todo aquele que crer no Filho não pereça, mas tenha a vida eterna."]'::jsonb, 'João 3:16', 'João 3:16', 'book-open'),
('qual-versiculo-sou', '["Falo sobre a proteção divina em meio ao perigo.", "Meu versículo mais famoso diz: ''Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti''.", "Sou o Salmo mais lido em momentos de tribulação."]'::jsonb, 'Salmo 91', 'Salmo 91', 'book-open');

-- Cartas para "O Que Sou?"
INSERT INTO cartas (jogo_id, dicas, resposta, referencia, icone) VALUES
('o-que-sou', '["Fui feita de madeira de acácia e revestida de ouro puro.", "Guardava as tábuas da Lei, um vaso com maná e a vara de Arão.", "Ficava no Santo dos Santos do Tabernáculo."]'::jsonb, 'Arca da Aliança', 'Êxodo 25', 'help-circle'),
('o-que-sou', '["Fui lançado por um jovem pastor de ovelhas.", "Atingi a testa de um gigante filisteu.", "Fui a arma usada por Davi contra Golias."]'::jsonb, 'Uma pedra (de funda)', '1 Samuel 17', 'help-circle');

-- Cartas para "Quem Sabe, Responde!"
INSERT INTO cartas (jogo_id, palavra, dicas, resposta, referencia, icone) VALUES
('quem-sabe-responde', 'Quantos discípulos Jesus escolheu inicialmente para segui-lo?', '["7", "10", "12", "70"]'::jsonb, '12', 'Mateus 10:1', 'list'),
('quem-sabe-responde', 'Qual destas mulheres foi uma juíza em Israel?', '["Débora", "Rute", "Sara", "Noemi"]'::jsonb, 'Débora', 'Juízes 4:4', 'list');

-- Cartas para "Bíblimímicas"
INSERT INTO cartas (jogo_id, palavra, proibidas, icone) VALUES
('biblimimicas', 'Caminhar sobre as águas (Mímica)', '["Jesus", "Pedro", "Mar", "Barco", "Afundar"]'::jsonb, 'smile'),
('biblimimicas', 'Derrubar as muralhas de Jericó (Mímica)', '["Buzina", "Trombeta", "Muro", "Grito", "Rodeador"]'::jsonb, 'smile');

-- Cartas para "Quem Sou Eu? (Extreme)"
INSERT INTO cartas (jogo_id, dicas, resposta, referencia, icone) VALUES
('quem-sou-eu-extreme', '["Fui o escriba que registrou as profecias de Jeremias.", "Meu nome significa ''Bendito''.", "Tive um rolo de pergaminho queimado pelo rei Joaquim."]'::jsonb, 'Baruque', 'Jeremias 36', 'zap'),
('quem-sou-eu-extreme', '["Fui a única mulher citada na genealogia de Jesus como mãe de Salomão.", "Fui esposa de Urias, o heteu, antes de me casar com Davi.", "Fui mãe do rei Salomão."]'::jsonb, 'Bate-Seba', '2 Samuel 11', 'zap');
