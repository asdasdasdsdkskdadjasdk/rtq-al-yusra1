<?php

use Illuminate\Database\Seeder;
use App\Models\User; // <-- Jangan lupa import User model

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User untuk PSB
        User::factory()->create([
            'name' => 'Admin PSB',
            'email' => 'psb@example.com',
            'role' => 'psb', // role admin PSB
        ]);

        // User untuk Keuangan
        User::factory()->create([
            'name' => 'Admin Keuangan',
            'email' => 'keuangan@example.com',
            'role' => 'keuangan', // role admin Keuangan
        ]);

        // User untuk Calon Santri
        User::factory()->create([
            'name' => 'Calon Santri',
            'email' => 'santri@example.com',
            'role' => 'calon_santri', // role default
        ]);
        User::factory()->create([
            'name' => 'Wali Santri',
            'email' => 'walisantri@example.com',
            'role' => 'wali_santri', // role default
        ]);
    }
}
