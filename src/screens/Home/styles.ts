import styled from 'styled-components';

import { Receipt } from 'styled-icons/boxicons-solid';
import { Search } from 'styled-icons/boxicons-regular';
import { CloudUpload } from 'styled-icons/material-rounded';
import { ListNested } from 'styled-icons/bootstrap';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TopBar = styled.div`
    background: white;
    padding-left: 60px;
    padding-right: 60px;
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
    position: sticky;
    top: 0;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Logo = styled.img`
    cursor: pointer;
`;

export const Text = styled.div`
    margin: 15px;
    font-size: 2rem;
    font-weight: bold;
    opacity: 0.9;
`;

export const Tab = styled.div`
    margin: auto 10px;
    font-size: 1.6rem;
    transition: 0.5s;

    &:hover {
        color: var(--red);
        cursor: pointer;
    }
`;

export const Main = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;

    > :nth-child(1) {
        font-size:5.5rem;
        margin-bottom: 0;
        opacity: 0.8;
    }

    > :nth-child(2) {
        margin-top: 0;
        font-size: 1.7rem;
        font-weight: normal;
    }
`;

export const MainServices = styled.div`
    margin: 10rem;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BarContainer = styled.div``;

export const Bar = styled.div`
    margin: 0.5rem;
    height: 0.2rem;
    width: 44rem;
    background: var(--gray);
`;

export const Services = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Service = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    margin-right: 2rem;

    > div {
        font-size: 1.5rem;
        font-weight: normal;
        margin-left: 0.8rem;
    }
`;

export const IconReceita = styled(Receipt)`
    width: 2rem;
    height: 2rem;
    opacity: 0.9;
    margin: 0;
`;

export const IconDespesa = styled(Search)`
    width: 2rem;
    height: 2rem;
    opacity: 0.9;
    margin: 0;
`;

export const IconCheque = styled(CloudUpload)`
    width: 2rem;
    height: 2rem;
    opacity: 0.9;
    margin: 0;
`;

export const IconInfo = styled(ListNested)`
    width: 2rem;
    height: 2rem;
    opacity: 0.9;
    margin: 0;
`;