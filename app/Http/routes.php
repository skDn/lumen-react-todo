<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return view('index');
});



$app->group(['prefix' => 'api', 'namespace' => 'App\Http\Controllers'], function () use ($app) {
    /**
     * Routes for resource task
     */
    $app->get('task', 'TasksController@all');
    $app->get('task/{id}', 'TasksController@get');
    $app->post('task', 'TasksController@add');
    $app->put('task/{id}', 'TasksController@put');
    $app->delete('task/{id}', 'TasksController@remove');

    /**
     * Routes for resource users
     */
    $app->get('user', 'UsersController@all');
    $app->get('user/{id}', 'UsersController@get');
    $app->post('user', 'UsersController@add');
    $app->put('user/{id}', 'UsersController@put');
    $app->delete('user/{id}', 'UsersController@remove');

    /**
     * Routes for resource comment
     */
    $app->get('comment', 'CommentsController@all');
    $app->get('comment/{id}', 'CommentsController@get');
    $app->post('comment', 'CommentsController@add');
    $app->put('comment/{id}', 'CommentsController@put');
    $app->delete('comment/{id}', 'CommentsController@remove');
});
