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
`;

export const CardImageWrapper = styled.div`
    overflow: hidden;
    height: 200px;
    width: 100%;
    border-radius: 10px;
`;

export const ArticleTitle = styled.h3`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

export const ArticleDescription = styled.p`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    margin-bottom: 1rem;
    text-align: left;
`;

export const ArticleLink = styled.a`
    color: ${theme.colors.accent};
    width: fit-content;
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    text-align: left;
    font-weight: 500;
    text-decoration: underline;
`;
