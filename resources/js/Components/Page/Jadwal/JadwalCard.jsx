// resources/js/Components/Page/Jadwal/JadwalCard.jsx

// Kumpulan Ikon dalam format SVG Component. Anda bisa menggantinya nanti.
const IkonPendaftaran = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const IkonTesMasuk = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const IkonPengumuman = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.584C18.354 5.166 18 6.544 18 8c0 1.456.354 2.834.968 4.166M13 19.242V5.882" />
    </svg>
);

const IkonDaftarUlang = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


export default function JadwalCard({ tahapan }) {
    // Menentukan style berdasarkan warna
    const isWhite = tahapan.color === 'white';
    const containerClasses = isWhite 
        ? 'bg-white text-alyusra-dark-blue' 
        : 'bg-alyusra-orange text-white';

    // Memilih ikon berdasarkan judul
    const renderIcon = () => {
        switch (tahapan.title) {
            case 'Pendaftaran': return <IkonPendaftaran />;
            case 'Tes Masuk': return <IkonTesMasuk />;
            case 'Pengumuman': return <IkonPengumuman />;
            case 'Daftar Ulang': return <IkonDaftarUlang />;
            default: return null;
        }
    };

    return (
        <div className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center ${containerClasses}`}>
            {renderIcon()}
            <h3 className="font-bold text-xl">{tahapan.title}</h3>
            <div className={`w-1/2 h-0.5 my-2 ${isWhite ? 'bg-gray-200' : 'bg-white/30'}`}></div>
            <p className="text-sm">{tahapan.date}</p>
        </div>
    );
}