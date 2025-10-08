'use client';

import CustomButton from '../Button';
import Navigation from '../Navigation';
import { HeaderContainer, Logo, ButtonWrapper } from './Header.styles';

export default function Header() {
    const handleRedirectToWhatsApp = () => {
        const phoneNumber = '5511987654321';
        const message = 'Olá psicóloga, gostaria de agendar uma consulta!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message,
        )}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <HeaderContainer>
            <Logo href="#home">Psicóloga</Logo>
            <Navigation />
            <ButtonWrapper>
                <CustomButton
                    text={'Agendar Consulta'}
                    onClick={handleRedirectToWhatsApp}
                />
            </ButtonWrapper>
        </HeaderContainer>
    );
}
