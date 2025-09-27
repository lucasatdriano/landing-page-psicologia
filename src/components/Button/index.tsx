'use client';

import { Button } from './Button.styles';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function CustomButton({
    text,
    onClick,
    type = 'button',
}: ButtonProps) {
    return (
        <Button type={type} onClick={onClick}>
            {text}
        </Button>
    );
}
