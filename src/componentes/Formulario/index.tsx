import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

interface FormularioProps {
  aoCadastrar: (colaborador: IColaborador) => void;
  times: string[];
  cadastrarTime: (time: ITime) => void;
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: FormularioProps) => {
  const [nome, setNome] = useState<string>("");
  const [classe, setClasse] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [nomeTime, setNomeTime] = useState<string>("");
  const [corTime, setCorTime] = useState<string>("#000000");

  const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
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

  const criarTime = (evento: React.FormEvent<HTMLFormElement>) => {
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
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
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
        <Botao>Criar time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
