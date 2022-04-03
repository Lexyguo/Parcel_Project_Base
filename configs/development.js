// development.js
const Bundler = require('parcel-bundler');
let { options, entryFiles } = require('./base');
let config = Object.assign(options, {
    port: 3001,
    outDir: './dev'
});

(async function () {
    // 使用提供的入口文件路径和选项初始化 bundler
    const bundler = new Bundler(entryFiles, config);
    // 运行 bundler，这将返回主 bundle
    // 如果你正在使用监听模式，请使用下面这些事件，这是因为该 promise 只会触发一次，而不是每次重新构建时都触发
    const bundle = await bundler.serve(config.port);
})();
