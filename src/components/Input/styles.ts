import styled from 'styled-components';

export const ContainerInput = styled.div`
  width: 100%;
  background-color: var(--input-bg);
  border-radius: 10px;
  padding: 10px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input {
    width: 80%;
    background-color: transparent;
    border: none;
    height: 100%;
    padding-left: 20px;
    color: var(--foreground);
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
`;
