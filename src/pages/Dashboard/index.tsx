import React, { useState, useEffect, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Title, Form, Content, Repositories, Error } from './style';
import LogoImage from '../../assets/images/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    if (storageRepository) {
      return JSON.parse(storageRepository);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por este repositório');
    }
  }
  return (
    <>
      <img src={LogoImage} alt="github explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite aqui"
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit"> Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img src={repository.owner.avatar_url} alt="avatar" />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={26} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
