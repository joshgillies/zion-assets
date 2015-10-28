var test = require('tape')

var za = require('../')
var assets = za()
var site = assets.site

test('basic functionality', function (assert) {
  var test = site('test')
  assert.equal(test.name, 'test')
  assert.equal(test.type, 'site')
  assert.end()
})
