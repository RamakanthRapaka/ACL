<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Role;


class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        DB::table('roles')->delete();

        $roles = array(
            ['name' => 'sadmin', 'display_name' => 'sadmin', 'description' => 'Super Admin Can Access Entire Site'],
            ['name' => 'user', 'display_name' => 'user', 'description' => 'User Can Create Loan Applications'],
            ['name' => 'agent', 'display_name' => 'agent', 'description' => 'Chit Fund Agent'],
            ['name' => 'admin', 'display_name' => 'admin', 'description' => 'Admin Can Verify User Applications'],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($roles as $role)
        {
            User::create($role);
        }

        Model::reguard();
    }
}
