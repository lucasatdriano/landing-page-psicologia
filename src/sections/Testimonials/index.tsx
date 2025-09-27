'use client';

import CustomTitle from '@/components/Title';
import {
    TestimonialsContainer,
    TestimonialsContent,
} from './Testimonials.styles';
import CardTestimonial from '@/components/CardTestimonial';

export default function TestimonialsSection() {
    return (
        <TestimonialsContainer id="testimonials">
            <CustomTitle text="Depoimentos" />
            <TestimonialsContent>
                <CardTestimonial
                    testimonialText="A Dra. Julia me ajudou a superar minha ansiedade de uma forma que nunca imaginei possível. Suas técnicas são eficazes e ela tem uma escuta verdadeiramente acolhedora."
                    authorName="Patrícia de Souza"
                />
                <CardTestimonial
                    testimonialText="Recomendo a Dra. Julia para todos que precisam de apoio psicológico. Profissional extremamente competente e com uma capacidade incrível de criar um ambiente seguro."
                    authorName="Lucas Adriano"
                />
                <CardTestimonial
                    testimonialText="As sessões com a Dra. Julia transformaram minha vida. Aprendi a lidar melhor com meu estresse e hoje tenho ferramentas para enfrentar desafios que antes me paralisavam."
                    authorName="Maria dos Santos"
                />
            </TestimonialsContent>
        </TestimonialsContainer>
    );
}
