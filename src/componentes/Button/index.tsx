interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) => {

    const buttonstyles = {
        base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 font-medium rounded-full transition py-2.5',
        variant: {
            primary: 'bg-white text-[#6329a2] hover:bg-[#6329a2] hover:text-white',
            secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-black',
        },
        size: {
            sm: 'px-5',
            md: 'px-8',
            lg: 'px-10',
        },
    }

    const className = `${buttonstyles.base} ${buttonstyles.variant[variant]} ${buttonstyles.size[size]}`;

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}
