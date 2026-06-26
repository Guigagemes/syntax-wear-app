const menus = [
    { title: "Masculino", items: ["casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Feminino", items: ["casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Outlet", items: ["Masculino", "Feminino"] },
    { title: "Sobre", items: ["Quem somos", "misão"] },
]

export const MenuItems = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-8'>
            {menus.map(({ title, items }) => (
                <nav key={title}>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <p className='font-normal text-surface-alt text-xl'>{title}</p>
                        </li>
                        {items.map((item) => (
                            <li key={item}>
                                <a className='font-normal hover:text-[#777676] transition-colors text-xl' href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    )
}