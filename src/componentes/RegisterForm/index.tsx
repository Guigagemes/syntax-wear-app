import { useRegisterForm } from "./register-form-schema"

export const RegisterForm = () => {

    const { register, errors, isSubmitting } = useRegisterForm()

    return (
        <form className="text-black">
            <div>
                <label className="text-xs text-gray-600">E-mail*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`} type="email" {...register("email")} />

                {errors.email && <span className="text-xs text-red-600 mt-1">{errors.email.message}</span>}
            </div>

            <div>
                <label className="text-xs text-gray-600">Nome*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("firstName")}
                />
                {errors.firstName && (
                    <span className="text-xs text-red-600 mt-1">{errors.firstName.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">Sobrenome*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("lastName")}
                />
                {errors.lastName && (
                    <span className="text-xs text-red-600 mt-1">{errors.lastName.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">CPF*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("cpf")}
                />
                {errors.cpf && (
                    <span className="text-xs text-red-600 mt-1">{errors.cpf.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">Data de nacimento*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("birthDate")}
                    type="date"
                />
                {errors.birthDate && (
                    <span className="text-xs text-red-600 mt-1">{errors.birthDate.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">Telefone*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("confirmPassword")}
                    type="cellphone"
                />
                {errors.phone && (
                    <span className="text-xs text-red-600 mt-1">{errors.phone.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">Senha*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("password")}
                    type="password"
                />
                {errors.password && (
                    <span className="text-xs text-red-600 mt-1">{errors.password.message}</span>
                )}
            </div>

            <div>
                <label className="text-xs text-gray-600">Confirmar senha*</label>
                <input className={`w-full border riunded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                    {...register("confirmPassword")}
                    type="password"
                />
                {errors.confirmPassword && (
                    <span className="text-xs text-red-600 mt-1">{errors.confirmPassword.message}</span>
                )}
            </div>

            <button
                className="bg-[#5433eb] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Enviando..." : "Continuar"}
            </button>
        </form>
    )
}