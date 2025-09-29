import { theme } from '@/styles/theme';
import styled from 'styled-components';

type NavListProps = {
    $hasMobileNav?: boolean;
};

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const NavList = styled.ul<NavListProps>`
    list-style: none;
    display: flex;
    gap: 2rem;

    ${({ $hasMobileNav }) =>
        $hasMobileNav &&
        `
    @media (max-width: 1024px) {
        display: none;
        }
        `}

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
    font-family: ${theme.fonts.main};
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.text};
    text-decoration: none;
    font-weight: 400;
    transition: all 0.2s;
    position: relative;
    padding: 0 0 5px;

    &:hover {
        color: ${theme.colors.accent};
        font-weight: bold;
    }

    &.active {
        color: ${theme.colors.accent};
        font-weight: bold;
    }

    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: ${theme.colors.accent};
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    &:hover:after {
        width: 100%;
    }

    &.active:after {
        width: 100%;
    }

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
    }

    @media (max-width: 400px) {
        font-size: calc(${theme.fontSizes.large} * 0.7);
    }
`;

export const Hamburger = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
        display: block;
        height: 3px;
        width: 100%;
        background: ${theme.colors.text};
        border-radius: 2px;
        transition: all 0.3s ease;
    }

    &.open span:nth-child(1) {
        transform: rotate(45deg) translate(7px, 5px);
    }
    &.open span:nth-child(2) {
        opacity: 0;
    }
    &.open span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -5px);
    }

    @media (max-width: 1024px) {
        display: flex;
        position: absolute;
        right: 1rem;
    }
`;

export const MobileMenuWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    position: fixed;
    top: 0;
    left: 100%;
    width: 100svw;
    height: 100svh;
    background: ${theme.colors.shadow};
    transition: left 0.3s ease;
    z-index: 500;

    &.open {
        left: 0;
    }

    @media (min-width: 1025px) {
        display: none;
    }
`;

export const MobileMenu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    top: 0;
    left: 100%;
    width: 285px;
    height: 100vh;
    background: ${theme.colors.background};
    padding: 5rem 2rem;
    transition: left 0.3s ease;
    z-index: 1000;

    &.open {
        left: 0;
    }

    @media (min-width: 1025px) {
        display: none;
    }
`;
