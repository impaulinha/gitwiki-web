import { ContainerButton } from './styles';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <ContainerButton onClick={onClick}>{label}</ContainerButton>;
}
