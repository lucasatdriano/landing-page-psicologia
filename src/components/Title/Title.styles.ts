import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Title = styled.h2`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};

    @media (max-width: 1024px) {
        font-size: calc(${theme.fontSizes.title} * 0.9);
    }

    @media (max-width: 480px) {
        font-size: calc(${theme.fontSizes.title} * 0.8);
    }
`;
