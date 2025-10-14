// resources/js/Pages/Formulir.jsx

import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

// Komponen khusus untuk input file
function FileInput({ label, name, onchange, error }) {
    return (
        <div>
            <InputLabel htmlFor={name} value={label} />
            <input
                id={name}
                name={name}
                type="file"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-alyusra-orange/10 file:text-alyusra-orange hover:file:bg-alyusra-orange/20"
                onChange={onchange}
            />
            <InputError message={error} className="mt-2" />
        </div>
    );
}

export default function Formulir({ program, auth }) { // Menerima 'program' sebagai props
    // Inisialisasi form dengan semua field yang dibutuhkan
    const { data, setData, post, processing, errors, progress } = useForm({
        nama: '',
        no_hp: '',
        email: '',
        tanggal_lahir: '',
        tempat_lahir: '',
        nama_orang_tua: '',
        alamat: '',
        umur: '',
        jenis_kelamin: '',
        ijazah_terakhir: null,
        kartu_keluarga: null,
        pas_foto: null,
        skbb: null, // Surat Keterangan Berkelakuan Baik
        sks: null, // Surat Keterangan Sehat
    });

    // Fungsi untuk handle submit form
    function handleSubmit(e) {
        e.preventDefault();
        post(route('formulir.store'));
    }

    return (
        <AppLayout auth={auth}> {/* <-- Teruskan ke AppLayout */}
            <Head title={`Formulir ${program.nama}`} />

            <div className="relative bg-gray-800 py-20" style={{ backgroundImage: "url('/images/rtq.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-6">Formulir</h1>
                    
                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg">
                        <div className="text-center mb-8 border-b pb-6">
                            <p className="font-semibold text-alyusra-orange">{program.jenis}</p>
                            <h2 className="text-3xl font-bold text-alyusra-dark-blue">{program.nama}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Baris 1 */}
                            <div>
                                <InputLabel htmlFor="nama" value="Nama" />
                                <TextInput id="nama" value={data.nama} onChange={e => setData('nama', e.target.value)} className="mt-1 block w-full" />
                                <InputError message={errors.nama} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="no_hp" value="No Hp" />
                                <TextInput id="no_hp" value={data.no_hp} onChange={e => setData('no_hp', e.target.value)} className="mt-1 block w-full" />
                                <InputError message={errors.no_hp} className="mt-2" />
                            </div>

                            {/* ... Tambahkan semua text input lainnya dengan pola yang sama ... */}

                            {/* Contoh File Input */}
                            <FileInput label="Ijazah terakhir" name="ijazah_terakhir" error={errors.ijazah_terakhir} onchange={e => setData('ijazah_terakhir', e.target.files[0])} />
                            <FileInput label="Kartu Keluarga" name="kartu_keluarga" error={errors.kartu_keluarga} onchange={e => setData('kartu_keluarga', e.target.files[0])} />
                            
                            {/* Tambahkan semua file input lainnya */}

                        </div>
                        
                        {/* Progress bar untuk file upload */}
                        {progress && (
                            <div className="w-full bg-gray-200 rounded-full mt-6">
                                <div className="bg-alyusra-green text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${progress.percentage}%` }}>
                                    {progress.percentage}%
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end mt-8">
                            <PrimaryButton className="bg-alyusra-green hover:bg-opacity-90" disabled={processing}>
                                {processing ? 'Mengirim...' : 'Kirim Formulir'}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}