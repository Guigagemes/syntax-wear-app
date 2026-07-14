import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const onlyDigits = (value: string) => value.replace(/\D/g, "");

export const cepSchema = z.object({
    cep: z
        .string()
        .nonempty('CEP obrigatório')
        .transform(onlyDigits)
        .refine((v) => /^\d{8}$/.test(v), 'CEP inválido'),
});

export type CEPFormData = z.infer<typeof cepSchema>;



export const useCEPForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }, reset
    } = useForm<CEPFormData>({
        resolver: zodResolver(cepSchema),
        mode: "onBlur", // valida ao sair do campo
        defaultValues: { cep: "" },
        criteriaMode: "all"

    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        reset
    }

}

