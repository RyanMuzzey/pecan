import * as esbuild from 'esbuild';
import dependencies from './package.json' with { type: 'json' };

const sharedConfig = {
  entryPoints: ["src/app.ts"],
  bundle: true,
  minify: true,
  external: Object.keys(dependencies)//.concat(Object.keys(peerDependencies)),
};

esbuild.build({
  ...sharedConfig,
  packages: 'external',
  platform: 'neutral',
  outfile: 'dist/app.mjs',
  format: 'esm',
});
