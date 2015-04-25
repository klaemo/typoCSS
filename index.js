var domready = require('domready')

var html = require('./templates/app.jade')

domready(function () {
  alert('Hello World')
})