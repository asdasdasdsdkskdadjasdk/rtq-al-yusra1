// resources/js/Pages/Admin/PSB/Index.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function PendaftaranIndex({ auth, pendaftar }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Manajemen Pendaftaran" />

            <h1 className="text-3xl font-bold text-alyusra-dark-blue mb-8">
                Manajemen Pendaftaran
            </h1>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">No Pendaftaran</th>
                                <th scope="col" className="px-6 py-3">Nama</th>
                                <th scope="col" className="px-6 py-3">No HP</th>
                                <th scope="col" className="px-6 py-3">Program</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendaftar.data.map((item) => (
                                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.no_pendaftaran}
                                    </th>
                                    <td className="px-6 py-4">{item.nama}</td>
                                    <td className="px-6 py-4">{item.no_hp}</td>
                                    <td className="px-6 py-4">{item.program_nama}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* Tombol Aksi (View, Edit, Delete) */}
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 hover:underline">View</button>
                                            <button className="text-green-600 hover:underline">Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}