import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'


const SearchBar: React.FC = () => {
    return (
        <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounder-md focus:outline-none" />
        </div>
    )
}

export default SearchBar