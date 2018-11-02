<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Investor extends Model
{

    protected $table = "investor";
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [

        'name','short_name','description','user_id','partner_image','address_line_1','address_line_2','address_area','land_mark','city','state',
        'pincode','isactive','created_at','updated_at','created_by','updated_by','display_order'
    ];
}
