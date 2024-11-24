import { VscSearch } from "react-icons/vsc";

const SearchBar: React.FC = () => {
    return (
        <div className="relative sm:w-72 w-40 space-x-2">
            <VscSearch className="absolute inline-block left-3 inset-y-2    "/>
            <input type="text" placeholder="Busca aquí" className="bg-[#EAEAEA] w-full py-1 md:px-8 rounded-md focus:outline-none" />
        </div>
    );
};

export default SearchBar;