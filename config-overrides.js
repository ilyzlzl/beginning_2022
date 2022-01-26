const { override, fixBabelImports,addLessLoader } = require('customize-cra');

//针对antd实现按需打包
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory:'es',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);
