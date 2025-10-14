// resources/js/Components/Page/Beranda/CallToAction.jsx

import { Link } from '@inertiajs/react';

export default function CallToAction() {
    return (
        // Ganti 'rtq-gedung.jpg' dengan gambar background Anda yang sesuai
        <section className="relative py-28 bg-cover bg-center" style={{ backgroundImage: "url('/images/rtq-gedung1.jpg')" }}>
            
            {/* 1. Overlay gelap untuk seluruh section agar teks mudah dibaca */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* 2. Kontainer untuk konten yang diposisikan di atas overlay */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                
                {/* 3. Judul utama dengan efek garis oranye */}
                <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                    Menuju 1 Rumah 1 Penghafal <br />
                    {/* Kita bungkus "Al-Quran" dengan span agar bisa diberi garis */}
                    <span className="relative inline-block whitespace-nowrap">
                        {/* Ini adalah teksnya, diberi z-10 agar di atas garis */}
                        <span className="relative z-10">Al-Quran</span>
                        
                        {/* Ini adalah garis oranyenya. Posisinya absolut terhadap span di atas */}
                        <span 
                            className="absolute bottom-1.5 left-0 w-full h-4 bg-alyusra-orange transform -skew-x-12"
                        ></span>
                    </span>
                </h2>

                {/* 4. Subtitle baru sesuai desain */}
                <p className="text-gray-200 text-lg mt-6 mb-8 italic">
                    "Menuju visi dan misi besar demi meraih impian bersama"
                </p>

                {/* 5. Tombol baru sesuai desain */}
                <Link 
                    href={route('pendaftaran')} 
                    className="bg-alyusra-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition inline-flex items-center space-x-2 shadow-lg border-2 border-white/50"
                >
                    <span>Ayo Bergabung</span>
                    <span>&rarr;</span>
                </Link>
            </div>
        </section>
    );
}