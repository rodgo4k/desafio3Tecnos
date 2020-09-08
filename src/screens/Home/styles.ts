import styled from 'styled-components';

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
        opacity: 0.9;
    }

    > :nth-child(2) {
        margin-top: 0;
        font-size: 1.7rem;
        font-weight: normal;
    }
`;
