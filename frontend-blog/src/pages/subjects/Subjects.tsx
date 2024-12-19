import { FC, useState } from 'react'
import NavBar from '../../components/nav-bar/NavBar'
import SubjectsContent from './SubjectsContent'
import Footer from '../../components/footer/Footer'
import SearchBar from '../../components/search-bar/SearchBar'

const Subjects: FC = () => {
    /** hook to look after changes on searchbar */
    const [searchText, setSearchText] = useState<string>(''); // State to track input

    /** event handler for subjectsContent to filter according to what's written on SearchBar */
    const handleSearchChange = (text: string) => {
        setSearchText(text);
    };

    return (
        <div className="h-[calc(100vh-10rem)]">
            <NavBar />

            <div className="flex flex-col items-center py-8 space-y-4">
                <h1 className="text-3xl font-semibold">Explora los cursos</h1>
                <p className="text-xl mx-2 text-center">Busca cursos, materiales y fuentes de enseñanza</p>
                <SearchBar searchBar={{ placeholder: 'Buscar materias y recursos', onSearchChange: handleSearchChange }} />
            </div>

            <SubjectsContent search={searchText} />

            <Footer />
        </div>
    )
}

export default Subjects