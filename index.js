let flatten = require('flat'); // Used to flatten the Tailwind colors object
let colors = require('tailwindcss/colors'); // Most up to date colors from Tailwind CSS

//cleaning deprecated colors and non colors Values
delete colors.inherit;
delete colors.current;
delete colors.transparent;
delete colors.warmGray;
delete colors.lightBlue;
delete colors.trueGray;
delete colors.coolGray;
delete colors.blueGray;

// Flattens the color object and adds a "-" delimiter so rose: { '50:"#fff1f2" } becomes "rose-50":#fff1f2
const tailwindFlatColors = flatten(colors, { delimiter: '-' });

// Initialazing the Nearest Neighbor algorithm by Daniel Tao with the tailwind colors
let nearestColor = require('nearest-color').from(tailwindFlatColors);

function hex2tailwind(color) {
  // Checks if the provided color is a correct hex format (either #XXX or #XXXXXX)
  if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
    return nearestColor(color).name;
  } else {
    throw new Error('Wrong Hex color syntax. Please use #xxx or #xxxxxx.');
  }
}

module.exports = hex2tailwind;
