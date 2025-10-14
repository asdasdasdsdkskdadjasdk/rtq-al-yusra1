// resources/js/Components/Page/Navbar.jsx

import { Link } from '@inertiajs/react';

export default function Navbar({ auth }) { // Terima props 'auth'
    const navLinks = [
        { href: route('home'), text: 'Home' },
        { href: route('pendaftaran'), text: 'Pendaftaran' },
        { href: route('jadwal'), text: 'Jadwal' },
        { href: route('biaya.pendidikan'), text: 'Biaya' },
        { href: route('berita.index'), text: 'Berita' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img className="h-12 w-auto" src="/images/logo.png" alt="Logo RTQ Al-Yusra" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex md:space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.text} href={link.href} className="font-medium text-gray-500 hover:text-alyusra-orange transition">
                                {link.text}
                            </Link>
                        ))}
                    </nav>

                    {/* === TAMPILAN DINAMIS BERDASARKAN SESI LOGIN === */}
                    <div className="hidden md:block">
                        { auth && auth.user ? (
                            // JIKA USER SUDAH LOGIN
                            <div className="flex items-center space-x-4">
                                <span className="font-semibold text-gray-700">
                                    {auth.user.name}
                                </span>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-red-700 transition"
                                >
                                    Logout
                                </Link>
                            </div>
                        ) : (
                            // JIKA USER ADALAH TAMU (BELUM LOGIN)
                            <Link
                                href={route('login')}
                                className="bg-alyusra-orange text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button (bisa disesuaikan nanti) */}
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-alyusra-orange">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}