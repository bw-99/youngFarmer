const functions = require("firebase-functions");

// import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const cors = require("cors");

const paymentAPI = require("./payment");
const kakaoAPI = require("./kakao");

exports.paymentAPI = paymentAPI;
exports.kakaoAPI = kakaoAPI;
