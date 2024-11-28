import { FC } from 'react'

type FAQ = {
    title: string,
    answer: string
}

const SectionFAQ: FC = () => {

    const FAQ: FAQ[] = [
        {
            "title": "Pregunta 1",
            "answer": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        {
            "title": "Pregunta 2",
            "answer": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
        {
            "title": "Pregunta 3",
            "answer": "Respuesta lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
        },
    ];

    return (
        <div>
            <h2 className="text-2xl font-semibold">Preguntas Frecuentes</h2>

            {/* Expresión para mostrar las preguntas frecuentes a partir de un array de objetos definidos para tener título de pregunta y respuesta */}
            {
                FAQ.map((item:FAQ, index: number)=>(
                    <div className="" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SectionFAQ