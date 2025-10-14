// resources/js/Pages/DetailBerita.jsx

import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function DetailBerita({ post, auth }) { // Menerima 'post' sebagai props dari Controller
    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title={post.title} />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Kotak Putih Konten */}
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                        
                        {/* Judul Berita */}
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-alyusra-dark-blue text-center mb-8">
                            {post.title}
                        </h1>

                        {/* Gambar Utama Berita */}
                        <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8" />

                        {/* Isi Konten Berita */}
                        <div className="prose max-w-none text-gray-700 leading-relaxed">
                            <p>{post.content}</p>
                        </div>

                        {/* Garis Pemisah */}
                        <div className="border-t border-gray-200 my-8"></div>

                        {/* Info Penulis dan Tanggal */}
                        <p className="text-sm text-gray-500">{post.author} | {post.date}</p>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
}