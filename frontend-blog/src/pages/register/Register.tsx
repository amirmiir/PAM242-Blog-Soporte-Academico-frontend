import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';
import bsalogo from '../../assets/bsa-logo.svg'
import checkIcon from '../../assets/icons/checkIcon.png'
import RegisterForm from './RegisterForm';

const Register: FC = () => {
    const navigate = useNavigate();

    const features: string[] = [
        "Accede a información actualizada sobre los cursos de la facultad",
        "Comparte tus dudas y conocimientos",
        "Hecho por estudiantes, para estudiantes"
    ];

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('access_token');

            if (token) {
                navigate(ROUTES.SUBJECTS.ROOT);
                return;
            }
        };

        verifyToken();
    }, [navigate]);

    return (
        <div className="h-screen overflow-hidden flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center px-6 md:px-24 py-16 bg-gray-900">

            {/* Información */}
            <div className="w-3/4 md:w-1/4 space-y-4 ">
                <Link to={ROUTES.LANDING.ROOT} className="flex text-center items-center space-x-2">
                    <img src={bsalogo} alt="" className="pl-8 h-10" />
                    <h1 className="text-4xl text-gray-400">BSA </h1>
                </Link>

                <div className="flex flex-row justify-between border-l-2 pl-4 border-red-500 items-center h-auto text-white">
                    {/* Información sobre la comunidad */}
                    <div>
                        <h2 className="text-xl">Sé parte de la comunidad de estudios de la Facultad de Ciencias</h2>
                        <ol>
                            {
                                features.map((items: string, index: number) => (
                                    <li key={index} className="flex flex-row text-left items-start space-x-1 ">
                                        <img src={checkIcon} className="h-4 translate-y-0.5" />
                                        <span className="text-sm">{items}</span>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>


            {/* Formato de inicio de sesión */}
            <div className="w-full md:max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Registro de usuario
                </h2>

                <RegisterForm />

                <p className="align-baseline font-medium mt-4 text-sm">¿Ya tienes una cuenta? Por favor, <Link to={ROUTES.LOGIN} className="text-red-500 hover:text-red-700">Login</Link></p>



                <p className="mt-5 text-center text-gray-500 text-xs">©2025 BSA. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Register