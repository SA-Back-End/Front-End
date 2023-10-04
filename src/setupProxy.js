const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Substitua '/api' pela raiz da sua API
    createProxyMiddleware({
      target: 'http://localhost:3000', // Substitua pela URL do seu servidor backend
      changeOrigin: true,
    })
  );
};



