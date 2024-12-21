import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { FC } from 'react'

type Question = {
    'id': number,
    'title': string,
    'description': string
}

type QuestionIDContentProps = {
    question: Question
}

const QuestionIDContent: FC<QuestionIDContentProps> = ({ question }) => {
    return (
        <div className="flex flex-col space-y-4">
            <span className="text-2xl">{question.title}</span>
                <MathJax>
                    {question.description}
                </MathJax>
        </div>
    )
}

export default QuestionIDContent