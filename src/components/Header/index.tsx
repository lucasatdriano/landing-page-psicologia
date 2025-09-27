'use client';

import CustomButton from '../Button';
import Navigation from '../Navigation';
import { HeaderContainer, Logo } from './Header.styles';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>Dra. Julia Caroline</Logo>
            <Navigation />
            <CustomButton text={'Agendar Consulta'} />
        </HeaderContainer>
    );
}
