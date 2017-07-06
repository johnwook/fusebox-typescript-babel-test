# typescript-react-fusebox
How to integrate the best things

# How to test

- `yarn fuse`
  - will output `out/withBabelWithFuseBox.js` transpiled from `index.jsx`
  - will output `out/tsWithBabelWithFuseBox.js` compiled then transpiled from `index.tsx`
- `yarn webpack`
  - will output `out/tsWithBabelWithWebpack.js` compiled then transpiled from `index.tsx`

# Issue

- compiled(then transpiled) with FuseBox emits different import syntax from others
