import styled from 'styled-components';

export const Container = styled.div`
    background: var(--darkgray);
    padding-top: 8rem;
    padding-bottom: 8rem;
`;

export const Header = styled.div``;

export const Text = styled.div`
    color: var(--primary);

    :nth-child(1) {
        font-size: 5rem;
        font-weight: bold;
        margin: 0.5rem;
    }

    :nth-child(2) {
        font-size: 1.7rem;
    }
`;

export const Main = styled.div`
    margin-top: 7rem;
    padding-left: 7rem;
    padding-right: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const SolutionTitle = styled.div`
    color: var(--primary);
    font-size: 5rem;
    font-weight: 300;
    text-align: right;

    @media (max-width: 700px) {
        text-align: center;
    }
`;

export const DescriptionContainer = styled.div`
    margin-left: 2rem;

    @media (max-width: 700px) {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
`;

export const Description = styled.div`
    margin-top: 2rem;
    margin-left: 2rem;
    color: var(--primary);
    font-size: 1.4rem;
    opacity: 0.7;
    line-height: 3rem;
    text-align: justify;
`;

export const Solutions = styled.div`
    margin-top: 2rem;
    margin-left: 6rem;

    @media (max-width: 700px) {
        margin-left: 2rem;
    }

`;

export const Solution = styled.div`
    display: flex;
    flex-direction: row;
    color: var(--primary);
    margin-bottom: 2rem;

    > #number1 {
        border-top-color: var(--red);
        border-right-color: var(--red);
        border-bottom-color: var(--red);
    }

    > #number2 {
        border-top-color: var(--green);
        border-right-color: var(--green);
    }

    > #number3 {
        border-top-color: var(--blue);
        border-right-color: var(--blue);
        border-bottom-color: var(--blue);
    }

    > #number4 {
        border-top-color: var(--orange);
    }
`;

export const Number = styled.div`
    margin-left: 2rem;
    padding: 1rem;
    border: 0.8rem solid var(--darkergray);
    border-radius: 50%;
    width: 14rem;
    height: 7rem;
    font-size: 2rem;
    font-weight: bold;
    
    @media (max-width: 700px) {
        height: 9rem;
        padding-top: 2rem;
    }

    @media (max-width: 500px) {
        height: 6.7rem;
        padding-top: 1rem;
    }
`;

export const Info = styled.div``;

export const Title = styled.div`
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: justify;
`;

export const SolutionDescription = styled.div`
    margin-left: 2rem;
    color: var(--primary);
    font-size: 1.4rem;
    opacity: 0.7;
    line-height: 2.5rem;
    text-align: justify;
`;
