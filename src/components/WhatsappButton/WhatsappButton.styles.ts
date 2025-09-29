import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 200;

    @media (max-width: 1024px) {
        bottom: 15px;
        right: 20px;
    }

    @media (max-width: 768px) {
        bottom: 12px;
        right: 15px;
    }

    @media (max-width: 480px) {
        bottom: 10px;
        right: 12px;
    }
`;

export const WhatsAppLink = styled.a`
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s ease;
    filter: drop-shadow(2px 2px 8px ${theme.colors.shadow});
    width: 65px;
    height: 65px;

    @media (max-width: 1024px) {
        width: 55px;
        height: 55px;
    }

    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 45px;
        height: 45px;
    }

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(4px 4px 12px ${theme.colors.shadow});

        &::before {
            opacity: 1;
            transform: translateX(-50%) translateY(-10px);
        }
    }

    &::before {
        content: 'Fale com a Dra. Julia';
        position: absolute;
        top: -35px;
        left: -20%;
        transform: translateX(-50%) translateY(10px);
        background: ${theme.colors.primary};
        font-size: calc(${theme.fontSizes.base} * 0.9);
        color: ${theme.colors.background};
        padding: 8px 12px;
        border-radius: 6px;
        font-weight: 500;
        white-space: nowrap;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
        z-index: 1001;

        @media (max-width: 768px) {
            font-size: calc(${theme.fontSizes.base} * 0.8);
            padding: 6px 10px;
            left: -50%;
            top: -30px;
        }

        @media (max-width: 480px) {
            padding: 5px 8px;
            top: -28px;
        }

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

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
