import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    title: string,
    body: string,
    tags: string[]
}

const QuestionForm: FC = () => {
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
        <div className="flex flex-col bg-gray-200 w-5/6 mx-auto p-4 md:px-8">
            <form onSubmit={handleSubmit(onSubmit)} id="login-form">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Título
                    </label>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        id="title"
                        placeholder="e.g. ¿Existe una función en R para obtener el índice de un elemento en un vector?"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-xs italic">
                            Title is required.
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="text"
                    >
                        Cuerpo
                    </label>
                    <input
                        {...register('body', { required: true })}
                        type="text"
                        id="body"
                        placeholder=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.body && (
                        <p className="text-red-500 text-xs italic">
                            Body is required
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="text"
                    >
                        Email
                    </label>
                    <input
                        {...register('title', { required: false })}
                        type="text"
                        id="text"
                        placeholder=""
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.tags && (
                        <p className="text-red-500 text-xs italic">
                            Tags are not required?
                        </p>
                    )}
                </div>
                <div >
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none w-auto mx-auto"
                    >
                        Enviar Pregunta
                    </button>
                </div>
            </form>
        </div>
    )
}

export default QuestionForm