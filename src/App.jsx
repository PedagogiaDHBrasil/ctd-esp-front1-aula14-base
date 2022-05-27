import { useState } from "react";
import ListarMensagens from "./components/ListarMensagens";
import VerMensagem from "./components/VerMensagem";
import { mensagens } from "./data/mensagens";

import "./styles.css";

export default function App() {
  const [mensagem, setMensagem] = useState();

  const selecionarMensagem = (id) =>
    setMensagem(mensagens.find((m) => m.id === id));

  return (
    <div className="App">
      <h1>Caixa de entrada</h1>
      <div id="caixaDeEntrada">
        <ListarMensagens
          mensagens={mensagens}
          selecionarMensagem={selecionarMensagem}
        />
        <VerMensagem mensagem={mensagem} />
      </div>
    </div>
  );
}
