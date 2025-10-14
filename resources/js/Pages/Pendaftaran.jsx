// resources/js/Pages/Pendaftaran.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import ProgramCard from '@/Components/Page/Pendaftaran/ProgramCard';

// INI BAGIAN PALING PENTING. Pastikan array ini persis seperti di bawah.
const programs = [
    {
        jenis: 'Reguler',
        nama: 'Taman Quran Tabarak',
        slug: 'taman-quran-tabarak', // PASTIKAN INI ADA
        batas_pendaftaran: '20 Juli 2025',
        tes: 'Tes di Tempat',
        details: [
            'Untuk Ikhwan Akhwat 4-7 tahun',
            'Lulus Toilet Training',
            'Jenis Ujian Offline (kondisional)',
            'Interview offline (Wali Murid)',
            'Waktu Pelaksanaan 22 Juli 2025 08:00',
            'Ujian dilaksanakan di Rumah Tahfidz Al-yusra',
            'Ujian Menggunakan Pakaian Rapi dan Menutup Aurat',
        ],
        biaya: 'Rp.300,000',
        color: '#E85B25',
        featured: false,
    },
    {
        jenis: 'Reguler',
        nama: 'Tahfiz Quran',
        slug: 'tahfiz-quran', // PASTIKAN INI ADA
        batas_pendaftaran: '20 Juli 2025',
        tes: 'Tes di Tempat',
        details: [
            'Untuk Ikhwan Akhwat 12-23 tahun',
            'Jenis Ujian Offline (kondisional)',
            'Interview offline (murid dan Wali)',
            'Waktu Pelaksanaan 22 Juli 2025 08:00',
            'Ujian di laksanakan di Rumah Tahfidz Al-yusra',
            'Ujian Menggunakan Pakaian Rapi dan Sopan Menutup Aurat',
        ],
        biaya: 'Rp.300,000',
        color: '#22C5A3',
        featured: true,
    },
    {
        jenis: 'Beasiswa',
        nama: 'Tahfiz Yatim Duafa dan Lulusan S1',
        slug: 'tahfiz-yatim-duafa-dan-lulusan-s1', // PASTIKAN INI ADA
        batas_pendaftaran: '20 Juli 2025',
        tes: 'Tes di Tempat',
        details: [
            'Untuk Yatim Duafa dan Lulusan S1',
            'Untuk Ikhwan Akhwat 12-23 tahun',
            'Jenis Ujian Offline (kondisional)',
            'Interview offline (murid dan Wali)',
            'Waktu Pelaksanaan 22 Juli 2025 08:00',
            'Ujian di laksanakan di Rumah Tahfidz Al-yusra',
            'Ujian Menggunakan Pakaian Rapi dan Sopan Menutup Aurat',
        ],
        biaya: 'Rp.300,000',
        color: '#556187',
        featured: false,
    },
];

export default function Pendaftaran({ flash = {},auth }) { // Menambahkan flash prop untuk pesan sukses
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Pendaftaran" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">

                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-6">
                        Daftar Formulir
                    </h1>

                    {/* Menampilkan pesan sukses setelah mengirim formulir */}
                    {flash.success && (
                        <div className="max-w-3xl mx-auto mb-10 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                            {flash.success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        {programs.map((program) => (
                            <ProgramCard key={program.nama} program={program} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}