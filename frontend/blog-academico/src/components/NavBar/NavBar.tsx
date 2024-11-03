import { Link } from 'react-router-dom';
import { VscHome } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";

import { useState } from 'react';

const exploreNavigation =[
    {name: "Cursos", href:"/subjects"},
    {name: "Foro", href:"/questions"},
]

const userNavigation = [
    {name: "", href:"/"},
]

const NavBar: React.FC = () => {
    /*  Dropdown inicialmente cerrado, se activaba a través del hook useState */
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    console.log(isDropdownOpen);
    /*  Luego se recuperará con una función para verificar si el usuario está logeado */
    const currentUser: boolean = true;

    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                {/* lado izquierdo */}
                {/* Icono de la página */}
                <div>
                    <Link to="/">
                        <VscHome className="size-6" />
                    </Link>
                </div>
                {/* Mostrar dropdown */}
                <button onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>Explorar</button>
                {
                    isDropdownOpen && (
                        <div>
                            <ul>
                                {
                                    exploreNavigation.map((item)=>(
                                        <li key={item.name}>
                                            <Link to={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                
                <div>
                    <Link to="/about">Acerca de</Link>
                </div>
                <div>
                    <Link to="/faq">Preguntas Frecuentes</Link>
                </div>
                <div>
                    <Link to="/contact">Contáctanos</Link>
                </div>



                {/* lado derecho */}
                <div>
                    {/* El display variará si el usuario está logeado. */}
                    {currentUser ?
                        <>
                            <button onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                                <VscAccount className="size-7 rounded-full"/>
                            </button>
                        </>
                        :
                        <>
                            <div>
                                <Link to="/login">Log in</Link>
                            </div>
                            <div>
                                <Link to="/register">Sign up</Link>
                            </div>
                        </>
                    }
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
