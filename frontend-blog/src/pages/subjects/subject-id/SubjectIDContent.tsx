import { FC } from 'react'
import YouTube from 'react-youtube';

type Subject = {
    'level': string,
    'name': string,
    'videoUrl': string,
    ''
}

const SubjectIDContent: FC = () => {
    const isEnlace = true;
    return (
        <div>
            <div className="font-thin tracking-wider text-2xl bg-gray-300 my-6 mx-16">
                <h2>Nivel de Estudios</h2>
                <h1 className="font-semibold tracking-wide text-4xl">Curso</h1>
            </div>
            <div>
                <div>Indice</div>
                <div>
                    Titulo Contenido
                    <p>Descripción</p>
                    {
                        isEnlace && (
                            <YouTube videoId="2g811Eo7K8U"/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SubjectIDContent