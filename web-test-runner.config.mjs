import { esbuildPlugin } from '@web/dev-server-esbuild';
import defaultConfig from '@neovici/cfg/web/test-runner.mjs';

export default {
  ...defaultConfig,
  files: 'test/**/*.test.{js,ts}',
  plugins: [
    ...(defaultConfig.plugins || []),
    esbuildPlugin({ ts: true, target: 'auto' })
  ],
  coverageConfig: {
    ...defaultConfig.coverageConfig,
    include: ['src/**/*.{js,ts}']
  }
};
