import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    email: string;
    newpassword: string;
    newpassword2: string;
};

const RecoverForm: React.FC<Props> = () => {
    const [message, setMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (formData) => {
        console.log('Form Data:', formData);

        try {
            const response = await fetch('http://localhost:4000/users/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'ChangePassword failed');
            }

            const responseData = await response.json();
            console.log(responseData);

            setMessage('¡Contraseña actualizada exitosamente!');
            setIsSuccess(true);
        } catch (error: any) {
            setMessage(error.message || 'An error occurred');
            setIsSuccess(false);
        }
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
                        {...register('email', { required: 'Email is required.' })}
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="newpassword"
                    >
                        Nueva Contraseña
                    </label>
                    <input
                        {...register('newpassword', { required: 'Password is required.' })}
                        type="password"
                        id="newpassword"
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.newpassword && (
                        <p className="text-red-500 text-xs italic">
                            {errors.newpassword.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="newpassword2"
                    >
                        Repetir Contraseña
                    </label>
                    <input
                        {...register('newpassword2', { required: 'Repeat password is required.' })}
                        type="password"
                        id="newpassword2"
                        placeholder="Repeat Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.newpassword2 && (
                        <p className="text-red-500 text-xs italic">
                            {errors.newpassword2.message}
                        </p>
                    )}
                </div>
                {message && (
                    <p
                        className={`text-xs italic mb-3 ${
                            isSuccess ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {message}
                    </p>
                )}

                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none"
                    >
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecoverForm;
