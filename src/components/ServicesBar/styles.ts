import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5rem;
    padding-left: 5rem;
    padding-right: 5rem;
    display: flex;
    flex-direction: row;

    #service1, #service5 {
        width: 30rem;

        @media (max-width: 700px) {
        align-items: center;
        justify-content: center;
        width: 100vw;
        }
    }

    #service2, #service3, #service4 {
        width: 20rem;

        @media (max-width: 700px) {
        align-items: center;
        justify-content: center;
        width: 100%;
        }
    }

    @media (max-width: 700px) {
        max-width: 700px;
        flex-direction: column;
    }
`;

export const Service = styled.div`
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    margin-right: 2rem;

    > #title1, #title5 {
        @media (max-width: 500px) {
            margin-left: 3rem;;
    }

    > #underline1 {
        left: 13.5rem;
        background: var(--darkred);
        
        @media (max-width: 700px) {
            left: 33.5rem;
        }
    } 

    > #underline2 {
        left: 38rem;
        background: var(--green);

        @media (max-width: 700px) {
            left: 33.5rem;
        }
    } 

    > #underline3 {
        left: 62rem;
        background: var(--orange);

        @media (max-width: 700px) {
            left: 33.5rem;
        }
    } 

    > #underline4 {
        left: 85.8rem;
        background: var(--blue);

        @media (max-width: 700px) {
            left: 33.5rem;
        }
    } 

    > #underline5 {
        left: 110.3rem;
        background: var(--darkred);

        @media (max-width: 700px) {
            left: 33.5rem;
        }
    } 

    :nth-child(1):hover {
        > .image {
            border: 1rem solid var(--darkred);
            transition: 0.8s;
        }
    }

    :nth-child(2):hover {
        > .image {
            border: 1rem solid var(--green);
            transition: 0.8s;
        }
    }

    :nth-child(3)&:hover {
        > .image {
            border: 1rem solid var(--orange);
            transition: 0.8s;
        }
    }

    :nth-child(4)&:hover {
        > .image {
            border: 1rem solid var(--blue);
            transition: 0.8s;
        }
    }
    :nth-child(5)&:hover {
        > .image {
            border: 1rem solid var(--darkred);
            transition: 0.8s;
        }
    }

    @media (max-width: 700px) {
        margin-bottom: 2rem;
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

    @media (max-width: 700px) {
        align-items: center;
        justify-content: center;
        margin-left: 38%;
    }

    @media (max-width: 700px) {
        margin-left: 11rem;
    }
`;

export const Img = styled.img``;

export const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    opacity: 0.8;

    @media (max-width: 700px) {
        text-align: center;;
    }
`;

export const Underline = styled.div`
    margin-top: 0.5rem;
    width: 8rem;
    height: 0.2rem;
    position: absolute;
`;

export const Description = styled.div`
    margin-top: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    opacity: 0.9;
`;
