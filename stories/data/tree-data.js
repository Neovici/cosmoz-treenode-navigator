export const adminFilesTree = {
	1: {
		name: 'C:',
		pathLocator: '1',
		children: {
			2: {
				name: 'Windows',
				pathLocator: '1.2',
				children: {
					3: {
						name: 'System',
						pathLocator: '1.2.3',
						children: {},
					},
					4: {
						name: 'Microsoft.NET',
						pathLocator: '1.2.4',
						children: {},
					},
				},
			},
			5: {
				name: 'Program Files',
				pathLocator: '1.5',
				children: {
					6: {
						name: 'Microsoft VS Code',
						pathLocator: '1.5.6',
					},
					7: {
						name: 'Git',
						pathLocator: '1.5.7',
					},
				},
			},
			100: {
				name: 'Users',
				pathLocator: '1.100',
				children: {
					200: {
						name: 'Default',
						pathLocator: '1.100.200',
						children: {
							201: {
								name: 'Documents',
								pathLocator: '1.100.200.201',
							},
							202: {
								name: 'Music',
								pathLocator: '1.100.200.202',
							},
							203: {
								name: 'Pictures',
								pathLocator: '1.100.200.203',
							},
						},
					},
					300: {
						name: 'John',
						pathLocator: '1.100.300',
						children: {
							301: {
								name: 'Documents',
								pathLocator: '1.100.300.301',
							},
							302: {
								name: 'Music',
								pathLocator: '1.100.300.302',
							},
							303: {
								name: 'Pictures',
								pathLocator: '1.100.300.303',
							},
						},
					},
					400: {
						name: 'Public',
						pathLocator: '1.100.400',
						children: {
							401: {
								name: 'Public Documents',
								pathLocator: '1.100.400.401',
							},
							402: {
								name: 'Public Music',
								pathLocator: '1.100.400.402',
							},
							403: {
								name: 'Public Pictures',
								pathLocator: '1.100.400.403',
							},
						},
					},
				},
			},
		},
	},
	1000: {
		name: 'D:',
		pathLocator: '1000',
		children: {
			1001: {
				name: 'Data',
				pathLocator: '1000.1001',
				children: {
					1002: {
						name: 'John',
						pathLocator: '1000.1001.1002',
					},
				},
			},
			1002: {
				name: 'Backup',
				pathLocator: '1000.1002',
			},
		},
	},
};
