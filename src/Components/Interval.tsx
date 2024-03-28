import { IntervalProps } from "../utils/Interfaces";

const Interval = ({ intervalChart, setIntervalChart }: IntervalProps) => {
    return (<label className="block mb-2">
        Intervalo:
        <select defaultValue={intervalChart} className="block w-full mt-1 p-2 rounded-md border border-gray-300" onChange={(e) => setIntervalChart(e.target.value)}>
            <option value="1min">1 minuto</option>
            <option value="5min">5 minutos</option>
            <option value="15min">15 minutos</option>
            <option value='30min'>30 minutos</option>
            <option value='45min'>45 minutos</option>
            <option value='1h'>1 hora</option>
            <option value='2h'>2 horas</option>
            <option value='1day'>1 dia</option>
            <option value='1week'>1 semana</option>
            <option value='1month'>1 mes</option>
        </select>
    </label>);
}

export default Interval;