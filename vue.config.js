const pxtovw = require('postcss-px-to-viewport');
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },

    // css相关配置 配置高于chainWebpack中关于css loader的配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {
                prependData: `
        @import "@/assets/scss/_variable.scss";
      `
            },
            postcss: {
                //给postcss-loader传递选项
                plugins: [
                    new pxtovw({
                        unitToConvert: 'px', //需要转换的单位，默认为"px"；
                        viewportWidth: 375, //设计稿的视口宽度
                        unitPrecision: 5, //单位转换后保留的小数位数
                        propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
                        viewportUnit: 'vw', //转换后的视口单位
                        fontViewportUnit: 'vw', //转换后字体使用的视口单位
                        selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
                        minPixelValue: 1, //设置最小的转换数值
                        mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
                        replace: true, //是否直接更换属性值，而不添加备用属性
                        exclude: [/node_modules/] //忽略某些文件夹下的文件
                    })
                ]
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
}