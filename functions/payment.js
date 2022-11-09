const functions = require("firebase-functions");

// import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const cors = require("cors");

function verifyOrder() {
  return;
}


function manageFirebase() {
  return;
}

function callImPortAPI() {
  return;
}


const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));
var port = '3000';
app.set('port', port);

app.get('/' , (req , res) =>{
    return res.status(200).json('hello from user route');
});

app.post('/' , (req , res) =>{
  console.log(req.body);
  return res.status(200);
});

// module.exports = paymentRouter;
module.exports = functions.region("asia-northeast3").https.onRequest(app);