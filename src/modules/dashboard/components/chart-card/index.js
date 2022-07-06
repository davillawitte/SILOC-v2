import React from "react";

import Chart from "react-apexcharts";
import { useChamber } from "../../../../contexts/chamber-context";

function ChartCard() {
  const { chambers } = useChamber();

  const series = chambers.map((value) => {
    console.log(value.log);
    return {
      name: value.name,
      data: value.log,
    };
  });

  const config = {
    series: series,
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Quantidade de corpos por mês",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez",
        ],
      },
    },
  };

  return (
    <Chart
      options={config.options}
      series={config.series}
      type="line"
      height="85%"
      width="100%"
    />
  );
}

export default ChartCard;
