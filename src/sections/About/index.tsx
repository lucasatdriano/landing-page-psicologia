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
                        src="/images/HeroImage.jpg"
                        alt="Psicóloga clínica de cabelos longos, vestindo camisa roxa, sentada sorrindo em uma poltrona escura em seu escritório de atendimento."
                        width={350}
                        height={250}
                        priority
                        className="img-mobile"
                    />
                    <Image
                        src="/images/AboutImage.jpg"
                        alt="Consultório de psicologia aconchegante com duas poltronas reclináveis cinzas sobre um tapete geométrico e paredes de cimento queimado."
                        width={490}
                        height={300}
                        priority
                        className="img-desktop"
                    />
                </AboutImageWrapper>
                <AboutContent>
                    <Text>
                        Sou psicóloga clínica com foco em promover bem-estar
                        emocional e qualidade de vida. Meu trabalho é pautado na
                        escuta empática, no respeito à individualidade e na
                        busca por caminhos que favoreçam o autoconhecimento.
                    </Text>
                    <Text>
                        Atuo com base em abordagens terapêuticas contemporâneas,
                        adaptadas às necessidades e aos objetivos de cada
                        pessoa, sempre priorizando um espaço acolhedor e livre
                        de julgamentos.
                    </Text>
                    <Text>
                        Acredito que o processo terapêutico é uma jornada de
                        crescimento e transformation, e meu papel é caminhar ao
                        lado do paciente, oferecendo apoio, orientação e
                        ferramentas para o desenvolvimento pessoal.
                    </Text>
                </AboutContent>
            </AboutContentWrapper>
        </AboutContainer>
    );
}
