import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
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
`;
