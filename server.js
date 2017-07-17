var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/app/index.html')
})

app.use('/images', require('express').static('app/images'));
app.use('/styles', require('express').static('app/styles'));
app.use('/libs', require('express').static('app/libs'));
app.use('/fonts', require('express').static('app/fonts'));
app.use('/fav', require('express').static('app/fav'));
app.use('/data', require('express').static('app/data'));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
