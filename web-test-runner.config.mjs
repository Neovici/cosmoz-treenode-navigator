import cfg from '@neovici/cfg/web/test-runner.mjs';

export default {
		...cfg,
		testFramework: { config: { ui: 'bdd' }},
};
