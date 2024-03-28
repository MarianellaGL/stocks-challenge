import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import SelectHistorical from "../Components/SelectHistorical";
import SelectInputsFromChart from "../Components/SelectInputsFromChart";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";
import useSWR from "swr";
import { fetcher } from "../utils/Fetcher";
import { dateFormatter, lastMonth, today } from "../utils/Dates";
import Interval from "../Components/Interval";
import { StocksValuesInterface } from "../utils/Interfaces";

const DetailStockPage = () => {
  const { id } = useParams()

  const [realTime, setRealTime] = useState<boolean>(true);
  const [historical, setHistorical] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<Date>(lastMonth());
  const [toDate, setToDate] = useState<Date>(today());
  const [intervalChart, setIntervalChart] = useState<string>('1day');
  const { data, isLoading, mutate } = useSWR(`https://api.twelvedata.com/time_series?symbol=${id}&interval=${intervalChart}&start_date=${dateFormatter(fromDate)}&end_date=${dateFormatter(toDate)}&apikey=${import.meta.env.VITE_STOCK_API_KEY}`, fetcher)
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  if (data?.message) {
    toast.error(data?.message);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      mutate();
    }, 30 * 1000);

    return () => clearInterval(intervalId);
  }, [mutate, intervalChart]);

  const handleChangeHistorical = () => {
    setRealTime(false);
    setHistorical(true);
  };

  const handleChangeRealTime = () => {
    setRealTime(true);
    setHistorical(false);
  };


  const handleSubmit = (inputFromDate: Date, inputToDate: Date) => {
    setFromDate(inputFromDate)
    setToDate(inputToDate)
  };

  if (isLoading) return <Spinner />

  const options = {
    rangeSelector: {
      enabled: false,
    },
    navigator: {
      enabled: false,
      xAxis: {
        type: 'datetime',
      },
    },
    title: {
      text: `${id} Stock Price`
    },
    series: [{
      type: 'candlestick',
      name: `${id} Stock Price`,
      data: data && data.values && data?.values.map((value: StocksValuesInterface) => [
        new Date(value.datetime).getTime(),
        parseFloat(value.open),
        parseFloat(value.high),
        parseFloat(value.low),
        parseFloat(value.close),
      ])
    }],
  };


  return (
    <div className="px-8 py-6 bg-emerald-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-emerald-800">Detalle de Acción {id}</h1>
      <SelectInputsFromChart realTime={realTime} handleChangeHistorical={handleChangeHistorical} handleChangeRealTime={handleChangeRealTime} historical={historical} />
      {historical && <SelectHistorical fromDate={fromDate} toDate={toDate} handleSubmit={handleSubmit} />}
      <div>
        <Interval intervalChart={intervalChart} setIntervalChart={setIntervalChart} />
        <HighchartsReact highcharts={Highcharts} options={options} constructorType={'stockChart'} ref={chartComponentRef} />
      </div>
    </div>
  );
}

export default DetailStockPage;
