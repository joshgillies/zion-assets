# Site

## API

### site(title, opts, children)

## Example

```js
var assets = require('zion-assets')
var getAssetById = assets.getAssetById
var site = assets.site
var page = assets.page

site('my site', { id: 'site' }, page('home', { link: { index: getAssetById('site') } }))
```
