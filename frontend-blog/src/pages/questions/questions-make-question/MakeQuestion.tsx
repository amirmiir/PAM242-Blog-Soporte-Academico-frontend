import { FC } from 'react'
import NavBar from '../../../components/nav-bar/NavBar'
import Footer from '../../../components/footer/Footer'
import QuestionForm from './QuestionForm'

/**
 * Given that we chose a similar platform to stackExchange, we will be using
 * Better-React-MathJax for rendering our LaTex documentation.
 */
const MakeQuestion: FC = () => {

    /** 
     * this is a user-logged only accessible page
    */
    return (
        <div>
            <NavBar />
            <div className="flex flex-col space-y-6 w-5/6 mx-auto my-8 items-start p-4 md:px-8 bg-gray-200">
                <h1 className="text-xl md:text-3xl font-bold tracking-wide">Haz una pregunta pública</h1>

                <div className="flex flex-col space-y-2">
                    <h2 className="font-bold tracking-wide">Escribiendo una buena pregunta...</h2>
                    <span>
                        Estás list@ para hacer una pregunta en el foro de la facultad y este formato te ayudará a guiarte a través de este proceso.
                    </span>
                    <span className="tracking-wide">
                        PASOS:
                        <br />
                        ● Resume el problema en un título de una línea
                        <br />
                        ● Describe tu problema en más detalle
                        <br />
                        ● Describe lo que has intentado y qué esperas recibir con esta pregunta
                        <br />
                        ● Añade “etiquetas” las cuales ayudarán a resaltar tu pregunta a los miembros de esta comunidad
                        <br />
                        ● Revisa tu pregunta y publícala al sitio
                    </span>
                </div>
            </div>

            <QuestionForm />

            <Footer />
        </div>
    )
}

export default MakeQuestion