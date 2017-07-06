const { BabelPlugin, FuseBox } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src/",
  output: "out/$name.js",
  plugins: [
    BabelPlugin({
      config: {
        sourceMaps: true,
        presets: ["es2015"],
        plugins: [["transform-react-jsx"]]
      }
    })
  ]
});

const babelOnly = fuse
  .bundle("withBabelWithFuseBox")
  .target("electron")
  .instructions(`> [index.jsx]`);
const tsWithBabel = fuse
  .bundle("tsWithBabelWithFuseBox")
  .target("electron")
  .instructions(`> [index.tsx]`);

fuse.run();
