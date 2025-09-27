'use client';

import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, NavList } from './Navigation.styles';

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');

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

    return (
        <Nav>
            <NavList>
                <NavItem>
                    <NavLink
                        href="#home"
                        className={activeSection === 'home' ? 'active' : ''}
                    >
                        Início
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#about"
                        className={activeSection === 'about' ? 'active' : ''}
                    >
                        Sobre
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#articles"
                        className={activeSection === 'articles' ? 'active' : ''}
                    >
                        Artigos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#testimonials"
                        className={
                            activeSection === 'testimonials' ? 'active' : ''
                        }
                    >
                        Depoimentos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        href="#contact"
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        Contato
                    </NavLink>
                </NavItem>
            </NavList>
        </Nav>
    );
}
