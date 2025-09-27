import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const FormContainer = styled.header`
    width: 40%;
    background-color: ${theme.colors.background};
    display: grid;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 2px ${theme.colors.shadow};
`;

export const Title = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: bold;
    text-align: center;
    color: ${theme.colors.text};
`;

export const InputContainer = styled.header`
    display: grid;
    gap: 1rem;
    text-align: left;
`;
