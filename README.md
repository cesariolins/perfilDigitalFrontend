                        PERFIL DIGITAL - FRONTEND

Plataforma de Análise de Bem-Estar Digital para Prefeituras
Frontend da aplicação web desenvolvida para a Prefeitura do Recife

SOBRE O PROJETO

O Perfil Digital Frontend é a interface web da plataforma de análise de 
bem-estar digital, desenvolvida para capacitar prefeituras e instituições 
públicas na compreensão do impacto da dependência digital em suas comunidades.

Este repositório contém a aplicação React/Vite que oferece:
  - Questionário interativo para cidadãos responderem sobre seus hábitos digitais
  - Dashboard administrativo para gestores visualizarem dados agregados e análises
  - Interface responsiva e intuitiva para múltiplos dispositivos

Pergunta Norteadora: 
"Como podemos fornecer soluções digitais para que governos e instituições 
atuem de forma preventiva, educativa e/ou corretiva?"

TECNOLOGIAS UTILIZADAS

  - React 18               - Biblioteca JavaScript para interfaces de usuário
  - Vite                   - Build tool moderna e rápida
  - Axios                  - Cliente HTTP para comunicação com a API
  - React Router DOM       - Roteamento da aplicação
  - CSS3                   - Estilização moderna e responsiva
  - JWT                    - Autenticação e autorização

ESTRUTURA DE PASTAS

perfildigitalFrontend/
  |
  +-- public/
  |
  +-- src/
  |     |
  |     +-- assets/              # Imagens, logos e recursos estáticos
  |     |
  |     +-- components/          # Componentes React reutilizáveis
  |     |
  |     +-- pages/               # Páginas principais da aplicação
  |     |     |
  |     |     +-- Login.jsx
  |     |     +-- Dashboard.jsx
  |     |     +-- Questionario.jsx
  |     |     +-- Resultado.jsx
  |     |
  |     +-- services/            # Serviços de comunicação com a API
  |     |     |
  |     |     +-- api.js
  |     |     +-- authService.js
  |     |     +-- dashboardService.js
  |     |     +-- questionarioService.js
  |     |
  |     +-- App.jsx
  |     +-- main.jsx
  |
  +-- .env.example               # Exemplo de variáveis de ambiente
  +-- package.json
  +-- vite.config.js

CONFIGURAÇÃO E INSTALAÇÃO

PRÉ-REQUISITOS
--------------
  - Node.js v18 ou superior
  - npm ou yarn

INSTALAÇÃO
----------

1. Clone o repositório:

   git clone https://github.com/seu-usuario/perfildigitalFrontend.git
   cd perfildigitalFrontend

2. Instale as dependências:

   npm install

3. Configure as variáveis de ambiente:

   Crie um arquivo .env na raiz do projeto com base no .env.example:

   VITE_API_URL=https://perfildigitalbackend.onrender.com/api

4. Execute o projeto em ambiente de desenvolvimento:

   npm run dev

   A aplicação estará disponível em http://localhost:5173

5. Build para produção:

   npm run build

DEPLOY

A aplicação está hospedada no Render e pode ser acessada em:

  URL de Produção: https://perfildigitalfrontend.onrender.com

CONFIGURAÇÃO DE DEPLOY NO RENDER
---------------------------------
  - Build Command: npm install && npm run build
  - Publish Directory: dist
  - Environment Variables:
      VITE_API_URL: URL do backend

FUNCIONALIDADES

PARA CIDADÃOS (QUESTIONÁRIO)
----------------------------
  - Validação de CPF para evitar respostas duplicadas
  - Questionário dividido em seções:
      * Perfil Demográfico (idade, gênero, região, escolaridade, etc.)
      * 20 Perguntas sobre hábitos digitais e bem-estar mental
  - Geração de resultado e recomendações personalizadas
  - Interface intuitiva e responsiva

PARA GESTORES (DASHBOARD)
--------------------------
  - Login seguro com CPF e senha
  - Visualização de estatísticas agregadas e anonimizadas
  - Gráficos interativos de dados demográficos e pontuações
  - Relatórios detalhados para análise
  - Exportação de dados para Excel
  - Análise de dados por IA (em desenvolvimento)

COMUNICAÇÃO COM O BACKEND

A aplicação se comunica com o backend através dos serviços em src/services/:

  - api.js                - Configuração base do Axios e interceptors
  - authService.js        - Login, verificação de token e logout
  - dashboardService.js   - Estatísticas, gráficos, relatórios e exportação
  - questionarioService.js - Validação de CPF, envio de respostas e resultado

Base URL da API: Definida em VITE_API_URL

INTERFACE

A interface foi projetada para ser:
  - Intuitiva e fácil de navegar
  - Responsiva para desktop, tablet e mobile
  - Acessível seguindo boas práticas de UX/UI
  - Com feedback visual claro para o usuário

LICENÇA

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
