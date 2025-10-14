// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx', // Pastikan baris ini ada
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            // TAMBAHKAN BLOK INI
            colors: {
                'alyusra-orange': '#E85B25',
                'alyusra-green': '#34A853', // Warna hijau dari logo
                'alyusra-dark-blue': '#242A42',
            },
            // AKHIR BLOK TAMBAHAN
        },
    },

    plugins: [forms],
};