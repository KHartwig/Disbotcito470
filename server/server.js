﻿require('rootpath')();
const express = require('express');
const app = express();
const appServe = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('_infra/db/models');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const discordRouter = require('discord/discord.router');
const discordService = require('discord/discord.service');
const env = process.env.NODE_ENV || 'development';
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// ___ API ROUTES ___

// use JWT auth to secure the api
app.use('/api', jwt());

// Route needs token
app.use('/api/users', require('./users/users.router'));
app.use('/api/bots', require('./bots/bots.router'));
app.use('/api/discord', discordRouter.baseRouter);

// Routes without token
// app.use('/api-pub/contacts', require('./contacts/contacts.controller'));

// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const port = config.port;
models.sequelize.sync().then(function() {
    console.log('Models synchronized');
    // Run startup routine
    gracefulStartup();
    app.listen(port, function() {
        console.log('Server listening on port ' + port);
    });
});

// ___ Application Serve Server ____
if (config.serveFrontEnd) {
    var distPath = path.join(__dirname, '../ng-app/dist/ng-app');
    appServe.use(express.static(distPath));
    appServe.get('*', function (req, res) {
        res.sendFile(distPath + '/index.html');
    });

    const portServe = config.portServe;
    const serverAppServe = appServe.listen(portServe, function(){
        console.log('Serving application on port ' + portServe);
    });
}

// ______ STARTUP Routine ____________
function gracefulStartup() {
  // Set all bots offline upon startup
  models.Bot.update({status: 'OFFLINE'}, {where: {}});
  discordService.startup();
}

// ______ SHUTDOWN Routine ___________
function gracefulShutdown(end) {
  discordService.shutdown();
  end();
}

process.on('SIGTERM', function() {
    console.log('Shutting down sigtermx...');
    gracefulShutdown(function () {
      process.exit();
    });
});
process.on('SIGINT', function() {
    console.log('SIGINT !');
    gracefulShutdown(function () {
      process.exit();
    });
});
// Nodemon restart, this is not handled on Windows
process.once('SIGUSR2', function () {
  console.log('SIGUSR2 ! - nodemon restart');
  gracefulShutdown(function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});
