import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";
import Colaborador from "../Colaborador";
import "./time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  mudarCor: (cor: string, timeId: string) => void;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
  colaboradores: IColaborador[];
  time: ITime;
}

const Time = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, "0.5"),
        }}
      >
        <input
          onChange={(evento) => {
            if (time.id) {
              mudarCor(evento.target.value, time.id);
            }
          }}
          value={time.cor}
          type="color"
          className="input-cor"
        />

        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              corDeFundo={time.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
