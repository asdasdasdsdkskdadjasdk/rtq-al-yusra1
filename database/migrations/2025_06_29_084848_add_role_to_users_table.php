<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
// dalam file migrasi add_role_to_users_table.php

public function up(): void
{
    Schema::table('users', function (Blueprint $table) {
        // Menambahkan kolom 'role' setelah kolom 'email'
        // Default value adalah 'calon_santri'
        $table->string('role')->after('email')->default('calon_santri');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
