import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  a {
    font-weight: 700;
    color: #a8a8b3;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }
    svg {
      margin-right: 8px;
    }
  }
`;

const Profile = styled.section`
  margin-bottom: 80px;
  header {
    margin-top: 82px;
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 24px;
    }
    div {
      strong {
        font-size: 36px;
        line-height: 42px;
        color: #3d3d4d;
      }
      p {
        font-size: 20px;
        color: #737380;
        margin-top: 12px;
      }
    }
  }
  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;
    li {
      margin-right: 80px;
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }
      p {
        margin-top: 4px;
        font-size: 20px;
        color: #6c6c80;
      }
    }
  }
`;

const CommitItem = styled.a`
  width: 100%;
  padding: 24px;
  transition: 0.3s;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  &:hover {
    transform: translateX(10px);
  }
  & ~ a {
    margin-bottom: 16px;
  }
  div {
    strong {
      font-size: 24px;
      color: #3d3d4d;
      margin-bottom: 8px;
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
    }
  }
  svg {
    margin-left: auto;
    color: #c9c9d4;
  }
`;

export { Header, Profile, CommitItem };
