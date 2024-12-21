export interface BuildPaths {
    entry: string,
    build: string,
    html: string
}

export type ModeType = 'development' | 'production'

export interface WebpackConfigOptions {
    paths: BuildPaths,
    mode: ModeType,
    isDev: boolean,
    port: number
}

export interface BuildEnv {
    port:number
    mode: ModeType
}