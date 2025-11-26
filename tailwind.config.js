/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./app/**/*.{js,jsx}',
'./components/**/*.{js,jsx}',
'./pages/**/*.{js,jsx}',
],
theme: {
extend: {
colors: {
rezeBlue: '#0b3d91',
rezeMint: '#8ef7d6',
},
},
},
plugins: [],
};
