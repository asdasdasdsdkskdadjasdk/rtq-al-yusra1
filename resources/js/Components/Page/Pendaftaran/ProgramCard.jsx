// resources/js/Components/Page/Pendaftaran/ProgramCard.jsx

import { Link } from '@inertiajs/react';

// SVG Icon untuk checkmark
const CheckIcon = () => (
    <svg className="w-5 h-5 text-white flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

// PERUBAHAN: Menerima props 'auth' dan 'onRegisterClick'
export default function ProgramCard({ program, auth, onRegisterClick }) {
    const isFeatured = program.featured;
    const cardBaseClasses = "rounded-2xl shadow-lg p-8 text-white flex flex-col transition-all duration-300";
    const featuredClasses = isFeatured ? "transform lg:scale-110 z-20" : "z-10";

    return (
        <div className={`${cardBaseClasses} ${featuredClasses}`} style={{ backgroundColor: program.color }}>
            <div className="flex-grow">
                <p className="font-semibold">{program.jenis}</p>
                <h3 className="text-3xl font-extrabold mt-1 mb-4">{program.nama}</h3>
                <p className="text-sm opacity-90">Batas Pendaftaran : {program.batas_pendaftaran}</p>
                <p className="text-sm opacity-90">{program.tes}</p>
                <div className="border-t border-white/20 my-6"></div>
                <h4 className="font-bold mb-3">Detail Formulir</h4>
                <ul className="space-y-3 text-sm">
                    {program.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-8">
                <p className="font-bold text-lg">Biaya : {program.biaya}</p>
                
                {/* PERUBAHAN UTAMA: Link sekarang memiliki onClick handler */}
                <Link
                    // Jika sudah login, href mengarah ke form. Jika tidak, tidak kemana-mana.
                    href={auth?.user ? route('formulir.create', { program_slug: program.slug }) : '#'}
                    // onClick akan memeriksa status login sebelum navigasi
                    onClick={(e) => {
                        if (!auth?.user) {
                            e.preventDefault(); // Mencegah link pindah halaman
                            onRegisterClick();  // Memanggil fungsi untuk membuka modal
                        }
                    }}
                    className="mt-4 block w-full text-center bg-white text-alyusra-dark-blue font-bold py-3 rounded-lg hover:bg-gray-200 transition"
                >
                    Daftar
                </Link>
            </div>
        </div>
    );
}