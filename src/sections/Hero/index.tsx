'use client';

import { useState, useEffect } from 'react';
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
    const [isDesktop, setIsDesktop] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMatch = () => setIsDesktop(window.innerWidth > 1024);
        
        checkMatch();
        window.addEventListener('resize', checkMatch);
        return () => window.removeEventListener('resize', checkMatch);
    }, []);

    const handleRedirectToWhatsApp = () => {
        const phoneNumber = '5511987654321';
        const message = 'Olá psicóloga, gostaria de agendar uma consulta!';
        const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodeURIComponent(
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

            {mounted && isDesktop && (
                <figure style={{ margin: 0 }}> 
                    <HeroImageWrapper>
                        <Image
                            src="/images/HeroImage.jpg"
                            alt="Psicóloga clínica de cabelos longos, vestindo camisa roxa, sentada sorrindo em uma poltrona escura em seu escritório de atendimento."
                            width={350}
                            height={250}
                            priority
                        />
                        <figcaption>
                            Imagem Ilustrativa - Foto: Alexander Mass / Unsplash
                        </figcaption>
                    </HeroImageWrapper>
                </figure>
            )}
        </HeroContainer>
    );
}
