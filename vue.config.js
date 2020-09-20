module.exports = {
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
    port: 8088, // 端口号
    // host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      // 代理设置
      "/payment": {
        target: "https://www.xgo.com/",
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        headers: {
          Referer: "https://www.xgo.com/"
        },
        pathRewrite: {
          //重写路径
          "^/payment": "/payment"
        }
      }
    } // 配置多个代理
  },

  // outputDir: 在npm run build时 生成文件的目录 type:string, default:"dist"
  outputDir: "dist",

  publicPath: "./",

  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  lintOnSave: true,

  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          loaders: ["sass-loader"]
        },

        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "image-webpack-loader",
              options: {
                bypassOnDebug: false,
                disable: true,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 75
                }
              }
            }
          ]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    }
  }
};
