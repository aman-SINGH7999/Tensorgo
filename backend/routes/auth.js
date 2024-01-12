const router = require('express').Router();
const passport = require('passport');

router.get("/google/callback", passport.authenticate("google",{
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
}))
// process.env.CLIENT_URL

router.get("/login/failed", (req,res)=>{
    res.status(401).json({
        error: true,
        message: "Log in failure"
    });
});

router.get("/login/success", (req, res)=>{
    // console.log("----------------------++++++++++++++++++++++++++++++++++++++-----------------------", req.user)
    if(req.user){
        res.status(200).send({
            error: false,
            message: "Successfully Loged In",
            user : req.user,
        });
    }else{
        return res.status(403).json({
            error: true,
            message: "Not Authorized"
        });
    }
});

router.get("/google", passport.authenticate("google",{
    scope: ["profile", "email"]
})); 

router.get("/logout", (req,res)=>{
    req.logOut();
    res.redirect(process.env.CLIENT_URL);
})

module.exports = router;