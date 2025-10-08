'use client';

import Image from 'next/image';
import {
    ButtonContainer,
    WhatsAppLink,
    ImageWrapper,
} from './WhatsappButton.styles';

export default function WhatsappButton() {
    const phoneNumber = '5511987654321';
    const message = 'Olá psicóloga gostaria de agendar uma consulta!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
    )}`;

    return (
        <ButtonContainer>
            <WhatsAppLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp com a psicóloga"
            >
                <ImageWrapper>
                    <Image
                        src="/icons/WhatsappIcon.svg"
                        alt="Ícone do WhatsApp para conversar com a psicóloga"
                        width={65}
                        height={65}
                    />
                </ImageWrapper>
            </WhatsAppLink>
        </ButtonContainer>
    );
}
