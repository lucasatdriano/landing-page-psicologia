import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.secondary};
    display: grid;
    padding: 1rem 15rem;
    gap: 2rem;
    align-items: center;
    text-align: center;

    @media (max-width: 1350px) {
        padding: 1rem 10rem;
    }

    @media (max-width: 1024px) {
        gap: 1rem;
        padding: 1rem 5rem;
    }

    @media (max-width: 480px) {
        gap: 1rem;
        padding: 1rem 2rem 0.5rem;
    }
`;

export const Logo = styled.a`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.logo};
    font-weight: bold;
    text-decoration: none;
    color: ${theme.colors.accent};

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.logo} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.logo} * 0.8);
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.logo} * 0.7);
    }
`;

export const Line = styled.hr`
    border: 1px solid ${theme.colors.accent};
`;

export const CopyrightText = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.small};
    font-weight: 400;
    color: ${theme.colors.text};

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.small} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.small} * 0.8);
    }

    @media (max-width: 400px) {
        font-size: calc(${theme.fontSizes.small} * 0.7);
    }
`;
