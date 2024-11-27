import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/utils/routes'
import bsalogo from '../../assets/bsa-logo.svg'

const NavBar: FC = () => {
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6 border-b bg-primary">
            <nav className="flex justify-between items-center">
                {/* Izquierda */}
                <div className="space-x-6">
                    <button className="translate-y-1">
                        <a href="#home"></a>
                        <div className="flex space-x-2">
                            <img src={bsalogo} alt="Logo de Blog de Soporte Académico" className="h-6 translate-y-0" />
                            <strong className="text-gray-400 text-xl">BSA</strong>
                        </div>
                    </button>
                    <button>
                        Explorar
                    </button>
                    <button>
                        <a href="#about">Acerca de</a>
                    </button>
                    <button>
                        <a href="#faq">Preguntas Frecuentes</a>
                    </button>
                    <button>
                        <a>Contáctanos</a>
                    </button>

                </div>

                {/* Derecha */}
                <div className="space-x-4">
                    <Link to={ROUTES.LOGIN} className="rounded-lg border border-red-500 bg-white py-3 px-5 text-red-500">Iniciar Sesión</Link>
                    <Link to={ROUTES.REGISTER} className="rounded-lg border bg-red-500 py-3 px-5 text-white">Registrarse</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar