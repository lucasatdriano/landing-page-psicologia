import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${theme.colors.secondary};
    border: none;
    border-radius: 8px;
    padding: 0.75rem 2rem;
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.large};
    font-weight: 600;
    color: ${theme.colors.text};
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${theme.colors.primary};
        margin-top: -2px;
        box-shadow: 0 4px 12px ${theme.colors.shadow};
    }

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
    }
`;
