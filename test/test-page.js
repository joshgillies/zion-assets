var test = require('tape')

var za = require('../')

test('basic functionality', function (assert) {
  var assets = za()
  var page = assets.page

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

test('create children', function (assert) {
  var tests = {
    'children as array': function () {
      var assets = za()
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return page('parent', [child1, child2])
    },
    'children as second arg': function () {
      var assets = za()
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return page('parent', child1, child2)
    },
    'children as final args': function () {
      var assets = za()
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return page('parent', { link: 'type_2' }, child1, child2)
    }
  }

  for (var test in tests) {
    assert.equal(tests[test]().children[0].children.length, 3, test)
  }
  assert.end()
})
