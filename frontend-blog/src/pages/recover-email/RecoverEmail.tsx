import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/utils/routes';

import bsalogo from '../../assets/bsa-logo.svg';
import librosLogin from '../../assets/images/librosLogin.svg'
import checkIcon from '../../assets/icons/checkIcon.png'

type Inputs = {
    email: string
}

const RecoverEmail: FC = () => {
    const navigate = useNavigate();

    const [message, setMessage] = useState<string>('');


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
        <div className="h-screen overflow-hidden flex flex-row justify-between items-center bg-gray-900">

            {/* Información */}
            <div className=" w-1/4 ml-32 space-y-4">
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


            {/* Formato de recuperacion de email */}
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Recuperar contraseña
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} id="login-form">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs italic">
                                Email is required.
                            </p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none w-full"
                        >
                            Enviar enlace de recuperación
                        </button>
                    </div>
                </form>


                <p className="mt-5 text-center text-gray-500 text-xs">©2025 BSA. All rights reserved.</p>
            </div>
        </div>
    );
}

export default RecoverEmail