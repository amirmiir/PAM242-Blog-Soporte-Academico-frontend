import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    password: string;
    password2: string;
};



const RegisterForm: FC = () => {
    const [message, setMessage] = useState<string>('')
    const [backendErrors, setBackendErrors] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log('Form Data:', formData);

        try {
            const response = await fetch('http://localhost:4000/users/register', {  //fetch es una API para realizar solicitudes HTTP

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setBackendErrors(errorData.errors.map((err: { message: string }) => err.message)); // Store backend errors
                throw new Error(errorData.message || 'Register failed');
            }

            //Se registro exitosamente
            const responseData = await response.json();
            console.log(responseData);

            setMessage('Register successful!');
            setBackendErrors([])

        } catch (error: any) {
            setMessage(error.message || 'An error occurred');
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="register-form">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        {...register('name', { required: true })}
                        type="name"
                        id="name"
                        placeholder="UserName"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs italic">
                            Username is required.
                        </p>
                    )}
                </div>


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
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password2"
                    >
                        Contraseña
                    </label>
                    <input
                        {...register('password2', { required: true })}
                        type="password"
                        id="password2"
                        placeholder="Confirm password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.password2 && (
                        <p className="text-red-500 text-xs italic">
                            Password is required.
                        </p>
                    )}
                </div>

                {backendErrors.length > 0 && (
                    <div className="text-red-500 text-xs italic">
                        {backendErrors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}



                {message && (
                    <p className="text-red-500 text-xs italic mb-3">{message}</p>
                )}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm