import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { WebpackConfigOptions } from "./types/config";
import webpack from 'webpack'

export function buildWebpackConfig(options: WebpackConfigOptions): webpack.Configuration {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash:8].js',
            publicPath: isDev ? '/' : '/dist/',
            clean: true
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders(options)
        },
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map': undefined
    }
}