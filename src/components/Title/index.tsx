'use client';

import { Title } from './Title.styles';

interface TitleProps {
    text: string;
}

export default function CustomTitle({ text }: TitleProps) {
    return <Title>{text}</Title>;
}
