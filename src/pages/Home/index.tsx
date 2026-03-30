import { useState } from 'react';
import { api } from '../../services/api';
import { Container, Content, SubtitleHome, TitleHome } from './styles';
import { Input } from '../../components/Input';
import { ItemList } from '../../components/ItemList';

export function Home() {
  const [repos, setRepos] = useState<any[]>([]);
  const [currentRepo, setCurrentRepo] = useState('');

  async function handleSearchRepos() {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');

          return;
        }
      }
    } catch (error) {
      alert('Repositório não encontrado ou erro na busca.');
    }
  }

  function handleRemoveRepo(id: number) {
    const removeRepo = repos.filter((repo) => repo.id !== id);

    setRepos(removeRepo);
  }

  return (
    <Container>
      <header>
        <TitleHome>Search Repositories</TitleHome>
        <SubtitleHome>
          Faça a sua busca no GitWiki e visualize bases de código e <br />{' '}
          documentação selecionadas.
        </SubtitleHome>
        <Input
          value={currentRepo}
          onChange={(e: any) => setCurrentRepo(e.target.value)}
          onClick={handleSearchRepos}
        />
      </header>

      <Content>
        <h3>Repositórios</h3>
        <hr />

        {repos.length > 0 ? (
          repos.map((repo) => (
            <ItemList repo={repo} handleRemoveRepo={handleRemoveRepo} />
          ))
        ) : (
          <p>Nenhum repositório listado. Faça uma busca!</p>
        )}
      </Content>
    </Container>
  );
}
