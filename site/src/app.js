require("dotenv").config({path:"../.env"});
const express = require("express")
const createApp = require("./config/create-app");
const appConfig = require("./config/app-config");

// CREATE EXPRESS APP
const app = createApp();
appConfig.config(app);
const path = require ("path")

const methodOverride = require("method-override");

const mainRouter = require("./routers/main-router");

app.use(express.static(path.join(__dirname, "./public")));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(methodOverride("_method"));



// SETUP APP CONFIGURATION


// MOUNT MAIN ROUTER
app.use(mainRouter);