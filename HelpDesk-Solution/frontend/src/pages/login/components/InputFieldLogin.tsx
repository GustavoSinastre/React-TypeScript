import React from 'react';

interface InputFieldLoginProps {
    id: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

export const InputFieldLogin: React.FC<InputFieldLoginProps> = ({ id, type, name, value, onChange, label }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}:</label>
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};
