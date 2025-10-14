<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class KelulusanController extends Controller
{
    /**
     * Menampilkan halaman form cek kelulusan.
     */
    public function index()
    {
        return Inertia::render('CekKelulusan');
    }

    /**
     * Memeriksa status kelulusan berdasarkan nomor pendaftaran.
     */
    public function check(Request $request)
    {
        // Validasi input, harus diisi dan berupa teks
        $request->validate([
            'no_pendaftaran' => 'required|string',
        ]);

        $no_pendaftaran = $request->input('no_pendaftaran');

        // --- SIMULASI DATABASE ---
        // Di aplikasi nyata, Anda akan mencari data ini di database.
        // Untuk sekarang, kita buat data palsu.
        $lulus = ['RTQ2025001', 'RTQ2025003', 'RTQ2025005'];
        $tidak_lulus = ['RTQ2025002', 'RTQ2025004'];
        // --- AKHIR SIMULASI ---

        if (in_array($no_pendaftaran, $lulus)) {
            // Jika nomor ditemukan di array 'lulus', kirim pesan sukses
            return back()->with('success', 'Selamat! Nomor Pendaftaran ' . $no_pendaftaran . ' dinyatakan LULUS.');
        }

        if (in_array($no_pendaftaran, $tidak_lulus)) {
            // Jika nomor ditemukan di array 'tidak_lulus', kirim pesan error
            return back()->with('error', 'Mohon maaf, Nomor Pendaftaran ' . $no_pendaftaran . ' dinyatakan TIDAK LULUS. Tetap semangat!');
        }

        // Jika nomor tidak ditemukan sama sekali
        return back()->with('error', 'Nomor Pendaftaran ' . $no_pendaftaran . ' tidak ditemukan.');
    }
}