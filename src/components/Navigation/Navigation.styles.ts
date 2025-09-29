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
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    background: ${theme.colors.shadow};
    transform: translateX(100%);
    transition: transform 0.25s ease;
    pointer-events: none;
    z-index: 999;

    &.open {
        transform: translateX(0);
        pointer-events: auto;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const MobileMenu = styled.ul`
    list-style: none;
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    width: fit-content;
    height: 100svh;
    background: ${theme.colors.background};
    padding: 5rem 1.5rem;
    z-index: 1000;
    box-shadow: -6px 0 20px ${theme.colors.shadow};

    @media (min-width: 1024px) {
        display: none;
    }
`;
