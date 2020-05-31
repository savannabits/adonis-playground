'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/home').render('welcome')
Route.group(() => { 
    Route.resource('users', 'UserController')
    Route.on('/').render('admin')
}).middleware([]).prefix('admin')

Route.group(() => { 
    Route.get('login', 'AuthController.showLogin').middleware('guest'); 
}).prefix('auth')
// This has to be the last route
Route.any('*', ({view}) =>  view.render('app'))