module.exports = function context (asset) {
  return function folder (name, opts, children) {
    if (typeof name !== 'string') {
      children = opts
      opts = name
      name = undefined
    }

    if (!opts) {
      opts = {}
    }

    if (!children) {
      children = []
    }

    if (!opts.name) {
      opts.name = name
    }

    return asset('folder', opts, children)
  }
}
