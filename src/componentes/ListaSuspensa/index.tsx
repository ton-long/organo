import "./lista-suspensa.css";

interface ListaSuspensaProps {
  label: string;
  itens: string[];
  valor: string;
  obrigatorio: boolean;
  aoAlterado: (cor: string) => void;
}

const ListaSuspensa = ({
  label,
  itens,
  valor,
  aoAlterado,
  obrigatorio = false,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        <option />
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
