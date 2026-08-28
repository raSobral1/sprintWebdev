# Jovi - Modo SLID

Projeto acadêmico da Sprint 3 de Web Development. O projeto anterior foi migrado de HTML, CSS e JavaScript para Next.js com React e componentes funcionais.

## Funcionalidades

- Login com validação simples;
- Central de conteúdos com busca e destaque para itens recentes;
- Criação de pastas e reorganização manual dos conteúdos;
- Adição, edição e exclusão de conteúdos;
- Dados, histórico e lixeira salvos no `localStorage`;
- Estatísticas por categoria e pelos últimos 7 dias;
- Notificações de vencimento e controle público ou privado;
- Exportação em JSON e comparação de dois itens lado a lado;
- Recuperação de itens excluídos;
- Slideshow com as imagens do protótipo;
- Sorteio de imagem com `Math.random()` e `Math.floor()`;
- Percentual de conteúdos públicos calculado com `Math.round()`;
- Simulação do Modo SLID;
- Componentes pai e filho usando propriedades.

## Tecnologias utilizadas

- Next.js 16;
- React 19;
- JavaScript e JSX;
- CSS;
- ESLint;
- React Compiler;
- LocalStorage.

## Configuração escolhida no Create Next App

- TypeScript: No;
- Linter: ESLint;
- React Compiler: Yes;
- Tailwind CSS: No;
- Pasta `src`: No;
- App Router: Yes;
- Personalizar alias: No;
- Incluir `AGENTS.md`: No.

## Como instalar

É necessário ter o Node.js 20.9 ou superior instalado.

Entre na pasta do projeto e instale as dependências:

cd sprintWebdev
npm install

## Como executar

npm run dev

## Login para teste

- Nome: qualquer nome não vazio. Exemplo: `Rafael`;
- Senha: qualquer senha com pelo menos quatro caracteres. Exemplo: `1234`.

## Componentes principais

- `Cabecalho.jsx`: cabeçalho da página;
- `Login.jsx`: formulário de login;
- `Sistema.jsx`: componente pai com o localStorage, notificações, histórico e lixeira;
- `CentralConteudo.jsx`: componente filho com busca, pastas e ações;
- `Slideshow.jsx`: imagens e operações com `Math`;
- `Rodape.jsx`: rodapé da página.

A estrutura foi mantida simples para demonstrar claramente a passagem de dados do componente pai para os componentes filhos.

## IA no projeto

- A Ia foi utilizada para fazer as estilizaçoes CSS, dar sugestoes para o esquelo HTML e organizar o README. Auxiliou, deu exemplos, explicou parte a parte de como os componentes poderiam ser organizados para a página. Auxiliou e corrigiu erros voltados a parte do sistema, como exportar JSON, Histórico e estatísticas do usuario, salvamento de dados, manipulacoes de listas e uso de hooks, onde foi mais complexo. Revisou o codigo e retirou partes desnecessarias que ocupavam mais memoria, deixando mais limpo. A Ia foi um auxiliador e professor para esse projeto, explicando cada parte que achavamos confuso e principamente nós gerando aprendizado

## Integrantes

- Erick Ripari Gomes - RM 569441
- Fabricio Denig de Avila - RM 570980
- Guilherme Mazzini Nunes Canno - RM 573183
- Luan Schinello Garbin - RM 571276
- Rafael Taboada Sobral - RM 569527
