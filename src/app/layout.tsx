import type { Metadata } from 'next';
import { Raleway, Lora } from 'next/font/google';
import GlobalStyle from '@/styles/GlobalStyle';
import ThemeProviderWrapper from '@/providers/ThemeProviderWrapper';

const lora = Lora({
    variable: '--font-lora',
    subsets: ['latin'],
});

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Psicóloga Julia Caroline',
    description: 'Landing Page de Psicologia',
    icons: {
        icon: 'icons/BrainIcon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`${lora.variable} ${raleway.variable}`}>
                <GlobalStyle />
                <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
            </body>
        </html>
    );
}
