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
                    description="Descubra estratégias práticas e terapêuticas para compreender e controlar a ansiedade, aprendendo a reconhecer gatilhos e fortalecer seu bem-estar emocional."
                    href="#"
                />
                <CardArticle
                    image="/images/PsychologistImage.jpg"
                    imageHeight={300}
                    imageWidth={571}
                    title="Por que fazer terapia em 2025?"
                    description="Entenda como a terapia se tornou ainda mais essencial nos dias atuais, auxiliando no autoconhecimento, no equilíbrio emocional e na construção de uma vida mais leve e saudável."
                    href="#"
                />
                <CardArticle
                    image="/images/DepressionImage.jpg"
                    imageHeight={300}
                    imageWidth={535}
                    title="Como lidar com a Depressão"
                    description="Saiba como identificar sinais de depressão e descubra caminhos terapêuticos eficazes para enfrentar esse desafio com acolhimento, empatia e tratamento adequado."
                    href="#"
                />
            </ArticlesContent>
        </ArticlesContainer>
    );
}
