require('rootpath')();
const express = require('express');
const app = express();
const appServe = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use('/api', jwt());
// Route needs token
app.use('/api-pub/users', require('./users/users.controller'));
// Routes without token
app.use('/api-pub/contacts', require('./contacts/contacts.controller'));

// global error handler
app.use(errorHandler);

// start server
// const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const port = 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

// ___ Application Serve Server ____
var distPath = path.join(__dirname, '../ng-app/dist/ng-app');
appServe.use(express.static(distPath));
appServe.get('*', function (req, res) {
    res.sendFile(distPath + '/index.html');
});

const portServe = 8080;
const serverAppServe = appServe.listen(portServe, function(){
    console.log('Serving application on port ' + portServe);
});
