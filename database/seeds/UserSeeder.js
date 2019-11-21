'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  async run () {
    const users = await Database
    .table('users')
    .insert({
      username: 'Administrator',
      email: 'admin@premiumfast.net',
      password: await Hash.make('JyWhQkYuhYnCM2EB')
    })
  }
}

module.exports = UserSeeder
