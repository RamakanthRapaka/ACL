<?php
namespace App;
use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Zizaco\Entrust\Traits\EntrustUserTrait;
class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract
{
    use Authenticatable, CanResetPassword, EntrustUserTrait;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'user';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id','username', 'email', 'mobile', 'title', 'first_name', 'last_name', 'password', 'password_hash', 'password_reset_token', 'login_auth_token', 'referral_source', 'auth_key', 'mobile_verify', 'role', 'login_count', 'status', 'created_at', 'updated_at', 'profile_pic', 'email_verified'];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'password_reset_token', 'mobile_verify', 'role', 'login_count', 'status'];
    
    
    public function setUpdatedAtAttribute($value)
    {
        return $this->attributes['updated_at'] = strtotime($value);
    }
}