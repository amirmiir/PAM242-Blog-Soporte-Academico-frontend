import { MathJax } from 'better-react-mathjax'
import { FC } from 'react'

type Answer = {
    'id': string,
    'content': string,
    'id-author': string,
    'id-editors': string[],
    'votes-up': number,
    'votes-down': number,
    'date': string
}

type AnswersDisplayProps = {
    answers: Answer[]
}

const AnswersDisplay: FC<AnswersDisplayProps> = ({ answers }) => {
    return (
        <div className="flex flex-col space-y-6">
            <span className="text-xl font-bold">Respuestas</span>
            <MathJax>
                {
                    answers.map((answer: Answer, index: number) => (
                        <div className="flex flex-col" key={index}>
                            <div><p>{answer.content}</p></div>
                            <span className="w-11/12 border border-gray-200 mx-auto"></span>
                        </div>
                    ))
                }
            </MathJax>
        </div>
    )
}

export default AnswersDisplay