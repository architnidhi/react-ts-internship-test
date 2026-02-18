import { useState, ChangeEvent } from 'react';

interface UseFormReturn<T> {
    formData: T;
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    resetForm: () => void;
    setFormData: React.Dispatch<React.SetStateAction<T>>;
}

export function useForm<T>(initialState: T): UseFormReturn<T> {
    const [formData, setFormData] = useState<T>(initialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: finalValue,
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return { formData, handleChange, resetForm, setFormData };
}