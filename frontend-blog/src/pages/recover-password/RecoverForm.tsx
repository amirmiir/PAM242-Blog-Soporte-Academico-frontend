import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    email: string
}

const RecoverForm: FC = () => {
    const [message, setMessage] = useState<string>('');

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
                <div>
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none w-full"
                    >
                        Enviar enlace de recuperación
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RecoverForm