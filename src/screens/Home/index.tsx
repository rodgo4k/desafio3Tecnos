import React from 'react';

import LogoImg from '../../assets/logomarca.jpg';

import ServicesBar from '../../components/ServicesBar';

import { Container,
         TopBar, Left, Logo, Text, Tab,
         Main,  } from './styles';

const Home: React.FC = () => {
  return (
      <Container>
          <TopBar>
              <Left>
                <Logo src={LogoImg} alt="Logomarca" />
                <Text>PREFEITURA MUNICIPAL</Text>
              </Left>
              <Left>
                  <Tab>Home</Tab>
                  <Tab>Serviços</Tab>
                  <Tab>O Município</Tab>
                  <Tab>Contato</Tab>
              </Left>
          </TopBar>

          <Main>
            <Text>SERVIÇOS</Text>
            <Text>Nós oferecemos serviços personalizados para cada um!</Text>

            <ServicesBar />
          </Main>
      </Container>
  );
}

export default Home;