<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    // Kita simpan data statis di sini untuk sementara, seolah-olah ini dari database.
    private $beritaData = [
        [
            'id' => 1,
            'title' => 'Pengumuman hasil Seleksi PSUD Gelombang I',
            'excerpt' => 'Hasil seleksi Penerimaan Santri Ujian Dini (PSUD) untuk Gelombang I telah diumumkan. Para santri yang lolos diharapkan...',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'image' => '/images/crop_santri1.png',
            'author' => 'admin',
            'date' => '09-April-2025 02:00',
            'featured' => false,
        ],
        [
            'id' => 2,
            'title' => 'Informasi Kegiatan Belajar Selama Ramadhan',
            'excerpt' => 'Selama bulan suci Ramadhan, kegiatan belajar mengajar akan mengalami penyesuaian jadwal untuk memaksimalkan ibadah...',
            'content' => 'Selama bulan suci Ramadhan, kegiatan belajar mengajar di RTQ Al-Yusra akan mengalami penyesuaian jadwal. Kegiatan akan lebih difokuskan pada program tahsin dan tahfidz intensif di pagi dan sore hari. Kelas reguler akan diliburkan dan diganti dengan program-program Ramadhan yang telah disiapkan oleh para ustadz dan ustadzah. Informasi lebih detail akan disampaikan melalui grup wali santri.',
            'image' => '/images/crop_santri1.png',
            'author' => 'admin',
            'date' => '09-April-2025 03:00',
            'featured' => true,
        ],
        [
            'id' => 3,
            'title' => 'Pendaftaran Gelombang II Resmi Dibuka',
            'excerpt' => 'Melihat antusiasme yang tinggi pada gelombang pertama, RTQ Al-Yusra dengan ini resmi membuka pendaftaran untuk Gelombang II...',
            'content' => 'Melihat antusiasme yang tinggi pada gelombang pertama, RTQ Al-Yusra dengan ini resmi membuka pendaftaran untuk Gelombang II. Pendaftaran akan dibuka mulai tanggal 1 Mei 2025 hingga 30 Mei 2025. Calon santri dan wali santri dapat mendaftar melalui halaman pendaftaran online kami atau datang langsung ke sekretariat RTQ Al-Yusra pada jam kerja.',
            'image' => '/images/crop_santri1.png',
            'author' => 'admin',
            'date' => '09-April-2025 02:00',
            'featured' => false,
        ],
    ];

    /**
     * Menampilkan halaman daftar berita (index).
     */
    public function index()
    {
        return Inertia::render('Berita', [
            'berita' => $this->beritaData
        ]);
    }

    /**
     * Menampilkan halaman detail satu berita.
     */
    public function show($id)
    {
        // Cari berita di dalam array berdasarkan ID
        $post = collect($this->beritaData)->firstWhere('id', $id);

        // Jika berita tidak ditemukan, tampilkan halaman 404
        if (!$post) {
            abort(404);
        }

        return Inertia::render('DetailBerita', [
            'post' => $post
        ]);
    }
}