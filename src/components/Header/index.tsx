'use client';

import CustomButton from '../Button';
import Navigation from '../Navigation';
import { HeaderContainer, Logo, ButtonWrapper } from './Header.styles';

export default function Header() {
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
        <HeaderContainer>
            <Logo href="#home">Dra. Julia Caroline</Logo>
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
