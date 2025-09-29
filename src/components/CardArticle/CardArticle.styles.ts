import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.header`
    width: 350px;
    background-color: ${theme.colors.secondary};
    display: grid;
    gap: 10px;
    padding: 1rem;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 2px ${theme.colors.shadow};
    flex: 1;

    @media (max-width: 1350px) {
        width: 45%;
        min-width: 250px;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 300px;
    }
`;

export const CardImageWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    max-height: 200px;
    border-radius: 10px;
    margin: auto;

    @media (max-width: 1350px) {
        max-height: 150px;
        max-width: fit-content;
    }
`;

export const ArticleTitle = styled.h3`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
    }
`;

export const ArticleDescription = styled.p`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    margin-bottom: 1rem;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.base} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.base} * 0.8);
        margin-bottom: 0.5rem;
    }
`;

export const ArticleLink = styled.a`
    color: ${theme.colors.accent};
    width: fit-content;
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    text-align: left;
    font-weight: 500;
    text-decoration: underline;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
    }
`;
