require("dotenv").config({path:"../.env"});
const express = require("express")
const createApp = require("./config/create-app");
const appConfig = require("./config/app-config");
const path = require ("path")
const dayjs = require("dayjs");

// CREATE EXPRESS APP
const app = createApp();
appConfig.config(app);

app.locals.dateFormat = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
};

const methodOverride = require("method-override");

const mainRouter = require("./routers/main-router");

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));



// SETUP APP CONFIGURATION


// MOUNT MAIN ROUTER
app.use(mainRouter);