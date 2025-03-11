import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  rootDir:          '.',
  appIndex:         'demo/index.html',
  watch:            true,
  open:             true,
  plugins:          [
    esbuildPlugin({
      ts:     true, // Enable TypeScript compilation
      target: 'es2020', // Target modern JavaScript
    }),
  ],
  nodeResolve:      {
    mainFields: ['browser', 'jsnext', 'jsnext:main', 'module', 'main'],
    dedupe:     (pkg) =>
                  ['@neovici', '@polymer', 'lit', '@pionjs/pion'].find((prefix) =>
                    pkg.startsWith(prefix),
                  ),
  },
  preserveSymlinks: true,
};