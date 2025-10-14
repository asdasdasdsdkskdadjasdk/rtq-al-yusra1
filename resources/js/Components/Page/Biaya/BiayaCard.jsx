// resources/js/Components/Page/Biaya/BiayaCard.jsx

import { Link } from '@inertiajs/react';

// Ikon checkmark
const CheckIcon = () => (
    <svg className="w-5 h-5 text-white flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default function BiayaCard({ program }) {
    // Tentukan kelas CSS berdasarkan data program
    const isFeatured = program.featured;
    const cardBaseClasses = "rounded-2xl shadow-lg p-8 text-white flex flex-col transition-all duration-300";
    const featuredClasses = isFeatured ? "transform lg:scale-110 z-20" : "z-10";

    return (
        <div className={`${cardBaseClasses} ${featuredClasses}`} style={{ backgroundColor: program.color }}>
            <div className="flex-grow">
                <p className="font-semibold">{program.jenis}</p>
                <h3 className="text-3xl font-extrabold mt-1 mb-6">{program.nama}</h3>

                {/* Rincian Biaya */}
                <ul className="space-y-4 text-left">
                    {program.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon />
                            <div>
                                <p>{item.label}</p>
                                <p className="font-bold text-lg">{item.value}</p>
                                {item.note && (
                                    <p className="text-xs opacity-80 mt-1">{item.note}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}