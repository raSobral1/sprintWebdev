"use client";

import Image from "next/image";
import { useState } from "react";

const imagens = [
  "/imagens/see.jpg",
  "/imagens/home.jpg",
  "/imagens/galeria.jpg",
];

export default function Slideshow() {
  const [imagemAtual, setImagemAtual] = useState(0);

  function anterior() {
    setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
  }

  function proxima() {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  }

  function sortear() {
    const numeroAleatorio = Math.floor(Math.random() * imagens.length);
    setImagemAtual(numeroAleatorio);
  }

  return (
    <section className="card slideshow">
      <h3>Slideshow</h3>

      <Image
        src={imagens[imagemAtual]}
        alt="Imagem do projeto Jovi"
        width={412}
        height={917}
        priority
      />

      <div className="botoes-slideshow">
        <button type="button" onClick={anterior}>
          Anterior
        </button>
        <button type="button" onClick={sortear}>
          Sortear
        </button>
        <button type="button" onClick={proxima}>
          Próxima
        </button>
      </div>
    </section>
  );
}
