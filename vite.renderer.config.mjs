import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config.mjs';


const fileNames = [
  "src",
  "api",
  "pages",
  "assets",
  "shared",
  "layout",
  "features",
  "components",
  "utils"
];

const filePaths = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);

// https://vitejs.dev/config
export default defineConfig((env) => {
  /** @type {import('vite').ConfigEnv<'renderer'>} */
  const forgeEnv = env;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  /** @type {import('vite').UserConfig} */
  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    plugins: [pluginExposeRenderer(name)],
    resolve: {
      preserveSymlinks: true,
      alias: {
        ...filePaths,
      },
    },
    clearScreen: false,
  };
});
