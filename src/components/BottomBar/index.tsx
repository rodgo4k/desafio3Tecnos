import React from 'react';

import { Container, ItemOne, ItemTwo, ItemThree, ItemFour, Label,
         LocIcon, MailIcon, PhoneIcon, SocialIcon } from './styles';

const BottomBar: React.FC = () => {
  return (
      <Container>
          <ItemOne>
              <LocIcon />
              <Label id="label1">RUA ABC</Label>
          </ItemOne>

          <ItemTwo>
              <MailIcon />
              <Label id="label2">email@contato.com</Label>
          </ItemTwo>

          <ItemThree>
              <PhoneIcon />
              <Label id="label3">(79)3211-1964</Label>
          </ItemThree>

          <ItemFour>
              <SocialIcon />
              <Label id="label4">©2016 3Tecnos Tecnologia LTDA</Label>
              <Label id="label5"><a href="www.3Tecnos.com.br">www.3Tecnos.com.br</a></Label>
          </ItemFour>
      </Container>
  );
}

export default BottomBar;