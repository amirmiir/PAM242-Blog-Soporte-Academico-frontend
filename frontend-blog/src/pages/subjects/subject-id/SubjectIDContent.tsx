import { FC } from 'react'

type Subject = {
    'level': string,
    'name': string,
    'videoUrl': string,
}

const SubjectIDContent: FC = () => {
    return (
        <div>
            <div className="">
                Encabezado
            </div>
            <div>
                <div>Indice</div>
                <div>Contenido</div>
            </div>
        </div>
    )
}

export default SubjectIDContent