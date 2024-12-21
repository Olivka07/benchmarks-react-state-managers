import { WebpackConfigOptions } from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: WebpackConfigOptions):DevServerConfiguration {
    return {
        historyApiFallback: true,
        port: options.port,
        open: true,
        liveReload: true
    }
}