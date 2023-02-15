import {Router} from 'express';
const app = Router();

/* GET home page. */
app.get('/', function (req, res, next) {
  res.sendFile('client/build/index.html', { root: '.' });
});

app.get('/login', function (req, res, next) {
  res.sendFile('client/build/index.html', { root: '.' });
});

app.get('/account', function (req, res, next) {
  res.sendFile('client/build/index.html', { root: '.' });
});

module.exports = app;
