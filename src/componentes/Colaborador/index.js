import "./colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  const favoritar = () => {
    aoFavoritar(colaborador.id);
  };

  const propsFavorito = {
    onClick: favoritar,
    size: 25,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.classe}</h5>
        <div className="favorito">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
