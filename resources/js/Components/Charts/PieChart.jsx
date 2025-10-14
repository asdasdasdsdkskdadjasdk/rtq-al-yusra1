// resources/js/Components/Charts/PieChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ chartData, chartOptions }) {
    return <Pie data={chartData} options={chartOptions} />;
}