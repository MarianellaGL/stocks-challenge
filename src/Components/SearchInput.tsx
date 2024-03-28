import { SearchInputsInterface } from "../utils/Interfaces";

const SearchInput = ({ searchTerm, handleChange, onKeyDown }: SearchInputsInterface) => {
    return (<><input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        className="w-96 h-10 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
        placeholder="Buscar por símbolo o nombre de stock"
    /> </>);
}

export default SearchInput;