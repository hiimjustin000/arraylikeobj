# ArrayLike

![NPM Version](https://img.shields.io/npm/v/arraylikeobj.svg?maxAge=3600) ![NPM Downloads](https://img.shields.io/npm/dt/arraylikeobj.svg?maxAge=3600)

Similar to a normal array, but without the functions.

```js
const ArrayLike = require("arraylikeobj");
const arraylike1 = new ArrayLike("Hello", "World");

for (const element of arraylike1) {
    console.log(element); /* Expected output: Hello
                                              World */
}
```

Property / Method | Description | Returns | Is iterable
------------------|-------------|---------|------------
length | The length of the object. | number | false
entries() | An array of the keys and values of the object. | [number, type][] (for every entry) | true
keys() | The keys of the object. | number (for every entry) | true
values() | The values of the object. | type (for every entry) | true
toString(separator?: string) | A string representation of the object, with the values joined by the separator. | string | false

Inspired by [Ecma](https://www.ecmainternational.org).