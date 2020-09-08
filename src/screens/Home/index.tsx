import React from 'react';

import LogoImg from '../../assets/logomarca.jpg';

import ServicesBar from '../../components/ServicesBar';
import Portal from '../../components/Portal';

import { Container,
         TopBar, Left, Logo, Text, Tab,
         Main, MainServices, Title, BarContainer, Bar,
         Services, Service, IconReceita, IconDespesa, IconCheque, IconInfo } from './styles';

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

            <MainServices>
              <Title>
                <BarContainer>
                  <Bar />
                  <Bar />
                </BarContainer>
                <Text>Principais Serviços</Text>
                <BarContainer>
                  <Bar />
                  <Bar />
                </BarContainer>
              </Title>
              <Services>
                <Service>
                  <IconReceita />
                  <Text>RECEITA</Text>
                </Service>

                <Service>
                  <IconDespesa />
                  <Text>DESPESA</Text>
                </Service>
                
                <Service>
                  <IconCheque />
                  <Text>CONTRACHEQUE</Text>
                </Service>

                <Service>
                  <IconInfo />
                  <Text>SOLICITAÇÃO DE INFORMAÇÃO</Text>
                </Service>

              </Services>
            </MainServices>

            <Portal />

          </Main>
      </Container>
  );
}

export default Home;