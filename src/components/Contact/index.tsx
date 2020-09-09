import React from 'react';

import { Container, HeaderContainer, Title, Description,
         InputContainer, InputTop, Input, InputBottom,
         Button } from './styles';

const Contact: React.FC = () => {
  return (
      <Container>
          <HeaderContainer>
              <Title>FALE CONOSCO</Title>
              <Description>Envie sua sugestão, crítica ou elogio para seu município.</Description>
          </HeaderContainer>

            <InputContainer>
              <form>
                <InputTop>
                    <Input placeholder="Nome"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Assunto"/>
                </InputTop>
                <InputBottom>
                    <Input placeholder="Mensagem" id="msginput"/>
                </InputBottom>
                <Button type="submit">ENVIAR</Button>
              </form>
            </InputContainer>

      </Container>
  );
}

export default Contact;