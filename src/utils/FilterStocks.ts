import { StocksDataInterface } from "./Interfaces";

export const filterStocks = (data: StocksDataInterface, searchTerm: string = '') => {
    let filteredData = [];
    if (!data || !data.data) return [];

    if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filteredData = data.data.filter(stock =>
            stock.symbol.toLowerCase().includes(lowerCaseSearchTerm) ||
            stock.name.toLowerCase().includes(lowerCaseSearchTerm)
        );
    } else {
        filteredData = data.data;
    }

    return filteredData
};