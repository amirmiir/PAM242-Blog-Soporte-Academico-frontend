import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/utils/routes'
import bsalogo from '../../assets/bsa-logo.svg'

const NavBar: FC = () => {
    return (
        <header className="max-w-screen-2xl mx-auto px-4 border-b border-gray-300 bg-gray-100 h-16">
            <nav className="flex justify-between items-center h-full">
                {/* Izquierda */}
                <div className="flex items-center space-x-6">
                    <button className="">
                        <div className="flex items-center space-x-2">
                            <img
                                src={bsalogo}
                                alt="Logo de Blog de Soporte Académico"
                                className="h-6"
                            />
                            <strong className="text-gray-600 text-xl">BSA</strong>
                            
                        </div>
                    </button>

                    <button className="text-gray-600 hover:text-gray-800">
                        Explorar
                    </button>

                    <button className="text-gray-600 hover:text-gray-800">
                        <a href="#about">Acerca de</a>
                    </button>

                    <button className="text-gray-600 hover:text-gray-800">
                        <a href="#us">Nosotros</a>
                    </button>

                    <button className="text-gray-600 hover:text-gray-800">
                        <a href="#faq">Preguntas Frecuentes</a>
                    </button>

                    <button className="text-gray-600 hover:text-gray-800">
                        <a href="#contact">Contáctanos</a>
                    </button>
                </div>



                {/* Derecha */}
                <div className="flex items-center space-x-4 pl-5 h-full relative">
                    <div className="border-l border-gray-300 h-full absolute left-0"></div>
                    <Link
                        to={ROUTES.LOGIN}
                        className="rounded-lg border border-red-500 bg-white py-2 px-4 text-red-500 hover:bg-gray-100"
                    >
                        Iniciar Sesión
                    </Link>
                    <Link
                        to={ROUTES.REGISTER}
                        className="rounded-lg border border-red-500 bg-red-500 py-2 px-4 text-white hover:bg-red-600"
                    >
                        Registrarse
                    </Link>
                </div>
            </nav>
        </header>
    );
};


export default NavBar