'use client';

import CustomButton from '@/components/Button';
import {
    HeroContainer,
    Headline,
    Subheadline,
    HeroContent,
    HeroImageWrapper,
} from './Hero.styles';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <HeroContainer id="home">
            <HeroContent>
                <Headline>Cuidar da sua mente é cuidar da sua vida</Headline>
                <Subheadline>
                    Psicoterapia individual e online com foco no seu bem-estar
                    emocional e qualidade de vida. Atendimento humanizado e
                    especializado.
                </Subheadline>
                <CustomButton text={'Agendar Consulta'} />
            </HeroContent>
            <HeroImageWrapper>
                <Image
                    src="/images/HeroImage.jpg"
                    alt="Imagem Demonstrativa"
                    width={400}
                    height={300}
                />
            </HeroImageWrapper>
        </HeroContainer>
    );
}
