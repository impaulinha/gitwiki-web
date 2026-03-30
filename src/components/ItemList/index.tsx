import { Badge } from '../Badge';
import {
  ContainerItem,
  ContentItem,
  InfosRepo,
  Metric,
  MetricsRepo,
} from './styles';

interface GitRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  owner: {
    login: string;
  };
}

interface ItemListProps {
  repo: GitRepo;
  handleRemoveRepo: (id: number) => void;
}

export function ItemList({ repo, handleRemoveRepo }: ItemListProps) {
  function handleRemove() {
    handleRemoveRepo(repo.id);
  }

  return (
    <ContainerItem onClick={handleRemove}>
      <Badge label={repo.private === true ? 'Private' : 'public'} />

      <ContentItem>
        <InfosRepo>
          <h3>{repo.name}</h3>
          <span>{`@${repo.owner.login}`}</span>
          <p>{repo.description ? repo.description : 'Sem descrição.'}</p>
        </InfosRepo>

        <MetricsRepo>
          <Metric>
            <h4>Stars</h4>
            <span>
              {repo.stargazers_count > 0 ? repo.stargazers_count : '--'}
            </span>
          </Metric>
          <Metric>
            <h4>Forks</h4>
            <span>{repo.forks_count > 0 ? repo.forks_count : '--'}</span>
          </Metric>

          <button className="btn-remove">Remover</button>
          <a href={repo.html_url} target="_blank">
            <button>Ver repositório</button>
          </a>
        </MetricsRepo>
      </ContentItem>
    </ContainerItem>
  );
}
