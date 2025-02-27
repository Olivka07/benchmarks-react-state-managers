import path from "path";
import { BuildEnv, BuildPaths, ModeType } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html")
  };

  const mode: ModeType = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config = buildWebpackConfig({
    isDev,
    mode,
    port: PORT,
    paths
  });

  return config;
};
