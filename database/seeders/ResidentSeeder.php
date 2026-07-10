<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Resident::create([
            'resident_id' => 'VGB-2023-0892',
            'first_name' => 'Juan',
            'middle_name' => 'Mercado',
            'last_name' => 'Dela Cruz',
            'email' => 'juan.delacruz@example.com',
            'contact_number' => '+63 917 123 4567',
            'residential_address' => '123 Molave Street, Phase 3, V&G Subdivision, Barangay 96, Tacloban City',
            'birth_date' => '1995-05-14',
            'gender' => 'Male',
            'civil_status' => 'Single',
            'is_verified' => true,
        ]);
    }
}
