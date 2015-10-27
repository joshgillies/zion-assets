var isArray = require('isarray')

module.exports = function context (asset) {
  return function site (name, opts, children) {
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

    return asset('site', opts, children)
  }
}
