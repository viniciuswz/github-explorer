import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import LogoImage from '../../assets/images/logo.svg';

import { Header, Profile, CommitItem } from './style';

interface RepositpryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositpryParams>();
  return (
    <>
      <Header>
        <img src={LogoImage} alt="github explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      <Profile>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/32021203?s=460&u=420200fc65df765726da5c388f91a73e484a71a6&v=4"
            alt=""
          />
          <div>
            <strong>{params.repository}</strong>
            <p>lalala</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1000</strong>
            <p>lalala</p>
          </li>
          <li>
            <strong>1000</strong>
            <p>lalala</p>
          </li>
          <li>
            <strong>1000</strong>
            <p>lalala</p>
          </li>
          <li>
            <strong>1000</strong>
            <p>lalala</p>
          </li>
        </ul>
      </Profile>
      <CommitItem>
        <div>
          <strong>Commit titulo</strong>
          <p>Descrição</p>
        </div>
        <FiChevronRight size={20} />
      </CommitItem>
    </>
  );
};

export default Repository;
