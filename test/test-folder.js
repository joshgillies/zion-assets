var test = require('tape')

var za = require('../')

test('basic functionality', function (assert) {
  var assets = za()
  var folder = assets.folder

  var test = folder('test')
  assert.equal(test.name, 'test')
  assert.equal(test.type, 'folder')
  assert.end()
})

test('create children', function (assert) {
  var tests = {
    'children as array': function () {
      var assets = za()
      var folder = assets.folder
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return folder('parent', [child1, child2])
    },
    'children as second arg': function () {
      var assets = za()
      var folder = assets.folder
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return folder('parent', child1, child2)
    },
    'children as final args': function () {
      var assets = za()
      var folder = assets.folder
      var page = assets.page

      var child1 = page('child1')
      var child2 = page('child2')

      return folder('parent', { link: 'type_2' }, child1, child2)
    }
  }

  for (var test in tests) {
    assert.equal(tests[test]().children.length, 2, test)
  }
  assert.end()
})
