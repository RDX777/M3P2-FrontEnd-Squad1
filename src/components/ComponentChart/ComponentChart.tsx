import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import { theme } from '../../themes';

export const ComponentChart = ({ values, time, name }: any) => {
  const series = [
    {
      name: name,
      data: [0, values],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.light,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      colors: [theme.colors.primary],
    },
    grid: {
      row: {
        colors: [theme.colors.dark], // takes an array which will be repeated on columns
      },
    },
    xaxis: {
      categories: time,
    },
    tooltip: {
      theme: 'dark',
      marker: {
        fillColors: [theme.colors.primary],
      },
      enabled: true,
      x: {
        show: false,
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} />
    </div>
  );
};
