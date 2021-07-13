### Installation:

1. Initializing Next App with Latest Version of Tailwind

   ```
   npx create-next-app --example with-tailwindcss ./
   ```

1. Eslint setup

   Add `"lint": "next lint"` to the existing scripts in package.json

   ```
   "scripts": {
   "lint": "next lint"
   }
   ```

   Install required Packages-

   ```
   npm install --save-dev eslint eslint-config-next
   //and after that
   npm run lint
   ```

1. Prettier setup-

   ```
   npm i -D prettier eslint-plugin-prettier eslint-config-prettier
   ```

   Add .prettierrc.js file and include options in this file according to your needs.
   [checkout this](https://prettier.io/docs/en/options.html).
