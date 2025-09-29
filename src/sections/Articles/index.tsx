'use client';

import CustomTitle from '@/components/Title';
import { ArticlesContainer, ArticlesContent } from './Articles.styles';
import CardArticle from '@/components/CardArticle';

export default function ArticlesSection() {
    return (
        <ArticlesContainer id="articles">
            <CustomTitle text="Artigos Úteis" />
            <ArticlesContent>
                <CardArticle
                    image="/images/AnxietyImage.jpg"
                    imageHeight={300}
                    imageWidth={439}
                    title="Como lidar com a Ansiedade"
                    description="Artigo abrangente sobre tipificação, características, manifestações clínicas e tratamentos disponíveis para transtornos de ansiedade, com enfoque no mundo pós-moderno."
                    href="#"
                />
                <CardArticle
                    image="/images/PsychologistImage.jpg"
                    imageHeight={300}
                    imageWidth={571}
                    title="Por que fazer terapia em 2025?"
                    description="Artigo abrangente sobre tipificação, características, manifestações clínicas e tratamentos disponíveis para transtornos de ansiedade, com enfoque no mundo pós-moderno."
                    href="#"
                />
                <CardArticle
                    image="/images/DepressionImage.jpg"
                    imageHeight={300}
                    imageWidth={535}
                    title="Como lidar com a Depressão"
                    description="Artigo abrangente sobre tipificação, características, manifestações clínicas e tratamentos disponíveis para transtornos de ansiedade, com enfoque no mundo pós-moderno."
                    href="#"
                />
            </ArticlesContent>
        </ArticlesContainer>
    );
}
