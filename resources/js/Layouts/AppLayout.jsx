// resources/js/Layouts/AppLayout.jsx

import Navbar from "@/Components/Page/Navbar";
import Footer from "@/Components/Page/Footer";

// Terima props 'auth'
export default function AppLayout({ auth, children }) {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Teruskan props 'auth' ke Navbar */}
            <Navbar auth={auth} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}