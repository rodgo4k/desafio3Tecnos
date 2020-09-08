import React from 'react';

import { Container, Header, Text,
         Main, SolutionTitle, DescriptionContainer, Description,
         Solutions, Solution, Number, Info, Title, SolutionDescription } from './styles';

const Portal: React.FC = () => {
  return (
      <Container>
        <Header>
            <Text>O PORTAL</Text>
            <Text>Nosso objetivo é levar o município até você.</Text>
        </Header>

        <Main>
            <SolutionTitle>
                Soluções para o Cidadão, o Contribuinte e o Servidor.
            </SolutionTitle>

            <DescriptionContainer>
                <Description>
                    É um portal que tem como principal objetivo atender as necessidades dos cidadãos, 
                    assim como disponibilizar recursos exclusivos para contribuintes e servidores.
                </Description>
                <Description>
                    Aqui você encontrará informações das contas de receitas e despesas do seu município, 
                    além disso, você poderá acompanhá-las através de indicadores gerenciais.
                </Description>
            </DescriptionContainer>

            <Solutions>
                <Solution>
                    <Number>6</Number>
                    <Info>
                        <Title>CIDADÃO</Title>
                        <SolutionDescription>
                            Em respeito a você oferecemos serviços de transparência para que você possa acompanhar o uso 
                            do dinheiro público.
                        </SolutionDescription>
                    </Info>
                </Solution>
            </Solutions>
        </Main>

      </Container>
  );
}

export default Portal;