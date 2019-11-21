'use strict'

class JwtController {
    async login({ request, auth }) {
        const { email, password } = request.all()

        return auth.authenticator('jwt')
            .withRefreshToken()
            .attempt(email, password)
    }

    async me({ response, auth }) {
        return response.send(auth.current.user)
    }

    async refresh({ request, auth }) {
        const refreshToken = request.input('refresh_token')
        return await auth
            .newRefreshToken()
            .generateForRefreshToken(refreshToken)
    }

    async logout({ response, auth }) {
        const apiToken = auth.getAuthHeader()
        await auth
            .authenticator('jwt')
            .revokeTokens([apiToken])

        return response.send({ code: 200, message: 'Logout successfully!' })
    }
}

module.exports = JwtController
