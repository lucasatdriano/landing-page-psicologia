'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhatsappButton from '@/components/WhatsappButton';
import AboutSection from '@/sections/About';
import ArticlesSection from '@/sections/Articles';
import ContactSection from '@/sections/Contact';
import HeroSection from '@/sections/Hero';
import TestimonialsSection from '@/sections/Testimonials';

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <ArticlesSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
            <WhatsappButton />
        </>
    );
}
