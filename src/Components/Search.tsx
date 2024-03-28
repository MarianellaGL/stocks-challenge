import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import DropDownSearch from "./DropdownSearch";
import { fetcher } from "../utils/Fetcher";
import useSWR from "swr";
import { SearchProps, StocksInterface } from "../utils/Interfaces";


const Search = ({ onSearch, stocks }: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [value] = useDebounce(searchTerm, 1000);
    const [suggestions, setSuggestions] = useState<StocksInterface[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [matchingStocks, setMatchingStocks] = useState<StocksInterface>()
    const [loadingSuggestions, setLoadingSuggestions] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const { data: matchingStocksData, error: matchingStocksError } = useSWR(
        () => matchingStocks ? `https://api.twelvedata.com/stocks?symbol=${matchingStocks.symbol}&source=docs` : '',
        fetcher
    );

    useEffect(() => {
        if (!matchingStocksError && matchingStocksData && matchingStocksData.data) {
            setSuggestions(matchingStocksData.data);
            setLoadingSuggestions(false);
        }
    }, [matchingStocksData, matchingStocksError]);

    useEffect(() => {
        if (stocks && stocks.data.length > 0) {
            const match = stocks.data.find(stock =>
                stock.symbol.toLowerCase() == value.toLowerCase() ||
                stock.name.toLowerCase() == value.toLowerCase()
            );
            setMatchingStocks(match);
        }
    }, [value, stocks]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        setIsOpen(true);
        setLoadingSuggestions(true);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            setHighlightedIndex((prevIndex) =>
                prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
            );
        }
    };

    return (
        <div className="relative">
            <SearchInput searchTerm={searchTerm} handleChange={handleChange} onKeyDown={handleKeyDown} />
            <SearchButton onSearch={onSearch} value={value} />
            <DropDownSearch suggestions={suggestions} isOpen={isOpen} loadingSuggestions={loadingSuggestions}
                highlightedIndex={highlightedIndex}
            />
        </div>
    );
}

export default Search;