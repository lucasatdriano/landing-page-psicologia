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
`;

export const Logo = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.logo};
    font-weight: bold;
    color: ${theme.colors.accent};
`;

export const Line = styled.hr`
    border: 1px solid ${theme.colors.accent};
`;

export const CopyrightText = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.small};
    font-weight: 400;
    color: ${theme.colors.text};
`;
