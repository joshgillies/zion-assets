module.exports = function assets (asset) {
  asset = asset || require('node-matrix-assets')

  return {
    folder: require('./assets/folder')(asset),
    site: require('./assets/site')(asset),
    page: require('./assets/page')(asset),
    getAssetById: asset.getAssetById
  }
}
