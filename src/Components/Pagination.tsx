import { PaginationProps } from "../utils/Interfaces";

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {
  const maxPagesToShow = 5;
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        className={`mx-1 px-3 py-1 rounded-md ${pageNumber === currentPage
          ? 'bg-emerald-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } focus:outline-none`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <nav className="flex justify-center items-center my-4">
      <button
        className="mr-3 px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {renderPageNumbers()}
      <button
        className="ml-3 px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </nav>
  );
};

export default Pagination;