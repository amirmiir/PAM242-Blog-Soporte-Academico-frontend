import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';
import bsalogo from '../../assets/bsa-logo.svg'
import librosLogin from '../../assets/images/librosLogin.svg'
import checkIcon from '../../assets/icons/checkIcon.png'
import LoginForm from './LoginForm';

const Login: FC = () => {
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
        <div className="h-screen overflow-hidden flex flex-col md:flex-row justify-between items-center bg-gray-900">

            {/* Información */}
            <div className="w-full mx-auto mt-16 md:mt-0 md:w-1/4 space-y-4">
                <Link to={ROUTES.LANDING.ROOT} className="flex text-center items-center space-x-2">
                    <img src={bsalogo} alt="" className="pl-8 h-10" />
                    <h1 className="text-4xl text-gray-400">BSA </h1>
                </Link>

                <div className="flex flex-col text justify-between items-center h-auto text-white">
                    {/* Información sobre la comunidad */}
                    <div className="border-l-2 border-red-500 pl-4">
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
                    <img src={librosLogin} alt="libros decorativos" className="mt-8 h-40" />
                </div>
            </div>


            {/* Formato de inicio de sesión */}
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Iniciar Sesión
                </h2>

                <LoginForm />

                <p className="align-baseline font-medium mt-4 text-sm">¿No tienes una cuenta? Por favor, <Link to={ROUTES.REGISTER} className="text-red-500 hover:text-red-700">Regístrate</Link></p>



                <p className="mt-5 text-center text-gray-500 text-xs">©2025 BSA. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login