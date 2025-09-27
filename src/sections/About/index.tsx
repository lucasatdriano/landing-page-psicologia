'use client';

import Image from 'next/image';
import {
    AboutContainer,
    AboutContent,
    AboutContentWrapper,
    AboutImageWrapper,
    Text,
} from './About.styles';
import CustomTitle from '@/components/Title';

export default function AboutSection() {
    return (
        <AboutContainer id="about">
            <CustomTitle text="Sobre Mim" />
            <AboutContentWrapper>
                <AboutImageWrapper>
                    <Image
                        src="/images/AboutImage.jpg"
                        alt="Imagem Demonstrativa"
                        width={700}
                        height={300}
                    />
                </AboutImageWrapper>
                <AboutContent>
                    <Text>
                        Sou a Dra. Julia Caroline, psicóloga clínica com
                        especialização em Terapia Cognitivo-Comportamental. Com
                        mais de 10 anos de experiência, meu objetivo é oferecer
                        um atendimento humanizado e eficaz, ajudando meus
                        pacientes a superarem desafios emocionais e alcançarem
                        maior qualidade de vida.
                    </Text>
                    <Text>
                        Acredito que cada pessoa é única e merece um tratamento
                        personalizado, por isso utilizo abordagens baseadas em
                        evidências científicas adaptadas às necessidades
                        individuais de cada paciente.
                    </Text>
                    <Text>
                        Formada pela Universidade Nove de Julho (UNINOVE) com
                        mestrado em Psicologia Clínica, mantenho-me
                        constantemente atualizada através de cursos e
                        especializações nas mais modernas técnicas terapêuticas.
                    </Text>
                </AboutContent>
            </AboutContentWrapper>
        </AboutContainer>
    );
}
