import { FC } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import SubjectsContent from './SubjectsContent'

const Subjects: FC = () => {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center py-8">
                <h1 className="text-3xl font-semibold">Explora los cursos</h1>
                <p className="text-xl">Busca cursos, materiales y fuentes de enseñanza</p>
            </div>
            <SubjectsContent />
        </div>
    )
}

export default Subjects