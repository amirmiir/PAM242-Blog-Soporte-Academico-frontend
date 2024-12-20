import { FC, useState } from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { ROUTES } from '../../shared/utils/routes'
import bsalogo from '../../assets/bsa-logo.svg'
import { SubmitHandler, useForm } from 'react-hook-form'

type navigationLabel = {
    name: string,
    to: string
}

type Inputs = {
    email: string
}

const landingNavigation: navigationLabel[] = [
    { 'name': 'Inicio', to: ROUTES.LANDING.HOME },
    { 'name': 'Acerca de', to: ROUTES.LANDING.ABOUT },
    { 'name': 'Nosotros', to: ROUTES.LANDING.US },
    { 'name': 'Preguntas Frecuentes', to: ROUTES.LANDING.FAQ },
    { 'name': 'Contáctanos', to: ROUTES.LANDING.CONTACT },
]


const Footer: FC = () => {
    const [message, setMessage] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log('Form Data:', formData);


        try {
            //to-fix: next line with proper routing for correct working
            const response = await fetch('http://localhost:4000/users/login', {  //fetch es una API para realizar solicitudes HTTP

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Request failed');
            }

            //Se logeo exitosamente
            const responseData = await response.json();
            console.log(responseData);

            setMessage('Request sent successfully!');

        } catch (error: any) {
            setMessage(error.message || 'An error occurred');
        }
    };

    return (
        <footer className="bg-secondary text-white py-10 px-4 mt-4">
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

                    <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="flex flex-row items-center">
                        <div>
                            <label
                                className="block text-white text-sm font-bold"
                                htmlFor="email"
                            >
                                Suscríbete a nuestro boletín para las últimas actualizaciones y noticias.
                            </label>
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                id="email"
                                placeholder="Ingresa tu Email"
                                className="shadow appearance-none border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs italic">
                                    Email is required.
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none w-auto translate-y-2.5"
                        >
                            Subscribe
                        </button>

                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white pt-6">
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