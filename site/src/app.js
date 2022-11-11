require("dotenv").config({path:"../.env"});


const createApp = require("./config/create-app");
const appConfig = require("./config/app-config");

const mainRouter = require("./routers/main-router");


// CREATE EXPRESS APP
const app = createApp();

// SETUP APP CONFIGURATION
appConfig.config(app);

// MOUNT MAIN ROUTER
app.use(mainRouter);