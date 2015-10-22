module.exports = function assets () {
  var asset = require('node-matrix-assets')

  return {
    folder: require('./folder')(asset),
    site: require('./site')(asset),
    page: require('./page')(asset)
  }
}
