import { FC } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import SubjectsContent from './SubjectsContent'
import Footer from '../../components/footer/Footer'

const Subjects: FC = () => {
    return (
        <div className="h-[calc(100vh-10rem)]">
            <NavBar />
            <div className="flex flex-col items-center py-8">
                <h1 className="text-3xl font-semibold">Explora los cursos</h1>
                <p className="text-xl">Busca cursos, materiales y fuentes de enseñanza</p>
            </div>
            <SubjectsContent />
            <Footer/>
        </div>
    )
}

export default Subjects