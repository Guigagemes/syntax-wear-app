import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidCPF } from "../../Utils/cpf-validator";

export const registerUserFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "Primeiro nome é obrigatório")
      .trim(),

    lastName: z
      .string()
      .min(1, "Último nome é obrigatório")
      .trim(),

    email: z
      .email("E-mail inválido"),

    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres"),

    confirmPassword: z
      .string()
      .min(1, "Confirmação de senha é obrigatória"),

    cpf: z
      .string()
      .min(1, "CPF é obrigatório")
      .refine(isValidCPF, "CPF inválido"),

    birthDate: z
      .string()
      .min(1, "Data de nascimento é obrigatória")
      .refine(
        (value) => {
          const date = new Date(value);

          if (Number.isNaN(date.getTime())) {
            return false;
          }

          const today = new Date();

          return date <= today;
        },
        {
          message: "Data de nascimento inválida",
        }
      ),

    phone: z
      .string()
      .nonempty("Telefone é obrigatótio")

  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;



export const useRegisterForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur", // valida ao sair do campo
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      cpf: "",
      birthDate: "",
    },
    criteriaMode: "all"

  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset
  }

}