import { FC } from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { ROUTES } from '../../shared/utils/routes'
import bsalogo from '../../assets/bsa-logo.svg'

type navigationLabel = {
    name: string,
    to: string
}

const landingNavigation: navigationLabel[] = [
    { 'name': 'Inicio', to: ROUTES.LANDING.HOME },
    { 'name': 'Acerca de', to: ROUTES.LANDING.ABOUT },
    { 'name': 'Nosotros', to: ROUTES.LANDING.US },
    { 'name': 'Preguntas Frecuentes', to: ROUTES.LANDING.FAQ },
    { 'name': 'Contáctanos', to: ROUTES.LANDING.CONTACT },
]


const Footer: FC = () => {
    return (
        <footer className="bg-secondary text-white py-10 px-4">
            {/* Top Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Left Side - Logo and Nav */}
                <div className="md:w-1/2 w-full">
                    <img src={bsalogo} alt="Logo" className="mb-5 w-36 h-16" />
                    <ul className="flex flex-col md:flex-row gap-4">
                        {
                            landingNavigation.map((item: navigationLabel, index: number) => (
                                <li key={index}>
                                    <a href={item.to} className="hover:text-primary">{item.name}</a>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                {/* Right Side - Newsletter */}
                <div className="md:w-1/2 w-full">
                    <p className="mb-4">
                        Suscríbete a nuestro boletín para las últimas actualizaciones y noticias.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            className="w-full px-4 py-2 rounded-l-md text-black"
                        />
                        <button className="bg-red-500 px-6 py-2 rounded-r-md hover:bg-red-600">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
                {/* Left Side - Privacy Links */}
                <ul className="flex gap-6 mb-4 md:mb-0">
                    <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
                    <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
                </ul>

                {/* Right Side - Social Icons */}
                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer