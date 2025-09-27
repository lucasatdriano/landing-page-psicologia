'use client';

import Navigation from '../Navigation';
import { CopyrightText, FooterContainer, Line, Logo } from './Footer.styles';

export default function Footer() {
    return (
        <FooterContainer>
            <Logo>Dra. Julia Caroline</Logo>
            <Navigation />
            <Line />
            <CopyrightText>
                © 2025 Julia Caroline - Psicóloga Clínica. Todos os direitos
                reservado.
            </CopyrightText>
        </FooterContainer>
    );
}
