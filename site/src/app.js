require("dotenv").config({path:"../.env"});
const express = require("express")
const createApp = require("./config/create-app");
const appConfig = require("./config/app-config");
const middlewaresConfig = require("./config/middlewares-config");
const path = require ("path")
const dayjs = require("dayjs");
const methodOverride = require("method-override");

// CREATE EXPRESS APP
const app = createApp();

appConfig.config(app);

//SETUP GLOBAL MIDDLEWARES
middlewaresConfig.config(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.locals.dateFormat = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
};


const mainRouter = require("./routers/main-router");






// SETUP APP CONFIGURATION


// MOUNT MAIN ROUTER
app.use(mainRouter);