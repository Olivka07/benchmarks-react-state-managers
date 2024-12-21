import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackConfigOptions } from './types/config'

export function buildLoaders({isDev}: WebpackConfigOptions):webpack.RuleSetRule[] {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
           MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath:string) => Boolean(resPath.includes('.module.')),
                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
              }
            },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ]
    }

    return [
        tsLoader,
        sassLoader
    ]
}