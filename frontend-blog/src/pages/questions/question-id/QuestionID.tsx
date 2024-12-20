import { FC } from 'react'


type TAnswer = {
    'id-answer': string,
    'id-author-answer': string,
    'id-editor-answer': string[],
    'votes-up': number,
    'date': string
}

type QuestionIDProps = {
    'id': string
}

const QuestionsID: FC<QuestionIDProps> = ({ id }) => {
    return (
        <div>QuestionsID</div>
    )
}

export default QuestionsID