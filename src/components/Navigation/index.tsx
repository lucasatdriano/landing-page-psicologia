'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
    Nav,
    NavItem,
    NavLink,
    NavList,
    Hamburger,
    MobileMenu,
    MobileMenuWrapper,
} from './Navigation.styles';
import CustomButton from '../Button';

type NavigationProps = {
    hasMobileNav?: boolean;
};

export default function Navigation({ hasMobileNav = true }: NavigationProps) {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const id = 'mobile-menu-portal';
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('div');
            el.id = id;
            document.body.appendChild(el);
        }
        setPortalEl(el);
        return () => {
            if (el && el.parentNode) el.parentNode.removeChild(el);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'home',
                'about',
                'articles',
                'testimonials',
                'contact',
            ];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleRedirectToWhatsApp = () => {
        const phoneNumber = '5511987654321';
        const message =
            'Olá Dra. Julia Caroline, gostaria de agendar uma consulta!';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message,
        )}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    const handleCloseMenu = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setIsOpen(false);
    };

    const handleMenuClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            <Nav>
                {hasMobileNav && (
                    <Hamburger
                        onClick={() => setIsOpen((s) => !s)}
                        className={isOpen ? 'open' : ''}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    >
                        <span />
                        <span />
                        <span />
                    </Hamburger>
                )}

                <NavList $hasMobileNav={hasMobileNav}>
                    {[
                        'home',
                        'about',
                        'articles',
                        'testimonials',
                        'contact',
                    ].map((section) => (
                        <NavItem key={section}>
                            <NavLink
                                href={`#${section}`}
                                className={
                                    activeSection === section ? 'active' : ''
                                }
                            >
                                {section === 'home'
                                    ? 'Início'
                                    : section === 'about'
                                    ? 'Sobre'
                                    : section === 'articles'
                                    ? 'Artigos'
                                    : section === 'testimonials'
                                    ? 'Depoimentos'
                                    : 'Contato'}
                            </NavLink>
                        </NavItem>
                    ))}
                </NavList>
            </Nav>

            {portalEl &&
                hasMobileNav &&
                createPortal(
                    <MobileMenuWrapper
                        className={isOpen ? 'open' : ''}
                        onClick={handleCloseMenu}
                        aria-hidden={!isOpen}
                    >
                        <MobileMenu
                            className={isOpen ? 'open' : ''}
                            onClick={handleMenuClick}
                        >
                            {[
                                'home',
                                'about',
                                'articles',
                                'testimonials',
                                'contact',
                            ].map((section) => (
                                <NavItem key={section}>
                                    <NavLink
                                        href={`#${section}`}
                                        onClick={handleCloseMenu}
                                        className={
                                            activeSection === section
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        {section === 'home'
                                            ? 'Início'
                                            : section === 'about'
                                            ? 'Sobre'
                                            : section === 'articles'
                                            ? 'Artigos'
                                            : section === 'testimonials'
                                            ? 'Depoimentos'
                                            : 'Contato'}
                                    </NavLink>
                                </NavItem>
                            ))}

                            <NavItem>
                                <CustomButton
                                    text="Agendar Consulta"
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleRedirectToWhatsApp();
                                    }}
                                />
                            </NavItem>
                        </MobileMenu>
                    </MobileMenuWrapper>,
                    portalEl,
                )}
        </>
    );
}
