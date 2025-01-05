import "./campo.css";

interface CampoProps {
  label: string;
  placeholder: string;
  valor: string;
  type?: string;
  obrigatorio?: boolean;
  aoAlterado: (valor: string) => void;
}

const Campo = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  type = "text",
  obrigatorio = false,
}: CampoProps) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Campo;
