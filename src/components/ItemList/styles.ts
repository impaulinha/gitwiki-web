import styled from 'styled-components';

export const ContainerItem = styled.div`
  background-color: var(--card-bg);
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ContentItem = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 10px;
  align-items: center;
`;

export const InfosRepo = styled.div`
  span {
    color: var(--muted-foreground);
    font-weight: 600;
    margin-top: 10px;
  }

  p {
    color: var(--muted-foreground);
    margin-top: 20px;
  }
`;

export const Metric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  h4 {
    color: var(--muted-foreground);
    font-weight: 600;
  }

  span {
    color: var(--foreground);
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const MetricsRepo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .btn-remove {
    background-color: transparent;
    border: 1px solid var(--destructive);
    color: var(--destructive);

    &:hover {
      transform: scale(1);
      background-color: var(--destructive);
      color: var(--backgroun);
    }
  }

  button {
    background-color: var(--primary-fixed);
    color: var(--primary);
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 600;

    &:hover {
      transform: scale(1);
      background-color: var(--primary);
      color: var(--primary-fixed);
    }
  }
`;
