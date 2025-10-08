'use client';

import Navigation from '../Navigation';
import { CopyrightText, FooterContainer, Line, Logo } from './Footer.styles';

export default function Footer() {
    return (
        <FooterContainer>
            <Logo href="#home">Psicóloga</Logo>
            <Navigation hasMobileNav={false} />
            <Line />
            <CopyrightText>
                © 2025 Psicologia - Psicóloga Clínica. Todos os direitos
                reservado.
            </CopyrightText>
        </FooterContainer>
    );
}
