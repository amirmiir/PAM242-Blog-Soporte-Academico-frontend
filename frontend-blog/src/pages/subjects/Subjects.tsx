import { FC } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import SubjectsContent from './SubjectsContent'
import Footer from '../../components/footer/Footer'
import SearchBar from '../../components/search-bar/SearchBar'

const Subjects: FC = () => {
    return (
        <div className="h-[calc(100vh-10rem)]">
            <NavBar />
            <div className="flex flex-col items-center py-8 space-y-4">
                <h1 className="text-3xl font-semibold">Explora los cursos</h1>
                <p className="text-xl">Busca cursos, materiales y fuentes de enseñanza</p>
                <SearchBar searchBar={{ placeholder: 'Buscar en BSA' }} />
            </div>

            <SubjectsContent />
            
            <Footer />
        </div>
    )
}

export default Subjects