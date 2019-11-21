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
const User = use('App/Models/User')
const { uuid, str_random } = use('App/Helpers')

class UserSeeder {
  async run () {

    const data = {
      uuid: uuid(),
      username: 'Administrator',
      email: 'admin@premiumfast.net',
      password: await str_random(16)
    }

    const query = new User()
    query.uuid = data.uuid
    query.username = data.username
    query.email = data.email
    query.password = data.password
    query.save()

    console.log(data)
    process.exit()

  }
}

module.exports = UserSeeder
