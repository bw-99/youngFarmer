const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/kakaoLogin',
    createProxyMiddleware({
        target: "https://kauth.kakao.com",
        changeOrigin: true,
        pathRewrite: {
          "^/kakaoLogin" : ""
        }
    })
  );

  app.use(
    '/kakaoAPI',
    createProxyMiddleware({
        target: process.env.REACT_APP_FIREBASE_FUNCTION_KAKAO_API,
        changeOrigin: true,
        pathRewrite: {
          "^/kakaoAPI" : ""
        }
    })
  );


  app.use(
    '/paymentAPI',
    createProxyMiddleware({
        target: process.env.REACT_APP_FIREBASE_FUNCTION_PAYMENT_API,
        changeOrigin: true,
        pathRewrite: {
          "^/paymentAPI" : ""
        }
    })
  );


  app.use(
    '/juso',
    createProxyMiddleware({
        target: process.env.REACT_APP_JUSO_DOMAIN,
        changeOrigin: true,
        pathRewrite: {
          "^/juso" : ""
        }
    })
  );
};
