# debounce

  Used for implementing behavior that should only happen after a repeated
  action from user with a delay.

## Installation

    $ npm install simple-debounce

## Example

```js
var debounce = require('simple-debounce');

// Delays search query call/command for 250 ms after only user finished typing.
function debouncedSearch = debounce((query) => {
    getItemsByName(query);
}, 250)

function handleSearchBoxChange(query) {
    debouncedSearch();
}
```

## License

  MIT
