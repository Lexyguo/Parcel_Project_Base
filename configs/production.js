//       production.js
const Bundler = require('parcel-bundler');
let { options, entryFiles } = require('./base');
let config = Object.assign(options, {
    sourceMaps: false,
    publicUrl: './'
});

// 使用提供的入口文件路径和选项初始化 bundler
const bundler = new Bundler(entryFiles, config);
// 运行 bundler，这将返回主 bundle
bundler.on('buildEnd', () => {
    console.log('打包📦结束');
    process.exit(0); // 因为不会自动结束进程。所以手动结束。
});

// Call this to start bundling
bundler.bundle();
