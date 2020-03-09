const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/miaov",
    createProxyMiddleware({
      target: "https://data.miaov.com/",
      secure: true,
      pathRewrite: {
        "^/miaov": ""
      },
      changeOrigin: true,
      cookieDomainRewrite: "https://data.miaov.com/"
    })
  );
};
