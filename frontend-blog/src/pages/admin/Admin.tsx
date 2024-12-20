import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    email: string;
    password: string;
};


const Admin: FC = () => {
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
                throw new Error(error.message || 'Login failed');
            }

            //Se logeo exitosamente
            const responseData = await response.json();
            console.log(responseData);

            setMessage('Login successful!');

        } catch (error: any) {
            setMessage(error.message || 'An error occurred');
        }
    };

    return (

        <div className="mt-32 w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <h2 className="text-xl font-semibold mb-4 text-center">
                Admin Dashboard
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

                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white w-full font-bold py-2 px-8 rounded focus:outline-none"
                >
                    Log in
                </button>

            </form>
            <p className="mt-5 text-center text-gray-500 text-xs">©2025 BSA. All rights reserved.</p>
        </div>
    )
}

export default Admin