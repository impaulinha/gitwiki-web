import { Button } from '../Button';
import { ContainerInput } from './styles';

interface InputProps {
  onClick: () => void;
  value: string;
  onChange: (e: any) => void;
}

export function Input({ onClick, value, onChange }: InputProps) {
  return (
    <ContainerInput>
      <input
        placeholder="Pesquisar por repositório..."
        value={value}
        onChange={onChange}
      />
      <Button label="Pesquisar" onClick={onClick} />
    </ContainerInput>
  );
}
