const functions = require("firebase-functions");
const axios = require('axios');
// import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const cors = require("cors");

const REST_API_SECRET = "9vmKXl907lIZPhwkljCXBTsHeUoUQ1OMWSMRnOVoSuj43s6pKbbXRuWRA6glsX0ab77pzYSrO0ivMYO7"
const REST_API_KEY = "2066508051770506"

function verifyOrder() {
  return;
}


function manageFirebase() {
  return;
}

async function callImPortAPI(imp_uid, access_token) {
  const getPaymentData = await axios({
    url: `https://api.iamport.kr/payments/${imp_uid}`, 
    method: "get", // GET method
    headers: { "Authorization": access_token } // 인증 토큰 Authorization header에 추가
  });
  return getPaymentData;
}

async function getImPortToken() {
  const getToken = await axios({
    url: "https://api.iamport.kr/users/getToken",
    method: "post", // POST method
    headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
    data: {
      imp_key: REST_API_KEY, // REST API 키
      imp_secret: REST_API_SECRET // REST API Secret
    }
  });
  return getToken;
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
  return res.sendStatus(200);
});

app.post("/complete", async (req, res) => {
  try {
    const { imp_uid, merchant_uid } = req.body; // req의 body에서 imp_uid, merchant_uid 추출
    // 액세스 토큰(access token) 발급 받기
    const getToken = await getImPortToken();
    const { access_token } = getToken.data.response; // 인증 토큰
    // imp_uid로 아임포트 서버에서 결제 정보 조회
    const getPaymentData = await callImPortAPI(imp_uid, access_token);
    const  { amount, status } = getPaymentData.data.response; // 조회한 결제 정보
    verifyOrder();
    console.log(status);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// module.exports = paymentRouter;
module.exports = functions.region("asia-northeast3").https.onRequest(app);