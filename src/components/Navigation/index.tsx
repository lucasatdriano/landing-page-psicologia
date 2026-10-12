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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleRedirectToWhatsApp = () => {
        const phoneNumber = '5511987654321';
        const message = 'Olá psicóloga, gostaria de agendar uma consulta!';
        const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodeURIComponent(
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

    const sections = ['home', 'about', 'articles', 'testimonials', 'contact'];

    const getSectionLabel = (section: string) => {
        const labels: Record<string, string> = {
            home: 'Início',
            about: 'Sobre',
            articles: 'Artigos',
            testimonials: 'Depoimentos',
            contact: 'Contato',
        };
        return labels[section] || section;
    };

    return (
        <>
            <Nav aria-label="Menu Principal">
                {hasMobileNav && (
                    <Hamburger
                        onClick={() => setIsOpen((s) => !s)}
                        $isOpen={isOpen}
                        aria-label="Abrir menu de navegação"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav-list"
                    >
                        <span />
                        <span />
                        <span />
                    </Hamburger>
                )}

                <NavList $hasMobileNav={hasMobileNav}>
                    {sections.map((section) => {
                        const isActive = activeSection === section;
                        return (
                            <NavItem key={section}>
                                <NavLink
                                    href={`#${section}`}
                                    className={isActive ? 'active' : ''}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {getSectionLabel(section)}
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </NavList>
            </Nav>

            {portalEl &&
                hasMobileNav &&
                createPortal(
                    <MobileMenuWrapper
                        $isOpen={isOpen}
                        onClick={handleCloseMenu}
                        style={{ display: isOpen ? 'flex' : 'none' }}
                    >
                        <MobileMenu
                            id="mobile-nav-list"
                            className={isOpen ? 'open' : ''}
                            onClick={handleMenuClick}
                            aria-label="Menu Mobile"
                        >
                            {sections.map((section) => {
                                const isActive = activeSection === section;
                                return (
                                    <NavItem key={section}>
                                        <NavLink
                                            href={`#${section}`}
                                            onClick={handleCloseMenu}
                                            className={isActive ? 'active' : ''}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            {getSectionLabel(section)}
                                        </NavLink>
                                    </NavItem>
                                );
                            })}

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
