'use client';

import Image from 'next/image';
import { ButtonContainer, WhatsAppLink } from './WhatsappButton.styles';

export default function WhatsappButton() {
    const phoneNumber = '5511962891098';
    const message =
        'Olá Dra. Julia Caroline, gostaria de agendar uma consulta!';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message,
    )}`;

    return (
        <ButtonContainer>
            <WhatsAppLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp com a Dra. Julia Caroline"
            >
                <Image
                    src="/icons/WhatsappIcon.svg"
                    alt="Ícone do WhatsApp para conversar com a psicóloga"
                    width={65}
                    height={65}
                />
            </WhatsAppLink>
        </ButtonContainer>
    );
}
