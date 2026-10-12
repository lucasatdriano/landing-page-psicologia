import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AboutContainer = styled.section`
    scroll-margin-top: 75px;
    width: 100%;
    display: grid;
    justify-content: space-between;
    padding: 1rem 15rem;
    align-items: center;
    text-align: center;

    @media (max-width: 1350px) {
        padding: 0 10rem 2rem;
    }

    @media (max-width: 1024px) {
        padding: 0 5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 2rem;
    }
`;

export const AboutContentWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 0 1rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 1024px) {
        padding: 1rem 0 1rem;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const AboutImageWrapper = styled.div`
    overflow: hidden;
    max-width: 100%;
    border-radius: 15px;
    
    width: 490px;
    height: 300px;
    aspect-ratio: 490 / 300;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .img-desktop { display: block; }
    .img-mobile { display: none; }

    @media (max-width: 1024px) {
        margin: auto;
        
        width: 350px;
        height: 250px;
        aspect-ratio: 350 / 250;

        .img-desktop { display: none; }
        .img-mobile { display: block; }
    }

    @media (max-width: 400px) {
        width: 100%;
        height: auto;
    }
`;

export const AboutContent = styled.div`
    display: grid;
    align-items: center;
    text-align: left;
`;

export const Text = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.base};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.base} * 0.9);
        margin-bottom: 0.5rem;
    }
`;
