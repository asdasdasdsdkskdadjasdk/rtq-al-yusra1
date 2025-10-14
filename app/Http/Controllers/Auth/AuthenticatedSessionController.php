<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider; // <-- Pastikan ini di-import
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\Rules; // <-- Pastikan ini ada


class AuthenticatedSessionController extends Controller
{
    /**
     * Menampilkan halaman login.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Menangani permintaan otentikasi yang masuk.
     */
    // app/Http/Controllers/Auth/RegisteredUserController.php

public function store(Request $request): RedirectResponse
{
    $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
        'password' => ['required', 'confirmed', Rules\Password::defaults()],
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'role' => 'calon_santri', // Peran default untuk pendaftar baru
    ]);

    event(new Registered($user));

    Auth::login($user);

    // === PERBAIKAN LOGIKA REDIRECT DI SINI ===

    // Jika peran user yang baru mendaftar adalah 'calon_santri' atau 'wali_santri'
    if ($user->role === 'calon_santri' ) {
        // Arahkan mereka ke Beranda
        return redirect(route('beranda'));
    }

    // Untuk peran lainnya, arahkan ke Dashboard
    return redirect(RouteServiceProvider::HOME);
}

    /**
     * Menghancurkan sesi otentikasi.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}