'use client';

import CustomTitle from '@/components/Title';
import {
    ContactContainer,
    ContactContent,
    ContactContentWrapper,
    FormWrapper,
    IconContainer,
    IconContainerWrapper,
    InformationsWrapper,
    SocialWrapper,
    Text,
    TextContainer,
    TextTitle,
} from './Contact.styles';
import { ClockIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { theme } from '@/styles/theme';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Form from '@/components/Form';

export default function ContactSection() {
    const phoneNumber = '5511962891098';
    const message =
        'Olá Dra. Julia Caroline, gostaria de agendar uma consulta!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
    )}`;

    return (
        <ContactContainer id="contact">
            <CustomTitle text="Contato" />
            <ContactContentWrapper>
                <InformationsWrapper>
                    <ContactContent>
                        <TextContainer>
                            <PhoneIcon size={28} color={theme.colors.accent} />
                            <Text>(11) 98765-4321</Text>
                        </TextContainer>
                        <TextContainer>
                            <MailIcon size={28} color={theme.colors.accent} />
                            <Text>emailprofissional@gmail.com</Text>
                        </TextContainer>
                        <TextContainer>
                            <ClockIcon size={28} color={theme.colors.accent} />
                            <Text>
                                Seg - Qui: 9h - 18h | Sex - Sáb: 11h - 16h
                            </Text>
                        </TextContainer>
                    </ContactContent>
                    <SocialWrapper>
                        <TextTitle>Redes Sociais</TextTitle>
                        <IconContainerWrapper>
                            <IconContainer
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram para contato com a Dra. Julia Caroline"
                            >
                                <FaInstagram size={30} />
                            </IconContainer>
                            <IconContainer
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram para contato com a Dra. Julia Caroline"
                            >
                                <FaWhatsapp size={30} />
                            </IconContainer>
                        </IconContainerWrapper>
                    </SocialWrapper>
                </InformationsWrapper>
                <FormWrapper>
                    <Form />
                </FormWrapper>
            </ContactContentWrapper>
        </ContactContainer>
    );
}
