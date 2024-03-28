import { SelectInputFromChartsProps } from "../utils/Interfaces";

const SelectInputsFromChart = ({ realTime, handleChangeRealTime, historical, handleChangeHistorical }: SelectInputFromChartsProps) => {
  return (<div className="mb-4">
    <label className="mr-4">
      Tiempo Real:
      <input
        type="radio"
        value="time"
        checked={realTime}
        onChange={handleChangeRealTime}
        className="ml-2 text-emerald-500"
      />
    </label>
    <label>
      Histórico:
      <input
        type="radio"
        value="historical"
        checked={historical}
        onChange={handleChangeHistorical}
        className="ml-2 text-emerald-500"
      />
    </label>
  </div>);
}

export default SelectInputsFromChart;