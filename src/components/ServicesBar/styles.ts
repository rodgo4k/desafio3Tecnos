import styled from 'styled-components';

export const Container = styled.div`
    padding-left: 5rem;
    padding-right: 5rem;
    display: flex;
    flex-direction: row;

    #service1, #service5 {
        width: 30rem;
    }

    #service2, #service3, #service4 {
        width: 20rem;
    }
`;

export const Service = styled.div`
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    margin-right: 2rem;

    &:hover {
        > .image {
            border: 1rem solid red;
            transition: 0.8s;
        }
    }
`;

export const ImgBox = styled.div`
    padding: 3rem;
    border: 1rem solid #D9D9D9;
    border-radius: 50%;
    cursor: pointer;
    width: 15rem;
    height: 15rem;
    align-items: center;
    justify-content: center;
    margin-left: 3rem;
    margin-right: 2rem;
`;

export const Img = styled.img`

`;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    opacity: 0.9;
`;

export const Underline = styled.div`
    margin-top: 0.5rem;
    background: red;
    width: 8rem;
    height: 0.2rem;
    left: 14rem;
    position: absolute;
`;

export const Description = styled.div`
    margin-top: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
`;
