<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KelulusanController; // <-- TAMBAHKAN ATAU PASTIKAN BARIS INI ADA
use App\Http\Controllers\FormulirController; // <-- TAMBAHKAN IMPORT INI

use Inertia\Inertia;

use App\Http\Controllers\BeritaController; // <-- TAMBAHKAN IMPORT INI


Route::get('/', function () {
    return Inertia::render('Beranda', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// TAMBAHKAN RUTE BARU DI SINI
Route::get('/pendaftaran', function () {
    return Inertia::render('Pendaftaran');
})->name('pendaftaran');

// TAMBAHKAN RUTE BARU DI SINI
Route::get('/beranda', function () {
    return Inertia::render('Beranda');
})->name('beranda');

Route::get('/jadwal', function () {
    return Inertia::render('Jadwal');
})->name('jadwal');

Route::get('/biaya-pendidikan', function () {
    return Inertia::render('BiayaPendidikan');
})->name('biaya.pendidikan');

// Route::get('/berita', function () {
//     return Inertia::render('Berita');
// })->name('berita.index');
Route::get('/cek-kelulusan', [KelulusanController::class, 'index'])->name('kelulusan.index');
Route::post('/cek-kelulusan', [KelulusanController::class, 'check'])->name('kelulusan.check');

Route::get('/berita', [BeritaController::class, 'index'])->name('berita.index');
Route::get('/berita/{id}', [BeritaController::class, 'show'])->name('berita.show');

// TAMBAHKAN RUTE BARU DI SINI
Route::get('/panduan-pendaftaran', function () {
    return Inertia::render('PanduanPendaftaran');
})->name('panduan.pendaftaran');

Route::get('/formulir/{program_slug}', [FormulirController::class, 'create'])->name('formulir.create');
Route::post('/formulir', [FormulirController::class, 'store'])->name('formulir.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
