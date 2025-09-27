'use client';

import {
    ArticleDescription,
    ArticleTitle,
} from '../CardArticle/CardArticle.styles';
import { CardContainer, Name, Text } from './CardTestimonial.styles';

interface CardTestimonialProps {
    testimonialText: string;
    authorName: string;
}

export default function CardTestimonial({
    testimonialText,
    authorName,
}: CardTestimonialProps) {
    return (
        <CardContainer>
            <Text>"{testimonialText}"</Text>
            <Name>— {authorName}</Name>
        </CardContainer>
    );
}
