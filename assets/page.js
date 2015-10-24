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
      asset('bodycopy', {
        link: 'type_2',
        attributes: {
          'layout_type': 'none',
          'desc': '',
          'css_class': '',
          'content_type': 'content_type_raw_html',
          'disable_keywords': '',
          'dir': ''
        },
        dependant: '1'
      }, [
        asset('bodycopy_div', { link: 'type_2', dependant: '1' }, [
          asset('content_type_wysiwyg', { link: { type_2: 'div_contents' }, dependant: '1', exclusive: '1' })
        ])
      ].concat(children))
    ])
  }
}

