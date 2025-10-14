// resources/js/Pages/PanduanPendaftaran.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
// Impor semua ikon baru dari PanduanCard
import PanduanCard, {
    BuatAkunIcon, VerifikasiAkunIcon, PilihFormulirIcon, MelunasiTagihanIcon,
    MelengkapiDataIcon, MengunggahBerkasIcon, ProsesSeleksiIcon, 
    MenungguPengumumanIcon, RegistrasiUlangIcon
} from '@/Components/Page/Panduan/PanduanCard';

// Data untuk 9 langkah panduan
const langkahData = [
    { nomor: 1, judul: 'Buat Akun', deskripsi: 'Untuk mendaftar sebagai calon Santri baru, calon pendaftar harus memiliki akun terlebih dahulu, pendaftaran mudah hanya menggunakan alamat email saja.', color: 'white', icon: BuatAkunIcon },
    { nomor: 2, judul: 'Verifikasi Akun', deskripsi: 'Saat proses pembuatan akun, pendaftar harus melakukan verifikasi akun dengan kode verifikasi yang dikirimkan ke alamat email yang didaftarkan.', color: 'orange', icon: VerifikasiAkunIcon },
    { nomor: 3, judul: 'Pilih Formulir', deskripsi: 'Setelah memiliki akun, pendaftar dapat login dan memilih formulir jalur masuk yang sedang aktif.', color: 'white', icon: PilihFormulirIcon },
    { nomor: 4, judul: 'Melunasi Tagihan Formulir', deskripsi: 'Setelah memilih formulir yang sesuai, pendaftar wajib melunasi pembayaran biaya formulir yang tertera.', color: 'white', icon: MelunasiTagihanIcon },
    { nomor: 5, judul: 'Melengkapi Data Yang Dibutuhkan', deskripsi: 'Pendaftar akan diminta untuk melengkapi beberapa data yang dibutuhkan untuk proses pendaftaran.', color: 'orange', icon: MelengkapiDataIcon },
    { nomor: 6, judul: 'Mengunggah Berkas Persyaratan', deskripsi: 'Jika proses pendaftaran membutuhkan berkas persyaratan, pendaftar harus melengkapi seluruh berkas tersebut.', color: 'white', icon: MengunggahBerkasIcon },
    { nomor: 7, judul: 'Proses Seleksi', deskripsi: 'Setelah pendaftar melengkapi data dan berkas persyaratan, panitia akan melakukan proses seleksi.', color: 'white', icon: ProsesSeleksiIcon },
    { nomor: 8, judul: 'Menunggu Pengumuman', deskripsi: 'Hasil seleksi akan diumumkan sesuai tanggal pengumuman, pendaftar dapat memantau hasil seleksi melalui sistem pendaftaran.', color: 'orange', icon: MenungguPengumumanIcon },
    { nomor: 9, judul: 'Registrasi Ulang', deskripsi: 'Pendaftar yang dinyatakan lulus, wajib melakukan registrasi ulang sebelum tanggal akhir registrasi yang tertera. Jika tidak, maka kelulusan dibatalkan.', color: 'white', icon: RegistrasiUlangIcon },
];

export default function PanduanPendaftaran({auth}) {
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Panduan Pendaftaran" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-16">
                        Panduan Pendaftaran
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {langkahData.map((langkah) => (
                            <PanduanCard key={langkah.nomor} langkah={langkah} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}