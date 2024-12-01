import { FC } from 'react'
import SearchBar from '../../components/search-bar/SearchBar'
import { RiCheckboxBlankLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";

const especialidades: string[] = [
    'Matemática',
    'Ciencia de la Computación',
    'Física',
    'Química',
    'Ingeniería Física'
]

const ContentFilters: FC = () => {
    return (
        <div className="space-y-2 content-start">
            <SearchBar searchBar={{placeholder: 'Buscar por nombre'}}/>

            <div className="flex text-center ">
                <FaFilter />
                <h2>Filtros</h2>
            </div>

            <div>
                <div>
                    Especialidades
                </div>
                <SearchBar searchBar={{placeholder: 'Buscar especialidad'}}/>
                {
                    especialidades.map((item: string, index: number) => (
                        <div key={index} className="flex flex-row items-center space-x-1">
                            <RiCheckboxBlankLine />
                            <span className="">{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentFilters