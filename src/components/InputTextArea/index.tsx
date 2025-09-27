'use client';

import {
    TextAreaField,
    InputWrapper,
    Label,
    ErrorMessage,
} from './InputTextArea.styles';

interface InputTextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    rows?: number;
}

export default function InputTextArea({
    label,
    error,
    fullWidth = true,
    rows = 4,
    id,
    className,
    ...props
}: InputTextAreaProps) {
    return (
        <InputWrapper $fullWidth={fullWidth} className={className}>
            {label && <Label htmlFor={id}>{label}</Label>}
            <TextAreaField
                id={id}
                $hasError={!!error}
                $fullWidth={fullWidth}
                rows={rows}
                {...props}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>
    );
}
