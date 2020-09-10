import styled from 'styled-components';

export const Container = styled.div`
    background: var(--lightergray);
    padding-top: 10rem;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    color: var(--primary);
`;

export const HeaderContainer = styled.div``;

export const Title = styled.div`
    font-size: 5rem;
    font-weight: bold;
`;

export const Description = styled.div`
    font-size: 1.5rem;
`;

export const InputContainer = styled.div`
    margin-top: 3rem;
`;

export const InputTop = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 700px) {
        flex-direction: column;
    }

    > input {
        @media (max-width: 700px) {
            width: calc(100% - 6rem);
        }
    }
`;

export const Input = styled.input`
    margin-top: 2rem;
    background: var(--primary);
    margin-left: 3rem;
    margin-right: 3rem;
    border: var(--darkergray);
    border-radius: 0.5rem;
    height: 4rem;
    width: 35rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    color: var(--darkgray);

    &:focus {
        border: var(--blue);
    }
`;

export const InputBottom = styled.div`
    #msginput {
        width: calc(100% - 6rem);
        height: 6rem;
    }
`;

export const Button = styled.button`
    position: absolute;
    background: var(--red);
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    border-radius: 0.5rem;
    height: 6rem;
    width: 12rem;
    left: 112.5rem;
    bottom: -161rem;
    font-weight: bold;
    cursor: pointer;
`;

