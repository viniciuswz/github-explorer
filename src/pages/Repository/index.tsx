import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import LogoImage from '../../assets/images/logo.svg';

import { Header, Profile, Issues } from './style';

interface RepositpryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositpryParams>();

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      console.log(response);

      const [repositoryResult, issuesResult] = response;

      setRepositories(repositoryResult.data);
      setIssues(issuesResult.data);
    }
    loadData();
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={LogoImage} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      {repositories && (
        <Profile>
          <header>
            <img src={repositories.owner.avatar_url} alt="" />
            <div>
              <strong>{repositories.full_name}</strong>
              <p>{repositories.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositories.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repositories.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repositories.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </ul>
        </Profile>
      )}
      <Issues>
        {issues.map(issue => (
          <Link key={issue.id} to={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
