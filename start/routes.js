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

Route.on('/').render('welcome')

Route.get('login', 'AuthController.login')

Route.group(() => {
    Route.post('login', 'Api/JwtController.login').as('api.login')
    Route.get('me', 'Api/JwtController.me').as('api.me').middleware(['auth:jwt'])
    Route.post('refresh', 'Api/JwtController.refresh').as('api.refresh').middleware(['auth:jwt'])
    Route.post('logout', 'Api/JwtController.logout').as('api.logout').middleware(['auth:jwt'])
}).prefix('api/v1')