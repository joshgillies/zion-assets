var isArray = require('isarray')

module.exports = function context (asset) {
  return function base (type, opts, children) {
    if (isArray(opts)) {
      children = opts
      opts = undefined
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
    return asset(type, opts, children)
  }
}
