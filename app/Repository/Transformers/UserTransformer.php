<?php
/**
 * Created by PhpStorm.
 * User: d.adelekan
 * Date: 24/08/2016
 * Time: 01:57
 */

namespace App\Repository\Transformers;


class UserTransformer extends Transformer{

    public function transform($user){

        return [
            'id' => $user->id,
            'firstname' => $user->first_name,
            'lastname' => $user->last_name,
            'mobile' => $user->mobile,
            'email' => $user->email,
            'api_token' => $user->auth_key,
        ];

    }

}