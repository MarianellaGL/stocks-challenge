import { useState } from "react";
import Search from "../Components/Search";
import Spinner from "../Components/Spinner";
import Table from "../Components/Table";
import Pagination from "../Components/Pagination";
import { filterStocks } from "../utils/FilterStocks";
import useSWR from "swr";
import { fetcher } from "../utils/Fetcher";
import { StocksInterface } from "../utils/Interfaces";
import { toast } from "react-toastify";

const DashboardPage = () => {
    const { data, error, isLoading } = useSWR('https://api.twelvedata.com/stocks', fetcher, {});

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const stocksPerPage: number = 10;

    const totalPages: number = data && Math.ceil(data.data.length / stocksPerPage);

    const indexOfLastStock: number = currentPage * stocksPerPage;
    const indexOfFirstStock: number = indexOfLastStock - stocksPerPage;

    // Función de búsqueda para actualizar el término de búsqueda
    const handleSearch = (term: string) => {
        setCurrentPage(1);
        setSearchTerm(term);
    };


    // Filtramos por stocks
    const currentStocks: StocksInterface[] = filterStocks(data, searchTerm).slice(indexOfFirstStock, indexOfLastStock)

    if (isLoading) return <Spinner />
    if (error) {
        toast.error("Ha ocurrido un error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className="flex flex-col justify-between items-center px-[200px]">
            <div className="mx-36 my-36">
                <Search onSearch={handleSearch} stocks={data} />
            </div>
            <Table stocks={currentStocks} />
            <div className="flex justify-between items-center">
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </div>
    );
}

export default DashboardPage;