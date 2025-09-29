import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContactContainer = styled.section`
    scroll-margin-top: 75px;
    width: 100%;
    display: grid;
    padding: 1rem 15rem;
    margin-bottom: 2rem;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.secondary};

    @media (max-width: 1350px) {
        padding: 1rem 10rem;
    }

    @media (max-width: 1024px) {
        padding: 1rem 5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 2rem;
    }
`;

export const ContactContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 1rem;
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const FormWrapper = styled.div`
    width: 40%;
    order: 2;

    @media (max-width: 1350px) {
        width: 50%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        order: 1;
    }
`;

export const InformationsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    order: 1;

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        order: 2;
        width: 100%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 1rem;
`;

export const Text = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.large} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.large} * 0.8);
    }
`;

export const TextTitle = styled.h3`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: 600;
    text-align: left;

    @media (max-width: 1350px) {
        font-size: calc(${theme.fontSizes.title} * 0.9);
    }

    @media (max-width: 768px) {
        font-size: calc(${theme.fontSizes.title} * 0.8);
    }
`;

export const IconContainerWrapper = styled.div`
    display: flex;
    align-items: left;
    gap: 1rem;
    padding: 0 2rem;
`;

export const IconContainer = styled.a`
    width: fit-content;
    padding: 8px 10px;
    border: 2px solid ${theme.colors.text};
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${theme.colors.text};

    &:hover {
        color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};
        transform: translateY(-2px);
        box-shadow: 4px 4px 12px ${theme.colors.shadow};
    }

    @media (max-width: 768px) {
        padding: 6px 10px;

        * {
            width: 24px;
        }
    }

    @media (max-width: 480px) {
        padding: 4px 10px;

        * {
            width: 20px;
        }
    }
`;
