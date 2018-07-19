require('rootpath')();
const express = require('express');
const app = express();
const appServe = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const models = require('_infra/db/models')
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// ___ API ROUTES ___

// use JWT auth to secure the api
app.use('/api', jwt());

// Route needs token
app.use('/api/users', require('./users/users.router'));
app.use('/api/bots', require('./bots/bots.router'));
// app.use('/api/commands', require('./commands/commands.controller'));

// Routes without token
// app.use('/api-pub/contacts', require('./contacts/contacts.controller'));

// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const port = config.development.port;
models.sequelize.sync().then(function() {
    console.log('Models synchronized');
    app.listen(port, function() {
        console.log('Server listening on port ' + port);
    });
});

// ___ Application Serve Server ____
// var distPath = path.join(__dirname, '../ng-app/dist/ng-app');
// appServe.use(express.static(distPath));
// appServe.get('*', function (req, res) {
//     res.sendFile(distPath + '/index.html');
// });
//
// const portServe = config.development.portServe;
// const serverAppServe = appServe.listen(portServe, function(){
//     console.log('Serving application on port ' + portServe);
// });
