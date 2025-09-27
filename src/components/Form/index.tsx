'use client';

import { useState } from 'react';
import CustomButton from '../Button';
import { FormContainer, InputContainer, Title } from './Form.styles';
import InputTextArea from '../InputTextArea';
import InputText from '../InputText';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <Title>Envie um E-mail</Title>

                <InputText
                    name="name"
                    label="Nome Completo"
                    placeholder="Digite seu nome"
                    id="InputName"
                    value={formData.name}
                    onChange={handleChange}
                    max-length={100}
                    required
                />

                <InputText
                    type="email"
                    name="email"
                    label="E-mail"
                    placeholder="seu@email.com"
                    id="InputEmail"
                    value={formData.email}
                    onChange={handleChange}
                    max-length={50}
                    required
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
                />
            </InputContainer>

            <CustomButton type="submit" text={'Enviar Mensagem'} />
        </FormContainer>
    );
}
