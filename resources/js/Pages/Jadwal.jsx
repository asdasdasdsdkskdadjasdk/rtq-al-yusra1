// resources/js/Pages/Jadwal.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import JadwalCard from '@/Components/Page/Jadwal/JadwalCard';

// Data Jadwal. Jika ada perubahan, Anda cukup mengedit di sini.
const jadwalData = [
    {
        gelombang: 'Gelombang I',
        tahapan: [
            { title: 'Pendaftaran', date: 's.d 22 February 2025', color: 'white' },
            { title: 'Tes Masuk', date: 's.d 22 Maret 2025', color: 'orange' },
            { title: 'Pengumuman', date: 's.d 22 April 2025', color: 'white' },
            { title: 'Daftar Ulang', date: 's.d 22 May 2025', color: 'orange' },
        ],
    },
    {
        gelombang: 'Gelombang II',
        tahapan: [
            { title: 'Pendaftaran', date: 's.d 22 February 2025', color: 'white' },
            { title: 'Tes Masuk', date: 's.d 22 Maret 2025', color: 'orange' },
            { title: 'Pengumuman', date: 's.d 22 April 2025', color: 'white' },
            { title: 'Daftar Ulang', date: 's.d 22 May 2025', color: 'orange' },
        ],
    },
    {
        gelombang: 'Gelombang III',
        tahapan: [
            { title: 'Pendaftaran', date: 's.d 22 February 2025', color: 'white' },
            { title: 'Tes Masuk', date: 's.d 22 Maret 2025', color: 'orange' },
            { title: 'Pengumuman', date: 's.d 22 April 2025', color: 'white' },
            { title: 'Daftar Ulang', date: 's.d 22 May 2025', color: 'orange' },
        ],
    },
    {
        gelombang: 'Gelombang IV',
        tahapan: [
            { title: 'Pendaftaran', date: 's.d 22 February 2025', color: 'white' },
            { title: 'Tes Masuk', date: 's.d 22 Maret 2025', color: 'orange' },
            { title: 'Pengumuman', date: 's.d 22 April 2025', color: 'white' },
            { title: 'Daftar Ulang', date: 's.d 22 May 2025', color: 'orange' },
        ],
    },
];

export default function Jadwal({auth}) {
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Jadwal Pendaftaran" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-16">
                        Jadwal Pendaftaran
                    </h1>

                    <div className="space-y-16">
                        {jadwalData.map((data) => (
                            <div key={data.gelombang}>
                                <h2 className="text-3xl font-bold text-white mb-6">{data.gelombang}</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                                    {data.tahapan.map((tahap) => (
                                        <JadwalCard key={tahap.title} tahapan={tahap} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}