import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    aoCadastrar({
      nome,
      classe,
      imagem,
      time,
    });
    setNome("");
    setClasse("");
    setImagem("");
    setTime("");
  };

  const criarTime = (evento) => {
    evento.preventDefault();
    cadastrarTime({ nome: nomeTime, cor: corTime });
    alert("Time criado!");
    setNomeTime("");
    setCorTime("#000000");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio
          label="Classe"
          placeholder="Digite sua classe "
          valor={classe}
          aoAlterado={(valor) => setClasse(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" />
      </form>
      <form className="formulario" onSubmit={criarTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio
          label="Cor do Time"
          placeholder="cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao texto="Criar time" />
      </form>
    </section>
  );
};

export default Formulario;
