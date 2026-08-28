"use client";

import { useState } from "react";

export default function Login({ fazerLogin }) {
  const [nome, setNome] = useState("");

  function entrar(evento) {
    evento.preventDefault();

    if (nome.trim() === "") {
      alert("Digite seu nome.");
      return;
    }

    fazerLogin(nome.trim());
  }

  return (
    <section className="card login">
      <h2>Login</h2>

      <form onSubmit={entrar}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          minLength="4"
          required
        />

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}
