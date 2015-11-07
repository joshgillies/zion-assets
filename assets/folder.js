module.exports = function context (asset) {
  var base = require('./base')(asset)

  return function folder (name, opts) {
    if (typeof name !== 'string') {
      opts = name
      name = undefined
    }

    if (!opts) {
      opts = {}
    }

    if (!opts.name) {
      opts.name = name
    }

    return base.apply(null, ['folder', opts].concat(Array.prototype.slice.call(arguments, 2)))
  }
}
