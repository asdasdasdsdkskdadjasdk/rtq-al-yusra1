<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftar extends Model
{
    use HasFactory;

    /**
     * Nama tabel yang terhubung dengan model.
     *
     * @var string
     */
    protected $table = 'pendaftar';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nik',
        'user_id',
        'no_pendaftaran',
        'program_nama',
        'program_jenis',
        'nama',
        'no_hp',
        'email',
        'tempat_lahir',
        'tanggal_lahir',
        'umur',
        'jenis_kelamin',
        'alamat',
        'cabang',
        'nama_orang_tua',
        'ijazah_terakhir',
        'kartu_keluarga',
        'pas_foto',
        'skbb',
        'sks',
        'status',
    ];
}