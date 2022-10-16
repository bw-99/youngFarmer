// const { createProxyMiddleware } = require('http-proxy-middleware');
// var express = require('express');
// // var app = express();
// var cors = require('cors')

// const proxy = {
//     target: 'https://www.google.com',
//     changeOrigin: true
// }

// const proxy2 = {
//     target: 'https://www.stackoverflow.com',
//     changeOrigin: true,
// }


// module.exports = function(app) {
//   app.use(cors());

//   app.use(
//     '/search',
//     createProxyMiddleware(proxy)
//   );

//   app.use(
//     '/jobs',
//     createProxyMiddleware(proxy2)
//   );
// };
