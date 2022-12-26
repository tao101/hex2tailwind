# hex2tailwind

Converts Hex Colors to Tailwind CSS Color Names.

You can learn more about the reasoning behind creating this package in my blog post [Here](https://www.taoufiqlotfi.tech/blog/post/creating-my-first-npm-package-converting-hex-colors-to-tailwind-css-color-names)

# Installation

```bash
  npm i hex2tailwind
```

## Usage/Examples

```javascript
const Hex2tailwind = require('hex2tailwind');

const hexColor = '#33ccff';
const tailwindClass = Hex2tailwind(hexColor);
console.log(tailwindClass); // Outputs: "sky-500"
```

## License

This package is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License
