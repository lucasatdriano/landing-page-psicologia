import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    border-bottom: 1px solid ${theme.colors.border};
    background-color: ${theme.colors.background};
    display: flex;
    padding: 1rem 15rem;
    justify-content: space-between;
    gap: 5rem;
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 10px 2px ${theme.colors.shadow};

    @media (max-width: 1350px) {
        padding: 1rem 10rem;
        gap: 2rem;
    }

    @media (max-width: 1024px) {
        padding: 1rem 5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 2rem;
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

export const ButtonWrapper = styled.div`
    order: 3;

    @media (max-width: 1024px) {
        display: none;
    }
`;
