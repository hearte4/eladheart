import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import type { ChartOptions } from "chart.js"; // <-- type-only import


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type WeightPoint = {
  date: string;
  weight: number;
};

interface WeightChartProps {
  dataPoints: WeightPoint[];
}

const WeightChart: React.FC<WeightChartProps> = ({ dataPoints }) => {
  const labels = dataPoints.map((dp) => dp.date);
  const weights = dataPoints.map((dp) => dp.weight);

  const data = {
    labels,
    datasets: [
      {
        label: "Weight (kg)",
        data: weights,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
        tension: 0.2,
      },
    ],
  };

  // Fully typed options for TypeScript
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // TS accepts "top" | "left" | "right" | "bottom" | "center" | "chartArea"
      },
      title: {
        display: true,
        text: "My Weight Over Time",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Weight (kg)",
        },
        beginAtZero: false,
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeightChart;
