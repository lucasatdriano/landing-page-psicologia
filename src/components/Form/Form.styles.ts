import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 100%;
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

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.title} * 0.9);
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.title} * 0.8);
    }
`;

export const InputContainer = styled.header`
    display: grid;
    gap: 1rem;
    text-align: left;
`;

export const SuccessMessage = styled.div`
    background-color: #d4edda;
    color: ${theme.colors.success};
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #c3e6cb;
    margin-bottom: 1rem;
`;

export const ErrorMessage = styled.div`
    background-color: #f8d7da;
    color: ${theme.colors.error};
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #f5c6cb;
    margin-bottom: 1rem;
`;
