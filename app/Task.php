<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model {

	protected $fillable = ["name", "description", "picture_url"];

	protected $dates = [];

	public static $rules = [
		// Validation rules
	];

	// Relationships

}
