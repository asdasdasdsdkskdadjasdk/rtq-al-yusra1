<?php

namespace App\Http\Controllers;

use App\Models\Pendaftar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PsbController extends Controller
{
    /**
     * Menampilkan halaman manajemen pendaftaran.
     */
    public function index()
    {
        // Ambil semua data pendaftar dari database
        $pendaftar = Pendaftar::latest()->paginate(10); // Ambil data terbaru, 10 per halaman

        return Inertia::render('Admin/PSB/Index', [
            'pendaftar' => $pendaftar,
        ]);
    }
}