<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model {

	protected $fillable = ["user_id", "task_id", "comment"];

	protected $dates = [];

	public static $rules = [
		// Validation rules
	];

	// Relationships

}
