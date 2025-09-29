import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CardContainer = styled.header`
    width: 350px;
    background-color: ${theme.colors.secondary};
    display: grid;
    gap: 10px;
    padding: 1rem;
    align-items: center;
    text-align: left;
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

export const Text = styled.p`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    margin-bottom: 0.5rem;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.base} * 0.9);
    }
`;

export const Name = styled.p`
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }
`;
