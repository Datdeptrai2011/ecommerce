<?php
namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected static ?string $password;
    public function definition(): array
    {
        return [
            'name'=>$this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
            'address'=>$this->faker->address(),
            'phone' => $this->faker->phoneNumber(),
            'avata' => $this->faker->imageUrl(200, 200, 'people'),
            'citizen_identification' => $this->faker->numerify('#########'), // Tạo số ngẫu nhiên 9 chữ số
        ];
    }
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
