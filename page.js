var isArray = require('isarray')

module.exports = function context (asset) {
  return function page (name, opts, children) {
    if (typeof name !== 'string') {
      children = opts
      opts = name
      name = undefined
    }

    if (opts && opts.type) {
      children = [].slice.call(arguments, 1)
      opts = undefined
    }

    if (!isArray(children)) {
      children = [].slice.call(arguments, 2)
    }

    if (!opts) {
      opts = {}
    }

    if (!opts.name) {
      opts.name = name
    }

    return asset('page_standard', opts, [
      asset('bodycopy', { link: 'type_2', dependant: '1', exclusive: '1' }, [
        asset('bodycopy_div', { link: 'type_2', dependant: '1' }, [
          asset('content_type_wysiwyg', { id: 'test', dependant: '1', exclusive: '1' })
        ])
      ].concat(children))
    ])
  }
}
