// resources/js/Components/Page/Footer.jsx

import { Link } from '@inertiajs/react';

// === KOLEKSI IKON (SVG) ===
const LocationIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const EmailIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const FacebookIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;
const InstagramIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z" /></svg>;
const YouTubeIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>;

// === PERBAIKAN FINAL UNTUK IKON TIKTOK DAN WHATSAPP ===
const TikTokIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.23.02c1.42-.16 2.85-.1 4.26.02.04 1.64.57 3.28 1.67 4.5.94 1.05 2.25 1.73 3.68 1.95v3.46c-1.5-.08-2.99-.48-4.32-1.18v3.52a4.22 4.22 0 0 0-4.21-4.21c-.13 0-.26.01-.39.03v3.24c.14-.02.28-.03.42-.03a2.49 2.49 0 0 1 2.49 2.49v6.36C9.13 22.89 8.01 24 6.7 24c-1.38 0-2.49-1.12-2.49-2.49s1.11-2.49 2.49-2.49c.2 0 .39.02.57.07V9.45c-2.4-.49-4.22-2.5-4.25-4.95C2.98 2.02 5.25 0 7.74 0c.5 0 1 .06 1.49.17v3.21c-.49-.11-.99-.17-1.49-.17a2.5 2.5 0 0 0-2.48 2.48c.01.62.15 1.23.41 1.78-.1-.01-.19-.02-.29-.02-1.38 0-2.49 1.12-2.49 2.49s1.11 2.49 2.49 2.49c1.38 0 2.49-1.11 2.49-2.49V.02h3.21c.04 4.9 3.54 8.9 8.35 9.44V5.82c-1.49-.17-2.86-.85-3.9-1.9-1.07-1.13-1.6-2.68-1.65-4.25h.01z" /></svg>;
const WhatsAppIcon = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.5 1.32 5l-1.41 5.12 5.24-1.38c1.44.79 3.04 1.21 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.18 14.8c-.28-.14-1.65-.81-1.9-1.02-.26-.11-.45-.14-.64.14-.19.28-.72.9-.88 1.08-.16.19-.32.21-.59.07-.28-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.28-.02-.43.12-.57.12-.12.28-.32.41-.47.14-.16.19-.28.28-.47.09-.19.04-.35-.02-.5-.07-.14-.64-1.53-.88-2.1-.23-.55-.48-.48-.64-.48-.16 0-.35-.03-.54-.03-.19 0-.5.21-.64.42-.14.21-.54.66-.54 1.61 0 .95.54 1.86.61 2 .07.14 1.08 1.73 2.62 2.42.36.16.6.21.8.28.3.07.54.04.74-.04.22-.09.65-.26.88-.51.23-.25.23-.46.16-.51z" /></svg>;


export default function Footer() {
    const navLinks = [
        { href: route('pendaftaran'), text: 'Formulir Pendaftaran' },
        { href: route('jadwal'), text: 'Jadwal Pendaftaran' },
        { href: route('biaya.pendidikan'), text: 'Biaya Pendidikan' },
        { href: route('berita.index'), text: 'Informasi & Berita' },
    ];
    
    const socialLinks = [
        { name: 'Facebook', href: 'https://www.facebook.com/people/RTQ-Al-yusra-Pekanbaru/100063560473040/', icon: FacebookIcon },
        { name: 'Instagram', href: 'https://www.instagram.com/rtq_alyusra_pekanbaru?igsh=cjA0dXg2OWl1ejZh', icon: InstagramIcon },
        { name: 'TikTok', href: 'https://www.tiktok.com/@rtqalyusra', icon: TikTokIcon }, // Ganti dengan link TikTok Anda
        { name: 'YouTube', href: 'https://www.youtube.com/@rtqalyusrapekanbaru4110', icon: YouTubeIcon }, // Ganti dengan link YouTube Anda
        { name: 'WhatsApp', href: 'https://wa.me/6285218669128', icon: WhatsAppIcon }, // Ganti dengan nomor Anda
    ];

    return (
        <footer className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/rtq.jpg')" }}>
            <div className="absolute inset-0 bg-alyusra-dark-blue/90"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    <div className="space-y-4">
                        <img src="/images/logo.png" alt="Logo" className="h-24" />
                        <div className="flex items-start">
                            <LocationIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                            <p className="text-gray-400">Jalan Wijaya No 69, Sukajadi, Pekanbaru, Riau 28123, Indonesia.</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Tautan Navigasi</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-gray-400 hover:text-alyusra-orange transition">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <EmailIcon className="w-5 h-5 mr-3 text-alyusra-orange" />
                                <a href="mailto:info@alyusra.com" className="text-gray-400 hover:text-white">info@alyusra.com</a>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 text-alyusra-orange" />
                                <a href="tel:085218669128" className="text-gray-400 hover:text-white">0852-1866-9128</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Sosial Media</h4>
                        <div className="flex space-x-5">
                            {socialLinks.map((social) => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                                    <social.icon className="w-7 h-7" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative bg-black bg-opacity-20 py-4">
                <div className="container mx-auto text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} RTQ Al-Yusra. All rights reserved.
                </div>
            </div>
        </footer>
    );
}