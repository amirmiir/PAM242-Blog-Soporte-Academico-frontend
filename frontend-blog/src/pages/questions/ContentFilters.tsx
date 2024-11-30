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
        <div>
            <div className="flex text-center ">
                <FaFilter />
                <h2>Filtros</h2>
            </div>
            <SearchBar />
            <div>
                <div>
                    Especialidades
                </div>
                <SearchBar />
                {
                    especialidades.map((item: string, index: number) => (
                        <div key={index} className="">
                            <RiCheckboxBlankLine />
                            <span>{item}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentFilters