// resources/js/Pages/Berita.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import BeritaCard from '@/Components/Page/Berita/BeritaCard';

// Hapus array 'beritaData' dari sini.
// Sekarang kita menerima 'berita' sebagai props dari Controller
export default function Berita({ berita,auth }) {
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Informasi dan Pengumuman" />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-16">
                        Informasi dan Pengumuman
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {/* Gunakan props 'berita' untuk di-map */}
                        {berita.map((post) => (
                            <BeritaCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}