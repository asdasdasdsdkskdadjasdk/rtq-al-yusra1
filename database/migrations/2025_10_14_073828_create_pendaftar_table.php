<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pendaftar', function (Blueprint $table) {
            // Kolom Baru Sesuai Desain
            $table->string('nik', 16)->primary(); // NIK sebagai Primary Key
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade'); // Foreign Key ke tabel users
            
            $table->string('no_pendaftaran')->unique();
            $table->string('program_nama');
            $table->string('program_jenis');
            
            // Data Diri
            $table->string('nama');
            $table->string('no_hp', 20);
            $table->string('email');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir'); // 'date' lebih cocok daripada 'timestamp' untuk tanggal lahir
            $table->integer('umur');
            $table->string('jenis_kelamin');
            $table->text('alamat');
            $table->string('cabang')->nullable(); // Kolom Baru

            // Data Wali
            $table->string('nama_orang_tua');

            // Berkas (menyimpan path file)
            $table->string('ijazah_terakhir')->nullable();
            $table->string('kartu_keluarga')->nullable(); // Typo diperbaiki
            $table->string('pas_foto')->nullable();
            $table->string('skbb')->nullable(); // Surat Keterangan Berkelakuan Baik
            $table->string('sks')->nullable();  // Surat Keterangan Sehat
            
            // Status Pendaftaran
            $table->string('status')->default('Menunggu Verifikasi');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pendaftar');
    }
};