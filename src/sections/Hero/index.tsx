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
    const handleRedirectToWhatsApp = () => {
        const phoneNumber = '5511962891098';
        const message =
            'Olá Dra. Julia Caroline, gostaria de agendar uma consulta!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message,
        )}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <HeroContainer id="home">
            <HeroContent>
                <Headline>Cuidar da sua mente é cuidar da sua vida</Headline>
                <Subheadline>
                    Psicoterapia individual e online com foco no seu bem-estar
                    emocional e qualidade de vida. Atendimento humanizado e
                    especializado.
                </Subheadline>
                <CustomButton
                    text={'Agendar Consulta'}
                    onClick={handleRedirectToWhatsApp}
                />
            </HeroContent>
            <HeroImageWrapper>
                <Image
                    src="/images/HeroImage.jpg"
                    alt="Imagem Demonstrativa"
                    width={350}
                    height={250}
                />
            </HeroImageWrapper>
        </HeroContainer>
    );
}
