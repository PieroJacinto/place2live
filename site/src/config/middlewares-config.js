const { join } = require("path");
const { static } = require("express");
const session = require("express-session");
require("dotenv").config();
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");


module.exports = {
    config(app) {
        app.use(
            session({
                secret: process.env.SECRET,
                saveUninitialized: true,
                resave: true,
            })
        );       
        app.use(userLoggedMiddleware);

        app.use(static(join(__dirname, "..", "..", "public")));
    },
};
