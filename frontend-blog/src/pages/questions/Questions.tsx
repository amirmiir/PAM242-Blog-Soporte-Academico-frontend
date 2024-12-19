import { FC, useState } from 'react'
import { ROUTES } from '../../shared/utils/routes'
import { Link } from 'react-router-dom'

import NavBar from '../../components/nav-bar/NavBar'
import QuestionsContent from './QuestionsContent'
import Footer from '../../components/footer/Footer'
import SearchBar from '../../components/search-bar/SearchBar'

const Questions: FC = () => {
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
                <h1 className="text-3xl font-semibold">Explora el foro</h1>
                <p className="text-xl mx-2 text-center">Busca en nuestro repositorio de preguntas y respuestas</p>
                <SearchBar searchBar={{ placeholder: 'Buscar coincidencias', onSearchChange: handleSearchChange }} />
                <Link to={ROUTES.QUESTIONS.MAKEQUESTION} className="rounded-md hover:shadow-md border border-red-500 bg-white hover:bg-gray-100 text-red-500 p-2">
                    Hacer una Pregunta
                </Link>

            </div>

            <QuestionsContent search={searchText} />

            <Footer />

        </div >
    )
}

export default Questions;