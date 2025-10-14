// resources/js/Components/Page/Beranda/InfoBoxes.jsx

import { Link } from '@inertiajs/react';

// === KOLEKSI IKON BARU YANG RELEVAN ===
const CekKelulusanIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
);
const FormulirIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    </div>
);
const PanduanIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    </div>
);
const JadwalIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    </div>
);
const BiayaIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    </div>
);
const BeritaIcon = ({ iconBgColor, iconColor }) => (
    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${iconBgColor}`}>
        <svg className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h4m-4 16v4m-4-16v4" /></svg>
    </div>
);

// Ikon Panah Kanan
const ChevronRightIcon = ({ textColor }) => (
    <svg className={`w-6 h-6 ${textColor}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);


// --- KOMPONEN KARTU YANG DIDESAIN ULANG ---
// Perubahan: Menerima 'icon' sebagai prop
const InfoCard = ({ title, href, color, icon: IconComponent }) => {
    // Menentukan warna berdasarkan props 'color'
    const bgColor = color === 'white' ? 'bg-white' : 'bg-alyusra-orange';
    const textColor = color === 'white' ? 'text-gray-800' : 'text-white';
    const iconBgColor = color === 'white' ? 'bg-black' : 'bg-white';
    const iconColor = color === 'white' ? 'text-white' : 'text-black';
    const lineColor = color === 'white' ? 'border-gray-200' : 'border-white/50';

    return (
        <Link 
            href={href} 
            className={`flex items-center justify-between p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300 ${bgColor} ${textColor}`}
        >
            <div className="flex items-center">
                {/* Perubahan: Menampilkan ikon secara dinamis */}
                <IconComponent iconBgColor={iconBgColor} iconColor={iconColor} />
                <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className={`w-full h-px mt-1 ${lineColor}`}></div>
                </div>
            </div>
            <ChevronRightIcon textColor={textColor} />
        </Link>
    );
};


// --- KOMPONEN UTAMA ---
export default function InfoBoxes() {
    // Perubahan: Menambahkan properti 'icon' untuk setiap kartu
    const cards = [
        { title: 'Cek Kelulusan', href: route('kelulusan.index'), color: 'white', icon: CekKelulusanIcon },
        { title: 'Formulir Pendaftaran', href: route('pendaftaran'), color: 'orange', icon: FormulirIcon },
        { title: 'Panduan Pendaftaran', href: route('panduan.pendaftaran'), color: 'white', icon: PanduanIcon },
        { title: 'Jadwal', href: route('jadwal'), color: 'orange', icon: JadwalIcon },
        { title: 'Biaya', href: route('biaya.pendidikan'), color: 'white', icon: BiayaIcon },
        { title: 'Berita', href: route('berita.index'), color: 'orange', icon: BeritaIcon },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card) => (
                        <InfoCard 
                            key={card.title} 
                            {...card} // Menggunakan spread operator untuk mengirim semua properti
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}