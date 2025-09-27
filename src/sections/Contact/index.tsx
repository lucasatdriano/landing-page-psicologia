'use client';

import CustomTitle from '@/components/Title';
import {
    ContactContainer,
    ContactContent,
    ContactContentWrapper,
    IconContainer,
    IconContainerWrapper,
    Text,
    TextContainer,
    TextTitle,
} from './Contact.styles';
import { ClockIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { theme } from '@/styles/theme';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import Form from '@/components/Form';

export default function ContactSection() {
    return (
        <ContactContainer id="contact">
            <CustomTitle text="Contato" />
            <ContactContentWrapper>
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
                        <Text>Seg - Qui: 9h - 18h | Sex - Sáb: 11h - 16h</Text>
                    </TextContainer>
                    <TextTitle>Redes Sociais</TextTitle>
                    <IconContainerWrapper>
                        <IconContainer>
                            <FaInstagram size={30} />
                        </IconContainer>
                        <IconContainer>
                            <FaWhatsapp size={30} />
                        </IconContainer>
                    </IconContainerWrapper>
                </ContactContent>
                <Form />
            </ContactContentWrapper>
        </ContactContainer>
    );
}
