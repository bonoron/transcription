const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('top.ejs');
});

app.get('/mypage', (req, res) => {
    res.render('mypage.ejs');
});

app.get('/signin', (req, res) => {
    res.render('signin.ejs');
});

app.get("/send-verification-email", (req, res) => {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => {
      // Render the "sent email verification" page
      res.render("auth/sent-verification-email", { email: user.email });
    }).catch(error => {
      // Handle errors
      console.error("Error sending verification email:", error);
      res.render("auth/error", { error: "Error sending verification email." });
    });
  });
  

//exports.app = functions.https.onRequest(app);
//exports.app = functions.region('asia-northeast1').https.onRequest(app);
exports.app = functions.region('asia-northeast1').https.onRequest(app);