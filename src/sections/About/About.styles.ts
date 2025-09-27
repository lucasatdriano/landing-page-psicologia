import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const AboutContainer = styled.section`
    scroll-margin-top: 75px;
    width: 100%;
    display: grid;
    justify-content: space-between;
    padding: 1rem 15rem;
    align-items: center;
    text-align: center;
`;

export const AboutContentWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 2rem 0 1rem;
    justify-content: space-between;
    align-items: center;
`;

export const AboutImageWrapper = styled.div`
    overflow: hidden;
    grid-column: span 3;
    border-radius: 15px;
    height: 300px;
    width: fit-content;
`;

export const AboutContent = styled.div`
    display: grid;
    grid-column: span 2;
    align-items: center;
    text-align: left;
`;

export const Text = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.base};
    margin-bottom: 1rem;
`;
