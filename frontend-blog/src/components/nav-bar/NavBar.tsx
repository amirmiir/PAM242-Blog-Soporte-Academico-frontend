import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';
import bsalogo from '../../assets/bsa-logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosMenu } from "react-icons/io";
import useSmallScreenSize from '../../hooks/small-screen-size/useSmallScreen';

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
    { 'name': 'Contáctanos', to: ROUTES.LANDING.CONTACT },
]

const NavBar: FC = () => {
    const [isExploreOpen, setIsExploreOpen] = useState<boolean>(false);
    const [isSmallMenuOpen, setIsSmallMenuOpen] = useState<boolean>(false);

    const isSmallScreen = useSmallScreenSize();

    return (
        <header className="w-full  px-6 mx-auto border-b-2 border-gray-300 bg-gray-100 h-[10vh]">
            <nav className="flex justify-between items-center h-full">
                {/* Izquierda */}

                <div className="flex h-full items-center font-semibold text-center">
                    {
                        !isSmallScreen && (
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
                        )
                    }

                    {!isSmallScreen && (
                        <div className="relative h-full">
                            <button onClick={() => setIsExploreOpen(!isExploreOpen)} className="h-full">
                                <div className="flex flex-row items-center space-x-1 px-4 hover:bg-red-500 text-gray-600 hover:text-white h-full">
                                    <span>Explorar</span>
                                    <IoIosArrowDown className="h-3 translate-y-0.5" />
                                </div>
                            </button>

                            {isExploreOpen && (
                                <div className="absolute left-1/2 flex flex-row transform -translate-x-1/2 bg-gray-100 border rounded-b-md pb-1 text-right z-50 w-full">
                                    <ul className="flex flex-col w-full items-start">
                                        {exploreNavigation.map((item: navigationLabel, index: number) => (
                                            <li key={index} className="text-gray-600 pr-6 pb-2 hover:text-white hover:bg-red-500 w-full">
                                                <Link to={item.to}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {!isSmallScreen && (
                        landingNavigation.map((item: navigationLabel, index: number) => (
                            <a key={index} href={item.to} className="text-gray-600 h-full hover:text-white hover:bg-red-500 px-4 place-content-center">
                                {item.name}
                            </a>
                        ))
                    )}
                </div>

                {/* Derecha */}
                {!isSmallScreen && (
                    <div className="flex items-center space-x-2 pl-5 h-full relativex|">
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
                )}

                {isSmallScreen && (
                    <div className="h-full content-end text-right w-full ">
                        <button onClick={() => (setIsSmallMenuOpen(!isSmallMenuOpen))} className="h-full">
                            <IoIosMenu className="size-8" />
                        </button>

                        {isSmallMenuOpen && (
                            <div className="absolute text-center w-full -translate-x-1 z-50 bg-gray-100 border-x-2 border-b-2 px-4 ">
                                <ul>
                                    {landingNavigation.map((item: navigationLabel, index: number) => (
                                        <li key={index}>
                                            <a href={item.to}>{item.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-4"></hr>
                                <div className="flex flex-col space-y-1">
                                    <Link
                                        to={ROUTES.LOGIN}
                                        className="rounded-lg border border-red-500 bg-white py-1 px-4 text-red-500 hover:bg-gray-100"
                                    >
                                        Iniciar Sesión
                                    </Link>
                                    <Link
                                        to={ROUTES.REGISTER}
                                        className="rounded-lg border border-red-500 bg-red-500 py-1 px-4 text-white hover:bg-red-600"
                                    >
                                        Registrarse
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
