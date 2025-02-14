const pkg = require("./package.json");
const postcss = require("rollup-plugin-postcss")
const vue = require("rollup-plugin-vue");
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'esm'
    },
    {
      name: 'vueUi',
      file: pkg.browser,
      format: 'umd',
      globals: {
        vue: 'Vue'
      },
      exports: 'named'
    }
  ],
  external: ['vue'],
  plugins: [

    // 使用 postcss 插件处理 CSS
    postcss({
      // 将 CSS 提取到单独的文件中
      extract: 'vue-ui.css',
      // 可以配置 CSS 预处理器，例如使用 sass
      // 若使用 sass，需安装 sass 依赖：npm install sass --save-dev
      // extensions: ['.css', '.scss'], 
      // use: ['sass'] 
    }),
    vue({
      // 这里需要修改为false
      css: false,
      compileTemplate: true
    }),
    nodeResolve(),
    commonjs()
  ]
};