# Folder

## API

### folder(title, opts, children)

## Example

```js
var assets = require('zion-assets')
var folder = assets.folder
var page = assets.page

folder('parent', { link: 'type_2' }, page('child'))
```
