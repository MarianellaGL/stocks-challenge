import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { DropdownSearchProps, StocksInterface } from "../utils/Interfaces";

const DropDownSearch = ({ suggestions, isOpen, loadingSuggestions, highlightedIndex }: DropdownSearchProps) => {

    return (
        <>
            {isOpen && (
                <div className="absolute z-10 top-full left-0 w-30 overflow-auto bg-white border border-gray-300 shadow-md rounded-md mt-1"
                    tabIndex={0}

                >
                    {loadingSuggestions && <Spinner />}
                    {!loadingSuggestions && suggestions.length === 0 && (
                        <p className="px-4 py-2 text-gray-500">No se encontraron sugerencias</p>
                    )}
                    {!loadingSuggestions && suggestions.length > 0 && (
                        <ul className="divide-y divide-gray-200">
                            {suggestions.map((suggestion: StocksInterface, index: number) => (
                                <li
                                    key={index}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === highlightedIndex ? 'bg-gray-100' : ''}`}
                                >
                                    <Link to={`/detail/${suggestion.symbol}`}>{suggestion.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
}
export default DropDownSearch;