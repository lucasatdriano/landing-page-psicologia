import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 7rem 15rem 2rem;
    align-items: center;
    text-align: center;
`;

export const HeroImageWrapper = styled.div`
    overflow: hidden;
    height: 300px;
    width: 750px;
    border-radius: 15px;
`;

export const HeroContent = styled.div`
    padding: 2rem 15rem;
    height: 100%;
    display: grid;
    align-items: center;
    text-align: center;
`;

export const Headline = styled.h1`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.headline};
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const Subheadline = styled.p`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.large};
    margin-bottom: 2rem;
`;
