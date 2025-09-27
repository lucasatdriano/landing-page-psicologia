import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 40px;
    z-index: 1000;
`;

export const WhatsAppLink = styled.a`
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease;
    filter: drop-shadow(2px 2px 8px ${theme.colors.shadow});

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(4px 4px 12px ${theme.colors.shadow});

        &::before {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px);
        }
    }

    &::before {
        content: 'Fale com a Dra. Julia Caroline';
        position: absolute;
        top: -35px;
        left: -15%;
        transform: translateX(-50%) translateY(10px);
        background: ${theme.colors.primary};
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: 1001;

        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid ${theme.colors.primary};
        }
    }
`;
