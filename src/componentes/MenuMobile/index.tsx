import IconMenu from '@/assets/images/icon-menu.png'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import type { NavLink } from '../Header'
import { IoMdClose } from 'react-icons/io'

interface MemuMobileProps {
    navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MemuMobileProps) => {

    const [menulsOpen, setMenulsOpen] = useState<boolean>(false)

    return (<>
        <button className="cursor-pointer" onClick={() => setMenulsOpen(!menulsOpen)}>
            <img src={IconMenu} alt="Icone menu" />

        </button>

        <div className={`${menulsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 z-30`} onClick={() => setMenulsOpen(!menulsOpen)}>


            <div className={`${menulsOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 `} onClick={(e) => e.stopPropagation()}>

                <header className="bg-black py-5 px-5 text-white">
                    <nav className='flex justify-between'>
                        <Link to='/sign-in' className='flex items-center gap-3'>
                            <FaRegUserCircle className='h-6 w-6' />
                            <p>Olá! Faça seu login</p>
                        </Link>
                        <IoMdClose className='cursor-pointer text-2xl' onClick={() => setMenulsOpen(!menulsOpen)}></IoMdClose>
                    </nav>
                </header>


                <ul className='p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3'>
                    {navLinks.map((link) => (
                        <Link to={link.href} key={link.name} onClick={() => setMenulsOpen(!menulsOpen)}>
                            {link.name}
                        </Link>
                    ))}

                    <li>
                        <Link to='/our-stores' onClick={() => setMenulsOpen(!menulsOpen)}>Nossas lojas</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={() => setMenulsOpen(!menulsOpen)}>Sobre</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}