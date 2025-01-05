import "./botao.css";
import React from "react";

interface BotaoProps {
  children: React.ReactNode;
}

const Botao = ({ children }: BotaoProps) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
