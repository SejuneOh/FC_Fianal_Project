const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://localhost:4020/",
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/contract", {
            target: "https://inirt.inicis.com",
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/smart", {
            target: "https://mobile.inicis.com",
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/stdjs", {
            target: "https://stdpay.inicis.com",
            changeOrigin: true,
        })
    );
};
