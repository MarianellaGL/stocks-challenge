import { Link } from "react-router-dom";
import { TableValuesProps } from "../utils/Interfaces";

const TableValues = ({ stock }: TableValuesProps) => {
  return (<tr className="border" >
    <td className="px-2 py-2 border text-white border-emerald-500 bg-emerald-400"><Link to={`/detail/${stock.symbol}`}>{stock.symbol}</Link></td>
    <td className="px-2 py-2 border">{stock.name}</td>
    <td className="px-2 py-2 border">{stock.currency}</td>
    <td className="px-2 py-2 border">{stock.type}</td>
  </tr>);
}

export default TableValues;