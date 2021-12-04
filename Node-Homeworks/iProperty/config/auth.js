const { response } = require("express")

module.exports = {
    osigurajAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) return next()
        res.redirect('/login')
    },

    redirectAuth: (req, res, next) => {
        if (req.isAuthenticated()) res.redirect('/')
        return next()
    }
}
