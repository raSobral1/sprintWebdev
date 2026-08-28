"use client";

import { useState } from "react";
import CentralConteudo from "./CentralConteudo";
import Login from "./Login";
import Slideshow from "./Slideshow";

const pastasIniciais = ["Aulas", "Revisões"];

const conteudosIniciais = [
  {
    id: 1,
    titulo: "Resumo de Front-end",
    categoria: "Front-end",
    pasta: "Aulas",
    privado: false,
    vencimento: "2026-09-03",
    dataCriacao: "28/08/2026",
  },
  {
    id: 2,
    titulo: "Exercícios de Python",
    categoria: "Python",
    pasta: "Revisões",
    privado: true,
    vencimento: "2026-09-10",
    dataCriacao: "27/08/2026",
  },
  {
    id: 3,
    titulo: "Anotações de Web Development",
    categoria: "Web Development",
    pasta: "Aulas",
    privado: false,
    vencimento: "",
    dataCriacao: "26/08/2026",
  },
];

function criarConteudo(dadosDoFormulario) {
  return {
    ...dadosDoFormulario,
    id: Date.now(),
    dataCriacao: new Date().toLocaleDateString("pt-BR"),
  };
}

export default function Sistema() {
  const [usuario, setUsuario] = useState("");
  const [conteudos, setConteudos] = useState(conteudosIniciais);
  const [pastas, setPastas] = useState(pastasIniciais);
  const [historico, setHistorico] = useState([]);
  const [lixeira, setLixeira] = useState([]);

  function registrarAcao(texto) {
    setHistorico((lista) => [texto, ...lista].slice(0, 20));
  }

  function salvarDados() {
    const dados = { conteudos, pastas, historico, lixeira };
    localStorage.setItem("dadosSLID", JSON.stringify(dados));
    alert("Dados salvos no navegador.");
  }

  function carregarDados() {
    const dadosSalvos = localStorage.getItem("dadosSLID");

    if (!dadosSalvos) {
      alert("Nenhum dado salvo foi encontrado.");
      return;
    }

    const dados = JSON.parse(dadosSalvos);
    setConteudos(dados.conteudos || conteudosIniciais);
    setPastas(dados.pastas || pastasIniciais);
    setHistorico((dados.historico || []).map((item) => item.texto || item));
    setLixeira(dados.lixeira || []);
    alert("Dados carregados.");
  }

  function adicionarConteudo(dadosDoFormulario) {
    const novoConteudo = criarConteudo(dadosDoFormulario);

    setConteudos([novoConteudo, ...conteudos]);
    registrarAcao(`${novoConteudo.titulo} foi adicionado.`);
  }

  function editarConteudo(id, novoTitulo) {
    setConteudos(
      conteudos.map((conteudo) =>
        conteudo.id === id
          ? { ...conteudo, titulo: novoTitulo }
          : conteudo,
      ),
    );
    registrarAcao(`Um conteúdo foi editado para ${novoTitulo}.`);
  }

  function removerConteudo(id) {
    const conteudoRemovido = conteudos.find((conteudo) => conteudo.id === id);
    const novaLista = conteudos.filter((conteudo) => conteudo.id !== id);

    setConteudos(novaLista);
    setLixeira([conteudoRemovido, ...lixeira]);
    registrarAcao(`${conteudoRemovido.titulo} foi enviado para a lixeira.`);
  }

  function restaurarConteudo(id) {
    const conteudoRestaurado = lixeira.find((conteudo) => conteudo.id === id);
    const novaLixeira = lixeira.filter((conteudo) => conteudo.id !== id);

    setConteudos([conteudoRestaurado, ...conteudos]);
    setLixeira(novaLixeira);
    registrarAcao(`${conteudoRestaurado.titulo} foi recuperado.`);
  }

  function alterarPrivacidade(id) {
    const item = conteudos.find((conteudo) => conteudo.id === id);
    setConteudos(
      conteudos.map((conteudo) =>
        conteudo.id === id
          ? { ...conteudo, privado: !conteudo.privado }
          : conteudo,
      ),
    );
    registrarAcao(`A privacidade de ${item.titulo} foi alterada.`);
  }

  function alterarPasta(id, novaPasta) {
    setConteudos(
      conteudos.map((conteudo) =>
        conteudo.id === id ? { ...conteudo, pasta: novaPasta } : conteudo,
      ),
    );
    registrarAcao(`Um conteúdo foi movido para ${novaPasta}.`);
  }

  function moverConteudo(id, direcao) {
    const novaLista = [...conteudos];
    const posicaoAtual = novaLista.findIndex((conteudo) => conteudo.id === id);
    const novaPosicao = posicaoAtual + direcao;

    if (novaPosicao < 0 || novaPosicao >= novaLista.length) {
      return;
    }

    const itemTemporario = novaLista[posicaoAtual];
    novaLista[posicaoAtual] = novaLista[novaPosicao];
    novaLista[novaPosicao] = itemTemporario;

    setConteudos(novaLista);
    registrarAcao("A ordem dos conteúdos foi alterada.");
  }

  function criarPasta(nome) {
    const nomeFormatado = nome.trim();

    if (nomeFormatado === "" || pastas.includes(nomeFormatado)) {
      return false;
    }

    setPastas([...pastas, nomeFormatado]);
    registrarAcao(`A pasta ${nomeFormatado} foi criada.`);
    return true;
  }

  function ativarSLID() {
    const confirmar = confirm("Deseja simular o funcionamento do SLID?");

    if (confirmar) {
      alert("Câmera ativada, áudio capturado e conteúdo identificado.");
    }
  }

  const avisos = conteudos.filter((conteudo) => conteudo.vencimento !== "");

  const publicos = conteudos.filter((conteudo) => !conteudo.privado).length;
  const percentualPublico = conteudos.length
    ? Math.round((publicos / conteudos.length) * 100)
    : 0;

  const dataDeHoje = new Date().toLocaleDateString("pt-BR");
  const adicionadosHoje = conteudos.filter(
    (conteudo) => conteudo.dataCriacao === dataDeHoje,
  ).length;

  const quantidadePorCategoria = {};
  conteudos.forEach((conteudo) => {
    const categoria = conteudo.categoria;
    quantidadePorCategoria[categoria] =
      (quantidadePorCategoria[categoria] || 0) + 1;
  });

  if (usuario === "") {
    return <Login fazerLogin={setUsuario} />;
  }

  return (
    <div>
      <section className="card boas-vindas">
        <div>
          <h2>Bem-vindo(a), {usuario}!</h2>
          <p>
            O Modo SLID ajuda o aluno a ver, escutar e identificar os pontos
            importantes da aula.
          </p>
        </div>

        <div className="acoes">
          <button type="button" onClick={ativarSLID}>
            Ativar SLID
          </button>
          <button type="button" onClick={salvarDados}>
            Salvar dados
          </button>
          <button type="button" onClick={carregarDados}>
            Carregar dados
          </button>
          <button type="button" onClick={() => setUsuario("")}>
            Sair
          </button>
        </div>
      </section>

      <section className="card notificacoes">
        <h3>Notificações</h3>
        {avisos.length === 0 ? (
          <p>Nenhum conteúdo possui data de vencimento.</p>
        ) : (
          <ul>
            {avisos.map((conteudo) => (
              <li key={conteudo.id}>
                {conteudo.titulo} vence em {conteudo.vencimento}.
              </li>
            ))}
          </ul>
        )}
      </section>

      <CentralConteudo
        conteudos={conteudos}
        pastas={pastas}
        adicionar={adicionarConteudo}
        editar={editarConteudo}
        remover={removerConteudo}
        alterarPrivacidade={alterarPrivacidade}
        alterarPasta={alterarPasta}
        mover={moverConteudo}
        criarPasta={criarPasta}
      />

      <div className="conteudo-secundario">
        <Slideshow />

        <section className="card historico">
          <h3>Histórico e estatísticas</h3>

          <div className="numeros">
            <p><strong>{conteudos.length}</strong> conteúdos</p>
            <p><strong>{adicionadosHoje}</strong> adicionados hoje</p>
            <p><strong>{percentualPublico}%</strong> públicos</p>
          </div>

          <h4>Por categoria</h4>
          <ul>
            {Object.entries(quantidadePorCategoria).map(([categoria, total]) => (
              <li key={categoria}>{categoria}: {total}</li>
            ))}
          </ul>

          <h4>Últimas ações</h4>
          {historico.length === 0 ? (
            <p>Nenhuma alteração realizada.</p>
          ) : (
            <ul>
              {historico.slice(0, 6).map((texto, indice) => (
                <li key={indice}>{texto}</li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <section className="card lixeira">
        <h3>Lixeira</h3>

        {lixeira.length === 0 ? (
          <p>Nenhum conteúdo excluído.</p>
        ) : (
          <ul>
            {lixeira.map((item) => (
              <li key={item.id}>
                <span>{item.titulo}</span>
                <button type="button" onClick={() => restaurarConteudo(item.id)}>
                  Recuperar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
