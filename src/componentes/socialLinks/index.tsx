import IconInstagram from '@/assets/images/instagram.png'
import IconFacebook from '@/assets/images/facebook.png'
import IconWhatsapp from '@/assets/images/whatsapp.png'
import IconTiktok from '@/assets/images/tiktok.png'

const socialLinks = [
    { href: '#', icon: IconInstagram, name: 'Instagram' },
    { href: '#', icon: IconWhatsapp, name: 'Whatsapp' },
    { href: '#', icon: IconTiktok, name: 'Tiktok' },
    { href: '#', icon: IconFacebook, name: 'Facebook' },
]

export const SocialLinks = () => {
    return (
        <div>
            <p className='mb-4 font-medium text-surface-alt'>Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    )
}