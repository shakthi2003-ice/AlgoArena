var DAuthStrategy = require('passport-delta-oauth2');

passport.use(new DAuthStrategy(
    {
        clientID: process.env.DAUTH_CLIENT_ID,
        clientSecret: process.env.DAUTH_CLIENT_SECRET,
        callbackURL: "http://www.example.com/auth/dauth/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ email: profile.email }, function (err, user) {
        return cb(err, user);
        });
    }
));