'use client';

import {
    InputField,
    InputWrapper,
    Label,
    ErrorMessage,
} from './InputText.styles';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export default function InputText({
    label,
    error,
    fullWidth = true,
    id,
    className,
    ...props
}: InputTextProps) {
    return (
        <InputWrapper $fullWidth={fullWidth} className={className}>
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputField
                id={id}
                $hasError={!!error}
                $fullWidth={fullWidth}
                {...props}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
}
