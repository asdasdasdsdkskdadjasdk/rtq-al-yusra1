// resources/js/Layouts/AuthenticatedLayout.jsx

import { Link } from '@inertiajs/react';

// === Kumpulan Ikon untuk Sidebar ===
const DashboardIcon = () => <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const PendaftaranIcon = () => <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
const StatusLulusIcon = () => <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PengaturanJadwalIcon = () => <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const KeuanganIcon = () => <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>;


// === Komponen NavLink ===
const NavLink = ({ href, active, children }) => (
    <Link
        href={href}
        className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${ active ? 'bg-alyusra-orange text-white' : 'text-gray-600 hover:bg-gray-200' }`}
    >
        {children}
    </Link>
);

// === DATASTRUKTUR MENU BERDASARKAN PERAN ===
const navigationMenu = {
    psb: [
        { name: 'Dasboard', href: route('dashboard'), icon: DashboardIcon, current: 'dashboard' },
        { name: 'Pendaftaran', href: '#', icon: PendaftaranIcon, current: 'pendaftaran' },
        { name: 'Status Lulus', href: '#', icon: StatusLulusIcon, current: 'status.lulus' },
        { name: 'Pengaturan Jadwal', href: '#', icon: PengaturanJadwalIcon, current: 'pengaturan.jadwal' },
    ],
    keuangan: [
        { name: 'Dasboard', href: route('dashboard'), icon: DashboardIcon, current: 'dashboard' },
        { name: 'Laporan Keuangan', href: '#', icon: KeuanganIcon, current: 'laporan.keuangan' },
    ],
    // --- PERUBAHAN DI SINI ---
    // Diubah dari calon_santri menjadi wali_santri
    wali_santri: [
        { name: 'Dasboard', href: route('dashboard'), icon: DashboardIcon, current: 'dashboard' },
        { name: 'Lihat Status Anak', href: '#', icon: StatusLulusIcon, current: 'status' },
    ],
};


export default function Authenticated({ auth, children }) {
    // --- PERUBAHAN DI SINI ---
    // Diubah dari 'calon_santri' menjadi 'wali_santri' sebagai default
    const userRole = auth.user?.role ?? 'wali_santri';
    const navLinks = navigationMenu[userRole] || [];

    return (
        <div className="min-h-screen flex bg-gray-100">
            <aside className="w-64 bg-white shadow-lg flex flex-col">
                <div className="flex flex-col items-center p-6 border-b">
                    <img src="/images/logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    <h4 className="font-bold text-lg text-alyusra-dark-blue">{auth.user?.name ?? 'Guest'}</h4>
                    <p className="text-sm text-gray-500 capitalize">{userRole.replace('_', ' ')}</p>
                </div>

                <nav className="flex-grow px-4 py-6">
                    {navLinks.map((item) => (
                        <NavLink key={item.name} href={item.href} active={route().current(item.current)}>
                            <item.icon />
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <Link
    href={route('logout')}
    method="post"  // <-- PENTING: Pastikan ini ada dan nilainya "post"
    as="button"     // <-- PENTING: Membuat link berperilaku seperti tombol
    className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors duration-200"
>
    <span>Logout</span>
</Link>
                </div>
            </aside>
            
            <div className="flex-1 flex flex-col">
                <main className="flex-1 p-6 lg:p-10">{children}</main>
                <footer className="text-center py-4 text-sm text-gray-500">
                    Powered by RTQ Al-Yusra &copy; {new Date().getFullYear()} KANAGEM
                </footer>
            </div>
        </div>
    );
}