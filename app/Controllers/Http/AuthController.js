'use strict'

class AuthController {
    async showLogin({request, response, view}) {
        return view.render('auth.login');
    } 
}

module.exports = AuthController
