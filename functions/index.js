const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('top.ejs');
});

app.get('/note', (req, res) => {
    res.render('note.ejs');
});

app.get('/signin', (req, res) => {
    res.render('signin.ejs');
});

app.get('/home', (req, res) => {
  res.render('home.ejs');
});


//exports.app = functions.https.onRequest(app);
//exports.app = functions.region('asia-northeast1').https.onRequest(app);
exports.app = functions.region('asia-northeast1').https.onRequest(app);