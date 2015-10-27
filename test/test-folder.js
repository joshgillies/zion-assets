var test = require('tape')

var za = require('../')
var assets = za()
var folder = assets.folder

test('basic functionality', function (assert) {
  var test = folder('test')
  assert.equal(test.name, 'test')
  assert.equal(test.type, 'folder')
  assert.end()
})
