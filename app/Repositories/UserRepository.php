<?php

namespace App\Repositories;

use App\User;

class UserRepository {

    /**
     * Store a user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return App\User
     */
    public function store($request)
    {
        return User::create([
            'username' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'picture_url' => 'http://www.nexus1492.eu/wp-content/plugins/smartcat_our_team/inc/img/noprofile.jpg',
            'active' => true,
        ]);
    }

}
