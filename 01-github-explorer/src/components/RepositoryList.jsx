import { RepositoryItem } from './RepositoryItem';
 
const repository = {
  name: 'Unform',
  description: 'Form is React',
  link:"https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem/>
      </ul>
    </section>
  );
};
