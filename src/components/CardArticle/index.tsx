'use client';

import Image from 'next/image';
import CustomButton from '../Button';
import Navigation from '../Navigation';
import {
    ArticleDescription,
    ArticleLink,
    ArticleTitle,
    CardContainer,
    CardImageWrapper,
} from './CardArticle.styles';

interface CardArticleProps {
    image: string;
    imageHeight: number;
    imageWidth: number;
    imageDescription?: string;
    href?: string;
    title: string;
    description: string;
}

export default function CardArticle({
    image,
    imageHeight,
    imageWidth,
    imageDescription = 'Imagem Ilustrativa',
    href,
    title,
    description,
}: CardArticleProps) {
    return (
        <CardContainer>
            <CardImageWrapper>
                <Image
                    src={image}
                    alt={imageDescription}
                    height={imageHeight}
                    width={imageWidth}
                />
            </CardImageWrapper>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleDescription>{description}</ArticleDescription>
            <ArticleLink href={href}>Ler Mais</ArticleLink>
        </CardContainer>
    );
}
