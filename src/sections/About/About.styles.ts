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
    width: fit-content;
    height: fit-content;
    max-height: 300px;
    border-radius: 15px;

    .desktop-image {
        display: block;
    }

    .mobile-image {
        display: none;
    }

    @media (max-width: 1024px) {
        margin: auto;
        max-height: 250px;

        .desktop-image {
            display: none;
        }

        .mobile-image {
            display: block;
        }
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
