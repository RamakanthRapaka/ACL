<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Role;
use App\Permission;


class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    /*public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        DB::table('users')->delete();

        $users = array(
            ['name' => 'Ryan Chenkie', 'email' => 'ryanchenkie@gmail.com', 'password' => Hash::make('secret')],
            ['name' => 'Chris Sevilleja', 'email' => 'chris@scotch.io', 'password' => Hash::make('secret')],
            ['name' => 'Holly Lloyd', 'email' => 'holly@scotch.io', 'password' => Hash::make('secret')],
            ['name' => 'Adnan Kukic', 'email' => 'adnan@scotch.io', 'password' => Hash::make('secret')],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }

        Model::reguard();
    }*/
    
    /*public function run()
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
            Role::create($role);
        }

        Model::reguard();
    }*/
    
    public function run()
    {
        Model::unguard();

        // $this->call(UserTableSeeder::class);
        DB::table('permissions')->delete();

        $permissions = array(
            ['name' => 'create-users', 'display_name' => 'Create Users', 'description' => 'Create Users And Assigne Roles'],
            ['name' => 'verify-applications', 'display_name' => 'Verify Applications', 'description' => 'Verify User Applications'],
            ['name' => 'edit-applications', 'display_name' => 'Edit Applications', 'description' => 'Edit User Applications'],
            ['name' => 'contact-verify', 'display_name' => 'Contacts Verify', 'description' => 'Contacts Verify'],
        );

        // Loop through each user above and create the record for them in the database
        foreach ($permissions as $permission)
        {
            Permission::create($permission);
        }

        Model::reguard();
    }
}
