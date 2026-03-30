import styled from 'styled-components';

export const ContainerButton = styled.button`
  width: 20%;
  background-color: var(--primary);
  border-radius: 10px;
  border: none;
  height: 100%;
  color: var(--primary-fixed);
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-fixed);
    color: var(--muted-foreground);
  }
`;
