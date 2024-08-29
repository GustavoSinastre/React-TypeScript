import React from 'react';

interface InputFieldLoginProps {
    id: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    className?: string; // Adiciona className como opcional
}

export const InputFieldLogin: React.FC<InputFieldLoginProps> = ({
    id,
    type,
    name,
    value,
    onChange,
    label,
    className = '', // Define className com valor padrão vazio
}) => {
    return (
        <div className={`form-group ${className}`}>
            <label htmlFor={id}>{label}:</label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
                className="input-field" // Aplica uma classe padrão
            />
        </div>
    );
};
