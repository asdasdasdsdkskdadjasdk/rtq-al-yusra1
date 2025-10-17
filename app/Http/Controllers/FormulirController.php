<?php

namespace App\Http\Controllers;

use App\Models\Pendaftar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // <-- Pastikan ini ada
use Inertia\Inertia;

class FormulirController extends Controller
{
    private function getPrograms()
    {
        return [
            ['id' => 1, 'jenis' => 'Reguler', 'nama' => 'Taman Quran Tabarak', 'slug' => 'taman-quran-tabarak'],
            ['id' => 2, 'jenis' => 'Reguler', 'nama' => 'Tahfiz Quran', 'slug' => 'tahfiz-quran'],
            ['id' => 3, 'jenis' => 'Beasiswa', 'nama' => 'Tahfiz Yatim Duafa dan Lulusan S1', 'slug' => 'tahfiz-yatim-duafa-dan-lulusan-s1'],
        ];
    }

    public function create($program_slug)
    {
        $program = collect($this->getPrograms())->firstWhere('slug', $program_slug);
        if (!$program) abort(404);
        return Inertia::render('Formulir', ['program' => $program]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nik' => 'required|string|size:16|unique:pendaftar,nik',
            'nama' => 'required|string|max:255',
            'no_hp' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'tempat_lahir' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'umur' => 'required|integer|min:0',
            'jenis_kelamin' => 'required|string',
            'alamat' => 'required|string',
            'cabang' => 'required|string|max:255',
            'nama_orang_tua' => 'required|string|max:255',
            'program_nama' => 'required|string',
            'program_jenis' => 'required|string',
            'ijazah_terakhir' => 'nullable|file|mimes:pdf,jpg,png,jpeg|max:2048',
            'kartu_keluarga' => 'nullable|file|mimes:pdf,jpg,png,jpeg|max:2048',
            'pas_foto' => 'nullable|file|mimes:jpg,png,jpeg|max:2048',
            'skbb' => 'nullable|file|mimes:pdf,jpg,png,jpeg|max:2048',
            'sks' => 'nullable|file|mimes:pdf,jpg,png,jpeg|max:2048',
        ]);

        $dataToSave = $validatedData;
        
        $filesToUpload = ['ijazah_terakhir', 'kartu_keluarga', 'pas_foto', 'skbb', 'sks'];
        foreach ($filesToUpload as $file) {
            if ($request->hasFile($file)) {
                $dataToSave[$file] = $request->file($file)->store('berkas_pendaftaran', 'public');
            } else {
                $dataToSave[$file] = null;
            }
        }
        
        $dataToSave['no_pendaftaran'] = 'RTQ-' . now()->format('Ymd') . '-' . strtoupper(substr(uniqid(), -4));
        $dataToSave['user_id'] = Auth::id(); // <-- PERBAIKAN PENTING ADA DI SINI
        $dataToSave['status'] = 'Menunggu Verifikasi';
        
        Pendaftar::create($dataToSave);

        return redirect()->route('pendaftaran')->with('success', 'Formulir berhasil dikirim! Nomor Pendaftaran Anda: ' . $dataToSave['no_pendaftaran']);
    }
}