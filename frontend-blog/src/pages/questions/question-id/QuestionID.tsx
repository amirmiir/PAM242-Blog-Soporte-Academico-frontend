import { FC, useEffect, useState } from 'react'
import QuestionIDContent from './QuestionIDContent'
import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'
import AnswersDisplay from './AnswersDisplay'
import { MathJax, MathJaxContext } from 'better-react-mathjax'
import useDebounce from '../../../hooks/debounce/useDebounce'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../shared/utils/routes'

type Question = {
    'id': number,
    'title': string,
    'description': string
}

type Answer = {
    'id': string,
    'id-question': string,
    'content': string,
    'id-author': string,
    'id-editors': string[],
    'votes-up': number,
    'votes-down': number,
    'date': string
}

type QuestionIDProps = {
    'id': string
}

type Inputs = {
    body: string
}

const QuestionsID: FC<QuestionIDProps> = ({ id }) => {

    const question: Question = {
        "id": 32,
        "title": "What is the difference between let, var, and const in JavaScript?",
        "description": "I am trying to understand how to declare variables in JavaScript and the use cases for let, var, and const. Can someone explain the differences and when to use each?"
    }


    const answers: Answer[] = [
        {
            id: '1',
            'id-question': 'id-test',
            content: '$$I=\\int_0^1 \\frac{\\ln(1-x) \\ln^2 (x) \\ln^2(1+x)}{1-x} \\, dx$$',
            'id-author': 'user01',
            'id-editors': ['editor01', 'editor02'],
            'votes-up': 10,
            'votes-down': 2,
            date: '2024-12-18T10:30:00Z'
        },
        {
            id: '2',
            'id-question': 'id-test',
            content: '$$f(x) = \\frac{x^2 - 1}{x + 1}$$',
            'id-author': 'user02',
            'id-editors': ['editor03'],
            'votes-up': 5,
            'votes-down': 1,
            date: '2024-12-17T14:00:00Z'
        },
        {
            id: '3',
            'id-question': 'id-test',
            content: '$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$',
            'id-author': 'user03',
            'id-editors': [],
            'votes-up': 15,
            'votes-down': 0,
            date: '2024-12-16T08:45:00Z'
        }
    ];
    /*
        const [question, setQuestion] = useState<Question>([])
        const [answers, setAnswers] = useState<Answer[]>([]);
    */

    const [message, setMessage] = useState<string>('');
    const [token, setToken] = useState<string | null>(null);

    const [body, setBody] = useState<string>('');
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

    useEffect(() => {
        const verifyToken = () => {
            const storedToken = localStorage.getItem('access_token'); // Fetch token directly
            if (!storedToken) {
                console.log("User is not logged in");
                setToken(null); // Explicitly clear token state
                return;
            }

            setToken(storedToken); // Update token state
        };

        verifyToken();
    }, []);

    return (
        <div>
            <NavBar />

            <MathJaxContext >
                <div className="flex flex-col w-5/6 md:w-3/5 mx-auto bg-white p-4 space-y-8">
                    {/* Question content on display */}
                    <div className="flex flex-col">
                        <div className="flex flex-col space-y-4">
                            <span className="text-2xl">{question.title}</span>
                            <MathJax>
                                {question.description}
                            </MathJax>
                        </div>

                        <div>
                            {/**space for author and editors */}

                        </div>
                    </div>

                    {/* Answers display */}
                    <div className="flex flex-col space-y-6">
                        <span className="text-xl font-bold">Respuestas</span>
                        <MathJax>
                            {
                                answers.map((answer: Answer, index: number) => (
                                    <div className="flex flex-col" key={index}>
                                        <div><p>{answer.content}</p></div>
                                        <span className="w-full border-b border-gray-200 mx-auto"></span>
                                    </div>
                                ))
                            }
                        </MathJax>
                    </div>

                    {/* Answer submission */}

                    <div className="space-y-2">
                        <h2 className="text-xl tracking-wide font-bold">Añade una respuesta</h2>
                        <form onSubmit={handleSubmit(onSubmit)} id="login-form" className="space-y-4">

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


                            <MathJaxContext>
                                <h3 className="text-xl tracking-wider font-bold">Vista previa</h3>

                                <div>
                                    <h2 className="text-lg tracking-wide font-semibold">Cuerpo:</h2>
                                    <MathJax>
                                        { /* math content */}
                                        {debouncedBody}
                                    </MathJax>
                                </div>
                            </MathJaxContext>
                            <div >
                                {
                                    token ?
                                        <button
                                            type="submit"
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 mt-4 rounded focus:outline-none w-auto mx-auto"
                                        >
                                            Enviar Respuesta
                                        </button>
                                        :
                                        <Link to={ROUTES.LOGIN}
                                            className="bg-white hover:bg-gray-100 text-red-500 border border-red-500     font-bold py-2 px-8 mt-4 rounded focus:outline-none w-auto mx-auto"
                                        >
                                            Iniciar Sesión
                                        </Link>

                                }
                            </div>
                        </form>
                    </div>


                </div>
            </MathJaxContext>


            <Footer />
        </div>
    )
}

export default QuestionsID