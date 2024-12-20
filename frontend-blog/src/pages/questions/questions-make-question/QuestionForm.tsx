import { MathJax, MathJaxBaseContext, MathJaxContext } from 'better-react-mathjax';
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useDebounce from '../../../hooks/debounce/useDebounce';

type Inputs = {
    title: string,
    body: string,
    tags: string /* space separated values */
}

const QuestionForm: FC = () => {
    const [message, setMessage] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const debouncedTitle = useDebounce(title, 500);
    const debouncedBody = useDebounce(body, 500);

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
            <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="space-y-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="text"
                    >
                        Título
                    </label>
                    <span className="text-xs mb-2">Sé específico e imagina que estás haciendo la pregunta a otra persona.</span>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        id="title"
                        placeholder="e.g. ¿Existe una función en R para obtener el índice de un elemento en un vector?"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-xs italic">
                            Title is required.
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="body"
                    >
                        Cuerpo
                    </label>
                    <span className="text-xs mb-2">Incluye toda la información que alguien necesitaría para responder tu pregunta.</span>
                    <textarea
                        {...register('body', { required: true })}
                        id="body"
                        placeholder="Escribe aquí los detalles de tu pregunta en formato LaTex..."
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow resize-vertical min-h-[8rem]"
                        onChange={(e) => setBody(e.target.value)}
                    />
                    {errors.body && (
                        <p className="text-red-500 text-xs italic">
                            Body is required
                        </p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold"
                        htmlFor="text"
                    >
                        Etiquetas
                    </label>
                    <span className="text-xs mb-2">Añade etiquetas, separadas por espacios</span>
                    <input
                        {...register('tags', { required: false })}
                        type="text"
                        id="text"
                        placeholder="e.g calculus differential-calculus integral-calculus algebra"
                        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                    {errors.tags && (
                        <p className="text-red-500 text-xs italic">
                            Tags are not required?
                        </p>
                    )}
                </div>
                <MathJaxContext>
                    <h3 className="text-xl tracking-wider font-bold">Vista previa</h3>
                    <div className="">
                        <h2 className="text-lg tracking-wide font-semibold">Título:</h2>
                        <MathJax>
                            { /* math content */}
                            {debouncedTitle}
                        </MathJax>
                    </div>

                    <div>
                        <h2 className="text-lg tracking-wide font-semibold">Cuerpo:</h2>
                        <MathJax>
                            { /* math content */}
                            {debouncedBody}
                        </MathJax>
                    </div>
                </MathJaxContext>
                <div >
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 mt-4 rounded focus:outline-none w-auto mx-auto"
                    >
                        Enviar Pregunta
                    </button>
                </div>
            </form>
        </div>
    )
}

export default QuestionForm