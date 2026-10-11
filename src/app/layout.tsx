import type { Metadata } from 'next';
import { Raleway, Lora } from 'next/font/google';
import StyledComponentsRegistry from '@/providers/StyledComponentsRegistry';
import ThemeProviderWrapper from '@/providers/ThemeProviderWrapper';

const lora = Lora({
    variable: '--font-lora',
    subsets: ['latin'],
});

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

const siteUrl = 'https://psicologia-landing.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: 'Psicóloga | Psicoterapia Online e Presencial',

    description:
        'Atendimento psicológico online e presencial, com acolhimento e cuidado individualizado para promover saúde mental e bem-estar.',

    keywords: [
        'Psicóloga online',
        'Psicoterapia',
        'Terapia cognitivo-comportamental',
        'Atendimento psicológico',
        'Saúde mental',
    ],

    authors: [
        {
            name: 'Lucas Adriano Tavares Gonçalves',
            url: 'https://lucasadriano.vercel.app/',
        },
    ],
    creator: 'Lucas Adriano Tavares Gonçalves',

    icons: {
        icon: '/icons/BrainIcon.svg',
    },

    verification: {
        google: "L0QTXfktfAyQAnOjRxGDvG7vuiMOgPN8LQ8ocqGZ9SU"
    },

    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteUrl,
        siteName: 'Psicóloga',
        title: 'Psicóloga | Psicoterapia Online e Presencial',
        description:
            'Atendimento psicológico com acolhimento e cuidado individualizado. Conheça os serviços e agende sua sessão.',
        images: [
            {
                url: '/images/capaReadMe.jpg',
                width: 1200,
                height: 630,
                alt: 'Apresentação da landing page de psicologia',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Psicóloga | Psicoterapia Online e Presencial',
        description:
            'Atendimento psicológico com acolhimento e cuidado individualizado.',
        images: ['/images/capaReadMe.jpg'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={`${lora.variable} ${raleway.variable}`}>
                <StyledComponentsRegistry>
                    <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}