<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resident extends Model
{
    use HasFactory;

    protected $fillable = [
        'resident_id',
        'first_name',
        'middle_name',
        'last_name',
        'suffix',
        'email',
        'contact_number',
        'residential_address',
        'birth_date',
        'gender',
        'civil_status',
        'is_verified',
    ];

    protected $casts = [
        'birth_date' => 'date',
        'is_verified' => 'boolean',
    ];

    public function getFullNameAttribute(): string
    {
        return trim("{$this->first_name} {$this->middle_name} {$this->last_name} {$this->suffix}");
    }
}
