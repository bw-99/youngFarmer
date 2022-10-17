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
};
