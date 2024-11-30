import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../shared/utils/routes'
import bsalogo from '../../assets/bsa-logo.svg'
import { IoIosArrowDown } from 'react-icons/io'

type navigationLabel = {
    name: string,
    to: string
}

const exploreNavigation: navigationLabel[] = [
    { name: "Cursos", to: ROUTES.SUBJECTS.ROOT },
    { name: "Foro", to: ROUTES.QUESTIONS.ROOT },
]

const landingNavigation: navigationLabel[] = [
    { 'name': 'Inicio', to: ROUTES.LANDING.HOME },
    { 'name': 'Acerca de', to: ROUTES.LANDING.ABOUT },
    { 'name': 'Nosotros', to: ROUTES.LANDING.US },
    { 'name': 'Preguntas Frecuentes', to: ROUTES.LANDING.FAQ },
    { 'name': 'Contáctanos', to: ROUTES.LANDING.CONTACT },
]


const NavBar: FC = () => {
    /*  Dropdown Explore inicialmente cerrado, se activaba a través del hook useState */
    const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);
    console.log(isExploreOpen);
    

    return (
        <header className={`max-w-screen-2xl mx-auto px-4 border-b-2 border-gray-300 bg-gray-100 h-[8vh] `}>
            <nav className="flex justify-between items-center h-full">
                {/* Izquierda */}
                <div className="flex h-full items-center font-semibold">
                    <Link to={ROUTES.LANDING.ROOT}>
                        <div className="flex items-center space-x-2 mr-4">
                            <img
                                src={bsalogo}
                                alt="Logo de Blog de Soporte Académico"
                                className="h-6"
                            />
                            <strong className="text-gray-400 text-xl">BSA</strong>

                        </div>
                    </Link>


                    {/* Explorar, Dropdown */}
                    <div className="h-full">
                        <button onClick={() => setIsExploreOpen(!isExploreOpen)} className="h-full">
                            <div className="flex flex-row items-center space-x-1 px-4 hover:bg-red-500 text-gray-600 hover:text-white h-full">
                                <span className="">Explorar</span>
                                <IoIosArrowDown className="h-3 translate-y-0.5" />
                            </div>
                        </button>
                        {
                            isExploreOpen && (
                                <div className=" bg-gray-100 relative border rounded-b-md pb-1 text-right -translate-x-0.5 z-50">
                                    <ul>
                                        {
                                            exploreNavigation.map((item:navigationLabel, index:number) => (
                                                <li key={index} className="text-gray-600 pr-6 pb-2 hover:text-white hover:bg-red-500">
                                                    <Link to={item.to}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>


                    {
                        landingNavigation.map((item: navigationLabel, index:number) => (
                            <a key={index} href={item.to} className="text-gray-600 h-full hover:text-white hover:bg-red-500 px-4 pt-4">{item.name}</a>
                        ))
                    }

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