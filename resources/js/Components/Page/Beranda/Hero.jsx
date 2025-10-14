// resources/js/Components/Page/Beranda/Hero.jsx

import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        // Section utama tetap menggunakan gambar background yang digelapkan
        <section
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('/images/rtq.jpg')" }}
        >
            {/* Lapisan overlay hitam transparan */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Kontainer utama yang sekarang menggunakan flexbox untuk dua kolom */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center min-h-[80vh] lg:min-h-[75vh]">

                    {/* === KOLOM KIRI (TEKS) === */}
                    <div className="lg:w-6/12 text-white text-center lg:text-left pt-12 lg:pt-0">
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                            Selamat Datang Para Penghafal Quran Al-Yusra
                        </h1>
                        <p className="mt-6 text-lg text-gray-200 italic drop-shadow-md">
                            "Mencetak generasi Qur'ani yang berakhlak mulia, cerdas, dan bermanfaat bagi ummat."
                        </p>
                        <Link
                            href={route('pendaftaran')} 
                            className="mt-8 bg-alyusra-green text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition inline-flex items-center space-x-2 shadow-lg"
                        >
                            <span>Daftar Sekarang</span>
                            <span className="font-bold">+</span>
                        </Link>
                    </div>


                                    {/* === KOLOM KANAN (GAMBAR UTAMA) === */}
                <div className="lg:w-6/12 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    
                    {/* Kontainer oranye yang sekarang memiliki PADDING */}
                    {/* 'p-4' ditambahkan untuk memberikan jarak/padding antara bingkai oranye dan gambar. */}
                    <div className="relative w-full max-w-xl bg-alyusra-orange rounded-tr-[80px] rounded-bl-[80px] shadow-2xl overflow-hidden p-4">
                        
                        {/* Gambar ini sekarang akan berada di dalam area padding */}
                        <img 
                            src="/images/crop_santri1.png" 
                            alt="Santri Berprestasi Al-Yusra"
                            className="w-full h-full object-cover" 
                            // Kita tambahkan juga rounded di gambar agar lebih halus di sudut dalam
                            // Sesuaikan nilai rounded ini agar cocok dengan lengkungan luar
                            style={{ borderRadius: '60px' }}
                        />

                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}