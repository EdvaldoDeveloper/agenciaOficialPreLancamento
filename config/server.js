const session = require('cookie-session');
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');



const app = express();

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'localhost:21163',
            path: 'foo/bar',
            expires: expiryDate
          }
  })
);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true}));


consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);


module.exports = app;

