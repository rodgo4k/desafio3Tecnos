import React from 'react';

import LogoImg from '../../assets/logomarca.jpg';

import { Container, TopBar, Left, Logo, Title, Tab } from './styles';

const Home: React.FC = () => {
  return (
      <Container>
          <TopBar>
              <Left>
                <Logo src={LogoImg} alt="Logomarca" />
                <Title>PREFEITURA MUNICIPAL</Title>
              </Left>
              <Left>
                  <Tab>Home</Tab>
                  <Tab>Serviços</Tab>
                  <Tab>O Município</Tab>
                  <Tab>Contato</Tab>
              </Left>
          </TopBar>
      </Container>
  );
}

export default Home;