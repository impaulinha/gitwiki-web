import styled from 'styled-components';

export const Container = styled.div`
  padding: 5% 8%;

  header {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TitleHome = styled.h1`
  color: var(--foreground);
  font-weight: 800;
  font-size: 3.5rem;
  margin-bottom: 15px;
  text-align: center;
`;

export const SubtitleHome = styled.span`
  color: var(--muted-foreground);
  text-align: center;
  margin-bottom: 35px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h3 {
    color: var(--foreground);
    font-weight: 600;
    font-size: 1.4rem;
  }

  hr {
    margin: 20px 0;
    background-color: var(--muted-foreground);
    border: 0.3px solid var(--card-bg);
  }

  p {
    text-align: center;
    color: var(--muted-foreground);
    font-weight: 600;
    margin-top: 40px;
  }
`;
