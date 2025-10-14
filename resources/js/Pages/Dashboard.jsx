// resources/js/Pages/Dashboard.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PieChart from '@/Components/Charts/PieChart';
import BarChart from '@/Components/Charts/BarChart';
import LineChart from '@/Components/Charts/LineChart';

// Komponen Card untuk membungkus setiap chart
const ChartCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="font-bold text-lg text-alyusra-dark-blue mb-4">{title}</h3>
        <div>{children}</div>
    </div>
);


export default function Dashboard({ auth }) {
    
    // --- Data Palsu (Mock Data) untuk Chart ---
    const pieData = {
        labels: ['Reguler', 'Beasiswa', 'Yatim'],
        datasets: [{
            label: ' Pendaftar',
            data: [300, 50, 100],
            backgroundColor: ['#FBBF24', '#34D399', '#3B82F6'],
            hoverOffset: 4
        }]
    };
    
    const barData = {
        labels: ['Cabang A', 'Cabang B', 'Cabang C', 'Cabang D'],
        datasets: [{
            label: 'Jumlah Pendaftar',
            data: [65, 59, 80, 81],
            backgroundColor: ['#FBBF24', '#34D399', '#3B82F6', '#EF4444'],
        }]
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            label: 'Pendaftar Bulanan',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: '#E85B25', // alyusra-orange
            tension: 0.1
        }]
    };
    // --- Akhir Mock Data ---

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            
            <Head title="Dashboard" />

            <div className="py-2">
                <h1 className="text-3xl font-bold text-alyusra-dark-blue mb-8">DASBOARD PSUD</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Kolom Kiri: 2 Pie Chart */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ChartCard title="PENDAFTAR KESELURUHAN">
                            <PieChart chartData={pieData} />
                        </ChartCard>
                        <ChartCard title="PENDAFTAR BEASISWA">
                             <PieChart chartData={pieData} />
                        </ChartCard>
                    </div>

                    {/* Kolom Kanan: Bar Chart */}
                    <ChartCard title="PENDAFTAR TIAP CABANG">
                        <BarChart chartData={barData} />
                    </ChartCard>

                    {/* Baris Bawah: Line Chart */}
                    <div className="lg:col-span-2">
                        <ChartCard title="PENDAFTAR TIAP BULAN">
                            <LineChart chartData={lineData} />
                        </ChartCard>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}