export interface SearchProps {
    onSearch: (value: string) => void
    stocks: StocksDataInterface
}

export interface StocksDataInterface {
    data: StocksInterface[]
    status: string
}

export interface StocksInterface {
    country: string
    currency: string
    exchange: string
    mic_code: string
    name: string
    symbol: string
    type: string
}

export interface SearchButtonProps {
    onSearch: (value: string) => void
    value: string
}

export interface StocksValuesInterface {
    datetime: string
    open: string
    high: string
    low: string
    close: string
}

export interface TableProps {
    stocks: StocksInterface[]
}

export interface TableValuesProps {
    stock: StocksInterface
}

export interface SelectInputFromChartsProps {
    realTime: boolean
    historical: boolean
    handleChangeRealTime: () => void
    handleChangeHistorical: () => void
}

export interface SelectHistoricalProps {
    fromDate: Date,
    toDate: Date,
    handleSubmit: (fromDate: Date, toDate: Date) => void
}

export interface SearchInputsInterface {
    searchTerm: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface PaginationProps {
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    totalPages: number
}

export interface DropdownSearchProps {
    suggestions: StocksInterface[]
    isOpen: boolean
    loadingSuggestions: boolean
    highlightedIndex: number
}


export interface IntervalProps {
    intervalChart: string
    setIntervalChart: (interval: string) => void
}
