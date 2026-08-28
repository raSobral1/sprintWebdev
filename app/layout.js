import "./globals.css";

export const metadata = {
  title: "Jovi - Modo SLID",
  description: "Projeto de migraçao para React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
