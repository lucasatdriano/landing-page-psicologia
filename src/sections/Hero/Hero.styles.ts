import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    padding: 7rem 15rem 2rem;
    align-items: center;
    text-align: center;

    @media (max-width: 1350px) {
        padding: 7rem 10rem 2rem;
    }

    @media (max-width: 1024px) {
        padding: 5rem 5rem 2rem;
    }

    @media (max-width: 480px) {
        padding: 5rem 2rem 2rem;
    }
`;

export const HeroImageWrapper = styled.div`
    overflow: hidden;
    height: 250px;
    width: 100%;
    max-width: 350px;
    border-radius: 15px;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const HeroContent = styled.div`
    padding: 2rem 0;
    width: 800px;
    margin: auto;
    height: 100%;
    display: grid;
    align-items: center;
    text-align: center;

    @media (max-width: 1024px) {
        width: 100%;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Headline = styled.h1`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.headline};
    font-weight: bold;
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.headline} * 0.8);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.headline} * 0.7);
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.headline} * 0.6);
        margin-bottom: 0.25rem;
    }
`;

export const Subheadline = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.large};
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
        margin-bottom: 1rem;
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.large} * 0.7);
        margin-bottom: 1rem;
    }
`;
