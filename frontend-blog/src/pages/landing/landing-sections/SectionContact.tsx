import { FC, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    email: string,
    topic: string,
    message: string
}

const SectionContact: FC = () => {

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
        <div className="w-1/3 mx-auto text-left">
            <h2 className="lg:text-2xl font-semibold">Contáctanos</h2>
            <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="space-y-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        id="email"
                        placeholder="Email"
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
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="text"
                    >
                        Asunto
                    </label>
                    <input
                        {...register('topic', { required: true })}
                        type="text"
                        id="topic"
                        placeholder="Asunto"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.topic && (
                        <p className="text-red-500 text-xs italic">
                            Topic is required.
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="text"
                    >
                        Mensaje
                    </label>
                    <input
                        {...register('message', { required: true })}
                        type="text"
                        id="message"
                        placeholder="Aquí escriba el mensaje con mayor detalle."
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs italic">
                            Message is required.
                        </p>
                    )}
                </div>

                <div >
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 mt-4 rounded focus:outline-none w-auto mx-auto"
                    >
                        Enviar mensaje
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SectionContact