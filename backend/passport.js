const googleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport')

passport.use(new googleStrategy({
    clientID : process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET,
    callbackURL : "/auth/google/callback",
    scope: ["profile", "email"],
},(accessToken, refreshToken, profile, callback)=>{
    console.log("accessToken : ", accessToken);
    console.log("refreshToken : ", refreshToken);
    console.log("profile : ", profile);
    callback(null, profile)
}))

passport.serializeUser((user, done)=>{
    done(null, user);
})
passport.deserializeUser((user, done)=>{
    done(null, user);
})