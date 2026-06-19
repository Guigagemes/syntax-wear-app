import { Copyright } from '../Copyright'
import { MenuItems } from '../menuItems'
import { SocialLinks } from '../socialLinks'
import { SubcriptionForm } from '../SubcriptionForm'

export const Footer = () => {
    return (
        <footer className="bg-footer-bg">

            <div className="container">

                <div className='flex flex-col lg:flex-row justify-between py-10 px-2 gap-2'>

                    <div className='flex flex-col gap-8 min-w-86'>

                        <SubcriptionForm></SubcriptionForm>

                        <SocialLinks></SocialLinks>

                    </div>

                    <MenuItems></MenuItems>

                </div>

                <Copyright></Copyright>

            </div>
        </footer>
    )
}