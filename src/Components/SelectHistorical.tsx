import { useRef } from "react";
import { dateFormatter } from "../utils/Dates";
import { SelectHistoricalProps } from "../utils/Interfaces";


const SelectHistorical = ({ handleSubmit, fromDate, toDate }: SelectHistoricalProps) => {
    const fromDateRef = useRef<HTMLInputElement>(null);
    const toDateRef = useRef<HTMLInputElement>(null);

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(new Date(fromDateRef.current?.value!), new Date(toDateRef.current?.value!))
    }

    return (
        <form onSubmit={submit} className="mb-4">
            <label className="block mb-2">
                Desde:
                <input type="date" defaultValue={dateFormatter(fromDate)} className="block w-full mt-1 p-2 rounded-md border border-gray-300" ref={fromDateRef} />
            </label>
            <label className="block mb-2">
                Hasta:
                <input type="date" defaultValue={dateFormatter(toDate)} className="block w-full mt-1 p-2 rounded-md border border-gray-300" ref={toDateRef} />
            </label>

            <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600">Graficar</button>
        </form>
    );
}

export default SelectHistorical;