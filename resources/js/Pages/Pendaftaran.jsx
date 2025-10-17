// resources/js/Pages/Pendaftaran.jsx

import { useState } from 'react'; // <-- Impor useState
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import ProgramCard from '@/Components/Page/Pendaftaran/ProgramCard';
import Modal from '@/Components/Modal'; // <-- Impor komponen Modal
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';

const programs = [
    { jenis: 'Reguler', nama: 'Taman Quran Tabarak', slug: 'taman-quran-tabarak', batas_pendaftaran: '20 Juli 2025', tes: 'Tes di Tempat', details: ['Untuk Ikhwan Akhwat 4-7 tahun','Lulus Toilet Training','Jenis Ujian Offline (kondisional)','Interview offline (Wali Murid)','Waktu Pelaksanaan 22 Juli 2025 08:00','Ujian dilaksanakan di Rumah Tahfidz Al-yusra','Ujian Menggunakan Pakaian Rapi dan Menutup Aurat',], biaya: 'Rp.300,000', color: '#E85B25', featured: false, },
    { jenis: 'Reguler', nama: 'Tahfiz Quran', slug: 'tahfiz-quran', batas_pendaftaran: '20 Juli 2025', tes: 'Tes di Tempat', details: ['Untuk Ikhwan Akhwat 12-23 tahun','Jenis Ujian Offline (kondisional)','Interview offline (murid dan Wali)','Waktu Pelaksanaan 22 Juli 2025 08:00','Ujian di laksanakan di Rumah Tahfidz Al-yusra','Ujian Menggunakan Pakaian Rapi dan Sopan Menutup Aurat',], biaya: 'Rp.300,000', color: '#22C5A3', featured: true, },
    { jenis: 'Beasiswa', nama: 'Tahfiz Yatim Duafa dan Lulusan S1', slug: 'tahfiz-yatim-duafa-dan-lulusan-s1', batas_pendaftaran: '20 Juli 2025', tes: 'Tes di Tempat', details: ['Untuk Yatim Duafa dan Lulusan S1','Untuk Ikhwan Akhwat 12-23 tahun','Jenis Ujian Offline (kondisional)','Interview offline (murid dan Wali)','Waktu Pelaksanaan 22 Juli 2025 08:00','Ujian di laksanakan di Rumah Tahfidz Al-yusra','Ujian Menggunakan Pakaian Rapi dan Sopan Menutup Aurat',], biaya: 'Rp.300,000', color: '#556187', featured: false, },
];

// PERUBAHAN: Menerima props 'auth'
export default function Pendaftaran({ auth, flash = {} }) {
    // State untuk mengontrol visibilitas modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        // PERUBAHAN: Meneruskan props 'auth' ke AppLayout
        <AppLayout auth={auth}>
            <Head title="Pendaftaran" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-6">
                        Daftar Formulir
                    </h1>

                    {flash.success && (
                        <div className="max-w-3xl mx-auto mb-10 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                            {flash.success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                        {programs.map((program) => (
                            <ProgramCard 
                                key={program.nama} 
                                program={program} 
                                auth={auth} // Teruskan auth
                                onRegisterClick={openModal} // Teruskan fungsi untuk membuka modal
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* === KOMPONEN MODAL DITAMBAHKAN DI SINI === */}
            <Modal show={isModalOpen} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Anda Harus Login Terlebih Dahulu
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                        Untuk dapat melanjutkan ke formulir pendaftaran, Anda diwajibkan untuk login atau membuat akun baru jika belum memilikinya.
                    </p>
                    <div className="mt-6 flex justify-end space-x-2">
                        <SecondaryButton onClick={closeModal}>Batal</SecondaryButton>
                        <Link href={route('login')}>
                            <PrimaryButton>Login sekarang</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </Modal>

        </AppLayout>
    );
}