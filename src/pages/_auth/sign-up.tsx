import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../../componentes/RegisterForm'
import { Logo } from '../../componentes/Logo'
import { Separator } from '../../componentes/Separator'
import GoogleIcon from "@assets/images/google-icon.png"

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5'>
      <div className='w-112.5 bg-white rounded-2xl p-5 flex flex-col'>
        <Logo />
        <RegisterForm />
        <Separator />

        <button className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer'>
          <img src={GoogleIcon} alt="Icone do Google" className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer' />
          <span>Continua com o Google</span>
        </button>

        <p className='text-sm text-gray-600 mt-6 text-center'>
          Já tem uma conta?{""}
          <a href="/sign-in" className='text-[#5433eb hover:underline'>Entrar</a>
        </p>
      </div>
    </section>

  )
}
