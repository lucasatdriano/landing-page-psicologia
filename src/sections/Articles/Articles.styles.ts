import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ArticlesContainer = styled.section`
    scroll-margin-top: 75px;
    width: 100%;
    display: grid;
    padding: 1rem 15rem;
    align-items: center;
    text-align: center;

    @media (max-width: 1350px) {
        padding: 0 10rem 2rem;
    }

    @media (max-width: 1024px) {
        padding: 0 5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 0 2rem 1rem;
    }
`;

export const ArticlesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0 1rem;
    gap: 2rem;

    @media (max-width: 768px) {
        display: grid;
        gap: 1rem;
        padding: 1rem 0;
    }
`;
