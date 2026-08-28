# Jovi - Modo SLID

Projeto acadêmico da Sprint 3 de Web Development. O protótipo feito anteriormente em HTML, CSS e JavaScript foi migrado para Next.js com componentes React.

## Funcionalidades

- Login com validação simples;
- Central de conteúdos com busca e destaque para os itens mais recentes, que ficam no início da lista;
- Criação de pastas e reorganização manual dos conteúdos;
- Adição, edição e remoção de conteúdos;
- Controle de conteúdo público ou privado;
- Notificações para conteúdos com data de vencimento;
- Histórico das alterações;
- Estatísticas por categoria e de conteúdos adicionados no dia;
- Exportação dos conteúdos em JSON;
- Comparação de dois conteúdos lado a lado;
- Lixeira com recuperação de conteúdo;
- Slideshow com imagens verticais do protótipo;
- Salvamento e carregamento pelo `localStorage`;
- Uso de `Math.random()`, `Math.floor()` e `Math.round()`.

## Tecnologias utilizadas

- Next.js 16;
- React 19;
- JavaScript e JSX;
- HTML e CSS;
- ESLint;
- React Compiler;
- LocalStorage.

## Como instalar

É necessário ter o Node.js 20.9 ou uma versão mais recente.

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Como executar

```bash
npm run dev
```

-cd sprintWebdev

-npm install


## Como executar

-npm run dev

## Login para teste

- Nome: qualquer nome que não esteja vazio. Exemplo: `Rafael`;
- Senha: qualquer senha com pelo menos quatro caracteres. Exemplo: `1234`.

## Como usar o localStorage

- Clique em **Salvar dados** para guardar conteúdos, pastas, histórico e lixeira no navegador;
- Clique em **Carregar dados** para recuperar o que foi salvo.

## Componentes

- `Cabecalho.jsx`: mostra o título da página;
- `Login.jsx`: contém o formulário de entrada;
- `Sistema.jsx`: componente pai que controla os dados e as funções principais;
- `CentralConteudo.jsx`: componente filho que recebe dados e funções por propriedades;
- `Slideshow.jsx`: mostra as imagens e utiliza operações com `Math`;
- `Rodape.jsx`: mostra o rodapé.

## Uso de IA

A Ia foi utilizada para fazer as estilizaçoes CSS, dar sugestoes para o esqueleto do HTML e organizar o README. Auxiliou, deu exemplos, explicou parte a parte de como os componentes poderiam ser organizados para a página. Auxiliou e corrigiu erros voltados a parte do sistema, como exportar JSON, Histórico e estatísticas do usuario, salvamento de dados, manipulacoes de listas e uso de hooks, onde foi mais complexo. Revisou o codigo e retirou partes desnecessarias que ocupavam mais memoria, deixando mais limpo. A Ia foi um auxiliador e professor para esse projeto, explicando cada parte que achavamos confuso e principamente nós gerando aprendizado

## Integrantes

- Erick Ripari Gomes - RM 569441.
- Fabricio Denig de Avila - RM 570980.
- Guilherme Mazzini Nunes Canno - RM 573183.
- Luan Schinello Garbin - RM 571276.
- Rafael Taboada Sobral - RM 569527.

## GitHub

[Repositório do projeto](https://github.com/raSobral1/sprintWebdev)

## Vercel 

https://jovi-gamma.vercel.app/
