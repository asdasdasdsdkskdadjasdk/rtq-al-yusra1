<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class FormulirController extends Controller
{
    // Kita simulasi data program di sini.
    // Di aplikasi nyata, Anda akan mengambil ini dari database.
    private function getPrograms()
    {
        return [
            [
                'id' => 1,
                'jenis' => 'Reguler',
                'nama' => 'Taman Quran Tabarak',
                'slug' => 'taman-quran-tabarak',
            ],
            [
                'id' => 2,
                'jenis' => 'Reguler',
                'nama' => 'Tahfiz Quran',
                'slug' => 'tahfiz-quran',
            ],
            [
                'id' => 3,
                'jenis' => 'Beasiswa',
                'nama' => 'Tahfiz Yatim Duafa dan Lulusan S1',
                'slug' => 'tahfiz-yatim-duafa-dan-lulusan-s1',
            ],
        ];
    }

    /**
     * Menampilkan halaman formulir berdasarkan slug program.
     */
    public function create($program_slug)
    {
        // Cari program yang cocok berdasarkan slug
        $program = collect($this->getPrograms())->firstWhere('slug', $program_slug);

        // Jika program tidak ditemukan, tampilkan halaman 404
        if (!$program) {
            abort(404);
        }

        return Inertia::render('Formulir', [
            'program' => $program
        ]);
    }

    /**
     * Menyimpan data dari formulir.
     */
    public function store(Request $request, $program_slug)
    {
        // Validasi data yang masuk
        $request->validate([
            'nama' => 'required|string|max:255',
            'no_hp' => 'required|string|max:15',
            'email' => 'required|email|max:255',
            'tanggal_lahir' => 'required|date',
            // Tambahkan validasi untuk semua field lainnya...
            // Untuk file upload
            'ijazah_terakhir' => 'nullable|file|mimes:pdf,jpg,png|max:2048', // max 2MB
            'kartu_keluarga' => 'nullable|file|mimes:pdf,jpg,png|max:2048',
            // ... validasi file lainnya
        ]);

        // --- Logika untuk menyimpan data ke database ---
        // Untuk saat ini, kita lewati bagian ini.
        // Anda akan menyimpan nama, email, dll, dan path dari file yang di-upload.
        // Contoh: $path = $request->file('pas_foto')->store('pas_foto', 'public');
        // ---

        // Redirect kembali ke halaman pendaftaran dengan pesan sukses
        return redirect()->route('pendaftaran')->with('success', 'Formulir berhasil dikirim! Silakan tunggu informasi selanjutnya.');
    }
}