import React from 'react';

import ViewImg from '../../assets/icon-view.png';
import PortfolioImg from '../../assets/icon-portfolio.png';
import ShopImg from '../../assets/icon-shop.png';
import UserImg from '../../assets/icon-user.png';
import DealImg from '../../assets/icon-deal.png';

import { Container, Service, ImgBox, Img, Title, Underline, Description } from './styles';

const ServicesBar: React.FC = () => {
  return (
      <Container>
          <Service id="service1">
            <ImgBox className="image">
                <Img src={ViewImg} />
            </ImgBox>
            <Title>CIDADÃO</Title>
            <Underline id="underline1"/>
            <Description>
                Aqui você acompanha os dados da lei complementar 131(Transparência Pública) 
                e aproveitar as facilidades dos serviços destinados aos cidadãos.
            </Description>
          </Service>

          <Service id="service2">
            <ImgBox className="image">
                <Img src={PortfolioImg} />
            </ImgBox>
            <Title>CONTRIBUINTE</Title>
            <Underline id="underline2"/>
            <Description>
                Sempre na palma da mão você visualiza e acompanha débitos de IPTU, Inscrições de 
                Empresas e autônomos, Emissão de certidões negativas e muito mais.
            </Description>
          </Service>

          <Service id="service3">
            <ImgBox className="image">
                <Img src={ShopImg} />
            </ImgBox>
            <Title>FORNECEDOR</Title>
            <Underline id="underline3"/>
            <Description>
                Pensando em tornar sua vida mais fácil, oferecemos serviços para você acompanhar 
                seus pagamentos e extratos.
            </Description>
          </Service>

          <Service id="service4">
            <ImgBox className="image">
                <Img src={UserImg} />
            </ImgBox>
            <Title>SERVIDOR</Title>
            <Underline id="underline4"/>
            <Description>
                Temos serviços prontos para te oferecer e agilizar o relacionamento com o departamento 
                pessoal de onde estiver.
            </Description>
          </Service>

          <Service id="service5">
            <ImgBox className="image">
                <Img src={DealImg} />
            </ImgBox>
            <Title>PARCEIRO</Title>
            <Underline id="underline5"/>
            <Description>
                A chave do sucesso é a colaboração, juntos nós fazemos acontecer.
            </Description>
          </Service>
      </Container>
  );
}

export default ServicesBar;