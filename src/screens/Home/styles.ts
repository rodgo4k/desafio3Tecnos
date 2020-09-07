import styled from 'styled-components';

export const Container = styled.div`
  
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

export const Title = styled.div`
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
