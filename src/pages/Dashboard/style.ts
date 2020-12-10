import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface Form {
  hasError: boolean;
}

const Title = styled.h1`
  font-weight: bold;
  max-width: 433px;
  font-size: 48px;
  margin-top: 102px;
`;

const Form = styled.form<Form>`
  margin-top: 40px;
  display: flex;
  input {
    height: 72px;
    flex: 1;
    border: 0;
    background: white;
    padding: 0 24px;
    border-radius: 5px 0px 0px 5px;
    font-size: 20px;
    border: 2px solid #fff;
    border-right: 0;
    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    background: #04d361;
    color: #fff;
    width: 210px;
    height: 72px;
    font-size: 18px;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 120px;
`;

const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 120px;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    align-items: center;
    background: #fff;
    padding: 14px 29px;
    border-radius: 5px;
    transition: 0.6s;
    text-decoration: none;
    & ~ a {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px) translateY(-4px);
    }
    img {
      width: 83px;
      height: 83px;
      border-radius: 50%;
      margin-right: 22px;
    }
    div {
      width: 80%;
      h2 {
        font-size: 24px;
        line-height: 28px;
        color: #3d3d4d;
        margin-bottom: 4px;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;

const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export { Title, Form, Content, Repositories, Error };
