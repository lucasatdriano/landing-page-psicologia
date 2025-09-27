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
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 10px 2px ${theme.colors.shadow};
`;

export const Logo = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.logo};
    font-weight: bold;
    color: ${theme.colors.accent};
`;
