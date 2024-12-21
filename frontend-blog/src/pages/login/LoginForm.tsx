import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type Inputs = {
    email: string;
    password: string;
};

const LoginForm: FC = () => {
    const [message, setMessage] = useState<string>('');
   
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log('Form Data:', formData);

        try {
            const response = await fetch('http://localhost:4000/users/login', {  //fetch es una API para realizar solicitudes HTTP
            
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const error = await response.json(); 
                throw new Error(error.message||'Login failed');
            }

            //Se logeo exitosamente
            const { token } = await response.json(); //Token
            console.log('Token:', token);
            localStorage.setItem('access_token', token); 

            const responseData = await response.json(); //Responde data contiene datos del usuario (id,email) y un mensaje('Logeo satisfactorio')
            console.log(responseData);
            
            setMessage('Login successful!');

            //navigate(); 
            
        } catch (error: any) {
            setMessage(error.message || 'An error occurred');
        }
    };

    const handleGoogleSignIn = () => {

        window.location.href = 'http://localhost:4000/users/authGoogle';
        //¿Por que no fetch? La autenticacion por Google se basa en un redireccionamiento hacia la pagina de logeo de Google. No es una API con req-res

        console.log('Google Sign-In not implemented yet.');
    };

    return (
        <div>
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
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs italic">
                            Password is required.
                        </p>
                    )}
                </div>
                {message && (
                    <p className="text-red-500 text-xs italic mb-3">{message}</p>
                )}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none"
                    >
                        Login
                    </button>
                </div>
            </form>

            {/* google sign in */}
            <div className="mt-4">
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                        <FaGoogle className="mr-2" />
                    Iniciar Sesión con Google
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
