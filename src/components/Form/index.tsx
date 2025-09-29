'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomButton from '../Button';
import {
    FormContainer,
    InputContainer,
    Title,
    SuccessMessage,
    ErrorMessage,
} from './Form.styles';
import InputTextArea from '../InputTextArea';
import InputText from '../InputText';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                setIsSuccess(false);
            }, 10 * 1000); // 10 segundos

            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 20 * 1000); // 20 segundos

            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setIsSuccess(false);

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    message: formData.message,
                    time: new Date().toLocaleString('pt-BR'),
                    email: formData.email,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
            );

            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('❌ Erro completo:', error);
            setError('Template não encontrado. Use a versão Gmail abaixo.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (isSuccess) setIsSuccess(false);
        if (error) setError('');
    };

    const openGmail = () => {
        const subject = `Consulta - Mensagem de ${formData.name}`;
        const body = `Nome: ${formData.name}\nEmail: ${
            formData.email
        }\nData: ${new Date().toLocaleString('pt-BR')}\n\nMensagem:\n${
            formData.message
        }`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=emailprofissional@gmail.com&su=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');

        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <Title>Envie um E-mail</Title>

                {isSuccess && (
                    <SuccessMessage>
                        ✅ Mensagem enviada com sucesso! Em breve retornaremos
                    </SuccessMessage>
                )}

                {error && (
                    <div>
                        <ErrorMessage>❌ {error}</ErrorMessage>
                        <CustomButton
                            type="button"
                            text={
                                isLoading ? 'Enviando...' : 'Enviar pelo Gmail'
                            }
                        />
                    </div>
                )}

                <InputText
                    name="name"
                    label="Nome Completo"
                    placeholder="Digite seu nome"
                    id="InputName"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                    disabled={isLoading}
                />

                <InputText
                    type="email"
                    name="email"
                    label="E-mail"
                    placeholder="seu@email.com"
                    id="InputEmail"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={50}
                    required
                    disabled={isLoading}
                />

                <InputTextArea
                    name="message"
                    label="Mensagem"
                    placeholder="Digite sua mensagem..."
                    id="InputMessage"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    disabled={isLoading}
                />
            </InputContainer>

            <CustomButton
                type="submit"
                text={isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            />
        </FormContainer>
    );
}
