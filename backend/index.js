require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require("cookie-session")
const passportSetup = require('./passport');
const authRoute = require('./routes/auth');
const feedbackRoute = require('./routes/feedback');

const app = express();

app.use(cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24*60*60*100,
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.get('/',(req,res)=>{
    res.send("Welcome to This page.")
})
app.use("/auth", authRoute);
app.use("/api/v1",feedbackRoute);

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log("server is listening at port ",port)
})