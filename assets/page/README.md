# Page

## API

### page(title, opts, children)

## Example

```js
var assets = require('zion-assets')
var page = assets.page

page('parent', { link: 'type_2' }, page('child'))
```
