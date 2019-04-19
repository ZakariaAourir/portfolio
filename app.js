const express = require('express');
const path = require('path');

// port
const port = 3000;

// init app
const app = express();

//routes
const index = require('./route/index');
// view engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');

// moment
app.locals.moment = require('moment');
// static folder
app.set(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//running the port
app.listen(port , () => {
  console.log('server is running on port... ' + port);
});
