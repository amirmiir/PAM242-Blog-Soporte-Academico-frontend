import { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

type Inputs = {
    email: string,
    password: string
}

/*   sample code for further examination and better understanding of a form procedure */
const LoginForm: FC = () => {
    const [message, setMessage] = useState<string>("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    const handleGoogleSignIn = () => {

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="login-form">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        {...register("email", { required: true })}
                        type="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                    <input
                        {...register("password", { required: true })}
                        type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow" />
                </div>
                {
                    message && <p className="text-red-500 text-xs italic mb-3">{message}</p>
                }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none ">Login</button>
                </div>


            </form>

            {/* google sign in */}
            <div className="mt-4">
                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                    <FaGoogle className="mr-2" />
                    Iniciar Sesión con Google
                </button>
            </div>
        </div>
    )
}
export default LoginForm;