import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import Sistema from "@/components/Sistema";

export default function Home() {
  return (
    <div className="pagina">
      <Cabecalho />

      <main>
        <Sistema />
      </main>

      <Rodape />
    </div>
  );
}
