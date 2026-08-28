"use client";

import { useState } from "react";

const categorias = [
  "Front-end",
  "Python",
  "Web Development",
  "Cálculo",
  "Outros",
];

export default function CentralConteudo({
  conteudos,
  pastas,
  adicionar,
  editar,
  remover,
  alterarPrivacidade,
  alterarPasta,
  mover,
  criarPasta,
}) {
  const [busca, setBusca] = useState("");
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Front-end");
  const [pasta, setPasta] = useState("Aulas");
  const [vencimento, setVencimento] = useState("");
  const [novaPasta, setNovaPasta] = useState("");
  const [primeiroId, setPrimeiroId] = useState("");
  const [segundoId, setSegundoId] = useState("");

  const conteudosFiltrados = conteudos.filter((conteudo) =>
    `${conteudo.titulo} ${conteudo.categoria} ${conteudo.pasta}`
      .toLowerCase()
      .includes(busca.toLowerCase()),
  );

  const recentes = conteudos.slice(0, 2);

  const primeiroItem = conteudos.find(
    (conteudo) => conteudo.id === Number(primeiroId),
  );
  const segundoItem = conteudos.find(
    (conteudo) => conteudo.id === Number(segundoId),
  );

  const arquivoJSON =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(conteudos, null, 2));

  function enviarConteudo(evento) {
    evento.preventDefault();

    adicionar({
      titulo: titulo.trim(),
      categoria,
      pasta,
      vencimento,
      privado: false,
    });
    setTitulo("");
    setVencimento("");
  }

  function adicionarPasta(evento) {
    evento.preventDefault();

    if (criarPasta(novaPasta)) {
      setPasta(novaPasta.trim());
      setNovaPasta("");
    } else {
      alert("Digite um nome novo para a pasta.");
    }
  }

  function editarTitulo(conteudo) {
    const novoTitulo = prompt("Digite o novo título:", conteudo.titulo);

    if (novoTitulo && novoTitulo.trim() !== "") {
      editar(conteudo.id, novoTitulo.trim());
    }
  }

  return (
    <section className="card central">
      <div className="titulo-linha">
        <div>
          <h3>Central de conteúdo</h3>
          <p>Todos os materiais reunidos em um só lugar.</p>
        </div>
        <a className="botao" href={arquivoJSON} download="conteudos-slid.json">
          Exportar JSON
        </a>
      </div>

      <input
        className="busca"
        type="search"
        placeholder="Buscar por título, categoria ou pasta"
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />

      <div className="recentes">
        <strong>Mais recentes:</strong>
        {recentes.map((conteudo) => (
          <span key={conteudo.id}>{conteudo.titulo}</span>
        ))}
      </div>

      <h4>Pastas</h4>
      <div className="pastas">
        {pastas.map((nome) => (
          <span key={nome}>📁 {nome}</span>
        ))}
      </div>

      <form className="form-pasta" onSubmit={adicionarPasta}>
        <input
          type="text"
          placeholder="Nome da nova pasta"
          value={novaPasta}
          onChange={(evento) => setNovaPasta(evento.target.value)}
        />
        <button type="submit">Criar pasta</button>
      </form>

      <h4>Adicionar conteúdo</h4>
      <form className="form-conteudo" onSubmit={enviarConteudo}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          required
        />

        <select
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          {categorias.map((nome) => (
            <option key={nome}>{nome}</option>
          ))}
        </select>

        <select value={pasta} onChange={(evento) => setPasta(evento.target.value)}>
          {pastas.map((nome) => (
            <option key={nome}>{nome}</option>
          ))}
        </select>

        <input
          type="date"
          value={vencimento}
          onChange={(evento) => setVencimento(evento.target.value)}
          aria-label="Data de vencimento"
        />

        <button type="submit">Adicionar</button>
      </form>

      <div className="lista-conteudos">
        {conteudosFiltrados.map((conteudo) => (
          <article className="item-conteudo" key={conteudo.id}>
            <div>
              <strong>{conteudo.titulo}</strong>
              <p>
                {conteudo.categoria} • {conteudo.privado ? "Privado" : "Público"}
              </p>
            </div>

            <select
              value={conteudo.pasta}
              onChange={(evento) =>
                alterarPasta(conteudo.id, evento.target.value)
              }
              aria-label={`Pasta de ${conteudo.titulo}`}
            >
              {pastas.map((nome) => (
                <option key={nome}>{nome}</option>
              ))}
            </select>

            <div className="acoes-item">
              <button type="button" onClick={() => mover(conteudo.id, -1)}>
                ↑
              </button>
              <button type="button" onClick={() => mover(conteudo.id, 1)}>
                ↓
              </button>
              <button type="button" onClick={() => editarTitulo(conteudo)}>
                Editar
              </button>
              <button type="button" onClick={() => alterarPrivacidade(conteudo.id)}>
                Privacidade
              </button>
              <button type="button" onClick={() => remover(conteudo.id)}>
                Lixeira
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="comparacao">
        <h4>Comparação lado a lado</h4>

        <div className="selecao-comparacao">
          <select
            value={primeiroId}
            onChange={(evento) => setPrimeiroId(evento.target.value)}
          >
            <option value="">Primeiro conteúdo</option>
            {conteudos.map((conteudo) => (
              <option key={conteudo.id} value={conteudo.id}>
                {conteudo.titulo}
              </option>
            ))}
          </select>

          <select
            value={segundoId}
            onChange={(evento) => setSegundoId(evento.target.value)}
          >
            <option value="">Segundo conteúdo</option>
            {conteudos.map((conteudo) => (
              <option key={conteudo.id} value={conteudo.id}>
                {conteudo.titulo}
              </option>
            ))}
          </select>
        </div>

        {primeiroItem && segundoItem && primeiroItem.id !== segundoItem.id && (
          <div>
            {[primeiroItem, segundoItem].map((conteudo) => (
              <article key={conteudo.id}>
                <strong>{conteudo.titulo}</strong>
                <p>Categoria: {conteudo.categoria}</p>
                <p>Pasta: {conteudo.pasta}</p>
                <p>{conteudo.privado ? "Privado" : "Público"}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
