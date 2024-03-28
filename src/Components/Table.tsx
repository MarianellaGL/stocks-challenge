import { TableProps } from "../utils/Interfaces";
import TableValues from "./TableValues";

const Table = ({ stocks }: TableProps) => {


    return (
        <table className="w-full bg-white border border-gray-200 shadow-md text-center">
            <thead className="bg-emerald-500 text-white">
                <tr>
                    <th className="px-4 py-2 border">Símbolo</th>
                    <th className="px-4 py-2 border">Nombre</th>
                    <th className="px-4 py-2 border">Moneda</th>
                    <th className="px-4 py-2 border">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {stocks.length > 0 ? stocks.map((stock, index) => (
                    <TableValues key={index} stock={stock} />
                )) :
                    <tr >
                        <td colSpan={4}>No hay más resultados coincidentes con la búsqueda</td>
                    </tr>
                }
            </tbody>
        </table>
    );
}


export default Table;