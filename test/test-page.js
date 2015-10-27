var test = require('tape')

var za = require('../')
var assets = za()
var page = assets.page

test('basic functionality', function (assert) {
  var test = page('test')
  assert.equal(test.name, 'test')
  assert.equal(test.type, 'page_standard')

  assert.equal(test.children[0].type, 'bodycopy')
  assert.deepEqual(test.children[0].link, { type_2: true })

  assert.equal(test.children[0].children[0].type, 'bodycopy_div')
  assert.deepEqual(test.children[0].children[0].link, { type_2: true })

  assert.equal(test.children[0].children[0].children[0].type, 'content_type_wysiwyg')
  assert.deepEqual(test.children[0].children[0].children[0].link, { type_2: 'div_contents' })
  assert.end()
})
