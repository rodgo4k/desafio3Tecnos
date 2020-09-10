import styled from 'styled-components';

import { LocationPin, Mail, Phone } from 'styled-icons/entypo';
import { FacebookWithCircle } from 'styled-icons/entypo-social';

export const Container = styled.div`
    background: var(--darkergray);
    padding-left: 8rem;
    padding-right: 8rem;
    display: flex;
    flex-direction: row;
    color: var(--primary);

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const Label = styled.div`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    opacity: 0.8;
`;

export const ItemOne = styled.div`
    padding-top: 10rem;
    padding-left: 17rem;
    padding-right: 17rem;
    height: 25rem;
    align-items: center;
    justify-content: center;

    > #label1 {
        width: 5rem;

        @media (max-width: 700px) {
            display: none;
        }
    }

    @media (max-width: 700px) {
        padding-left: 14rem;
    }
`;

export const ItemTwo = styled.div`
    padding-top: 10rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 25rem;
    align-items: center;
    justify-content: center;
`;

export const ItemThree = styled.div`
    padding-top: 10rem;
    padding-left: 3rem;
    padding-right: 3rem;
    height: 25rem;
    align-items: center;
    justify-content: center;

    > #label3 {
        width: 8rem;

        @media (max-width: 700px) {
            display: none;
        }
    }
`;

export const ItemFour = styled.div`
    padding-top: 10rem;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
    justify-content: center;
    margin-left: 22.5rem;
    margin-right: 10rem;
    height: 25rem;
    width: 25rem;
    background: var(--darkgray);

    @media (max-width: 700px) {
        width: 50rem;
        margin-left: 0;
        margin-right: 10rem;
    }

    @media (max-width: 500px) {
        width: 30rem;
        margin-left: 0;
        margin-right: 0;
        
    }

    > #label4 {
        opacity: 0.4;
    }

    > #label5 {
        width: 20rem;
        cursor: pointer;

        @media (max-width: 700px) {
            display: none;
        }

        > a {
            text-decoration: none;
        }
    }
`;

export const LocIcon = styled(LocationPin)`
    fill: var(--red);
    height: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
`;

export const MailIcon = styled(Mail)`
    fill: var(--green);
    height: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
`;

export const PhoneIcon = styled(Phone)`
    fill: var(--blue);
    height: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
`;

export const SocialIcon = styled(FacebookWithCircle)`
    fill: var(--lightergray);
    height: 4rem;
    height: 4rem;
    margin-bottom: 1rem;
    cursor: pointer;
`;
