// resources/js/Pages/CekKelulusan.jsx

import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

// Ikon Kaca Pembesar
const SearchIcon = () => (
    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export default function CekKelulusan({ flash = {}, auth }) {
    const { data, setData, post, processing, errors } = useForm({
        no_pendaftaran: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('kelulusan.check'));
    }

    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title="Cek Kelulusan" />

            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/rtq.jpg')" }}>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center min-h-screen lg:min-h-[80vh] py-12 lg:py-0">
                        
                        {/* === KOLOM KIRI (FORM) === */}
                        <div className="lg:w-5/12 w-full max-w-lg">
                            <div className="bg-alyusra-orange p-8 md:p-10 rounded-2xl shadow-2xl text-white">
                                <p className="font-semibold">Cek Kelulusan</p>
                                <h1 className="text-3xl font-bold mt-1">Pendaftaran Siswa Baru</h1>
                                <p className="mt-4 opacity-90">Masukkan No Pendaftaran kamu</p>

                                <form onSubmit={handleSubmit} className="mt-6">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <SearchIcon />
                                        </div>
                                        <input
                                            type="text"
                                            name="no_pendaftaran"
                                            value={data.no_pendaftaran}
                                            onChange={(e) => setData('no_pendaftaran', e.target.value.toUpperCase())}
                                            className="w-full pl-12 pr-20 py-4 text-gray-800 rounded-lg focus:ring-2 focus:ring-alyusra-green border-none"
                                            placeholder="Contoh: RTQ2025001"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute inset-y-0 right-0 m-1.5 px-6 bg-alyusra-dark-blue hover:bg-opacity-90 text-white font-semibold rounded-md flex items-center disabled:opacity-50"
                                            disabled={processing}
                                        >
                                            Cek
                                        </button>
                                    </div>
                                    {errors.no_pendaftaran && <p className="text-white text-sm mt-2">{errors.no_pendaftaran}</p>}
                                </form>
                            </div>
                            
                            {flash.success && (
                                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                    {flash.success}
                                </div>
                            )}
                            {flash.error && (
                                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    {flash.error}
                                </div>
                            )}
                        </div>

                        {/* === KOLOM KANAN (GAMBAR & DESAIN TAMBAHAN) === */}
                        <div className="lg:w-7/12 flex flex-col items-center justify-center mt-12 lg:mt-0 lg:pl-12">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-white">Santri Berprestasi</h2>
                                <p className="text-gray-300">Generasi Qur'ani Kebanggaan Al-Yusra</p>
                            </div>
                            <div className="relative w-full max-w-xl bg-alyusra-orange rounded-tr-[80px] rounded-bl-[80px] shadow-2xl overflow-hidden p-4">
                                <img 
                                    src="/images/crop_santri1.png" 
                                    alt="Santri Berprestasi Al-Yusra"
                                    className="w-full h-full object-cover" 
                                    style={{ borderRadius: '60px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}