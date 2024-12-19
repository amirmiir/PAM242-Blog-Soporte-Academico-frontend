import { FC } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

type SearchBar = {
    'placeholder': string
    onSearchChange?: (text:string) => void
}

type SearchBarProps = {
    searchBar: SearchBar
}

const SearchBar: FC<SearchBarProps> = ({ searchBar }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (searchBar.onSearchChange) {
            searchBar.onSearchChange(event.target.value); // Notify parent of input change
        }
    };

    return (
        <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input type="text" placeholder={searchBar.placeholder} className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounder-md focus:outline-none" onChange={handleInputChange}/>
        </div>
    )
}

export default SearchBar