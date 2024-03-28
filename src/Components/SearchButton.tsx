import { SearchButtonProps } from "../utils/Interfaces";

const SearchButton = ({ onSearch, value }: SearchButtonProps) => {
    return (<>
        <button
            type="button"
            onClick={() => onSearch(value)}
            className="absolute right-0 top-0 mt-3 mr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
            🔍
        </button>
    </>);
}

export default SearchButton;