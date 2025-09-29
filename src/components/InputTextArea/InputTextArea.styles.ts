import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface InputWrapperProps {
    $fullWidth?: boolean;
}

interface TextAreaFieldProps {
    $hasError?: boolean;
    $fullWidth?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
`;

export const Label = styled.label`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.text};
    font-weight: 500;
`;

export const TextAreaField = styled.textarea<TextAreaFieldProps>`
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
    padding: 1rem;
    border: 2px solid
        ${(props) =>
            props.$hasError ? theme.colors.error : theme.colors.border};
    border-radius: 8px;
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    transition: all 0.3s ease;
    resize: vertical;
    min-height: 120px;
    line-height: 1.5;

    &::-webkit-resizer {
        display: none;
    }

    &:focus {
        outline: none;
        border-color: ${(props) =>
            props.$hasError ? theme.colors.error : theme.colors.accent};
        box-shadow: 0 0 0 3px
            ${(props) =>
                props.$hasError
                    ? `${theme.colors.error}20`
                    : `${theme.colors.accent}20`};
    }

    &:disabled {
        background-color: ${theme.colors.border};
        cursor: not-allowed;
        opacity: 0.6;
    }

    &::placeholder {
        color: ${theme.colors.placeholder};
    }
`;

export const ErrorMessage = styled.span`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.error};
    font-weight: 500;
`;
