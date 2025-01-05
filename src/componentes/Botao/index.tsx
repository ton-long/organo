import "./botao.css";

interface BotaoProps {
  children: React.ReactNode;
}

const Botao = ({ children }: BotaoProps) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
