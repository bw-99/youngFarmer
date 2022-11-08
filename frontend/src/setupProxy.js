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
    '/functions',
    createProxyMiddleware({
        target: process.env.REACT_APP_FIREBASE_FUNCTION_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/functions" : ""
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
