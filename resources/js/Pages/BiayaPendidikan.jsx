// resources/js/Pages/BiayaPendidikan.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import BiayaCard from '@/Components/Page/Biaya/BiayaCard';

// Data Biaya Pendidikan. Mudah untuk dikelola di sini.
const biayaData = [
    {
        jenis: 'Reguler',
        nama: 'Taman Quran Tabarak',
        color: '#E85B25', // alyusra-orange
        featured: false,
        items: [
            { label: 'Infak Masuk', value: 'Rp.3,000,000', note: '*sekali Pembayaran di awal' },
            { label: 'Infak bulanan', value: 'Rp. 300,000', note: null }
        ]
    },
    {
        jenis: 'Reguler',
        nama: 'Tahfiz Quran',
        color: '#22C5A3', // alyusra-teal
        featured: true,
        items: [
            { label: 'Infak Masuk', value: 'Rp.3,000,000', note: null },
            { label: 'Infak bulanan', value: 'Rp.3,000,000', note: null }
        ]
    },
    {
        jenis: 'Beasiswa',
        nama: 'Tahfiz Yatim Duafa dan Lulusan S1',
        color: '#556187', // Warna abu-abu kebiruan
        featured: false,
        items: [
            { label: 'Infak Masuk', value: 'Gratis', note: null },
            { label: 'Infak bulanan', value: 'Gratis', note: null }
        ]
    },
];


export default function BiayaPendidikan({auth}) {
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Biaya Pendidikan" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-16">
                        Biaya Pendidikan
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        {biayaData.map((program) => (
                            <BiayaCard key={program.nama} program={program} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}