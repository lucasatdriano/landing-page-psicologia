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
`;

export const ContactContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 1rem;
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0 1rem;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: left;
    gap: 1rem;
`;

export const Text = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.large};
    font-weight: 500;
`;

export const TextTitle = styled.h3`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: 600;
    text-align: left;
`;

export const IconContainerWrapper = styled.div`
    display: flex;
    align-items: left;
    gap: 1rem;
    padding: 0 2rem;
`;

export const IconContainer = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 8px 10px;
    border: 2px solid ${theme.colors.text};
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};
        transform: translateY(-2px);
        box-shadow: 4px 4px 12px ${theme.colors.shadow};
    }
`;
