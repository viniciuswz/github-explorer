import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Content, RepositoryItem } from './style';
import LogoImage from '../../assets/images/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImage} alt="github explorer" />
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit"> Pesquisar</button>
      </Form>

      <Content>
        <RepositoryItem>
          <img
            src="https://avatars3.githubusercontent.com/u/32021203?s=460&u=420200fc65df765726da5c388f91a73e484a71a6&v=4"
            alt="avatar"
          />
          <div>
            <h2>Title/Repo</h2>
            <p>Descrição</p>
          </div>
          <FiChevronRight size={26} />
        </RepositoryItem>
      </Content>
    </>
  );
};

export default Dashboard;
