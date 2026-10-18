export interface Item {
	id: string;
	label: string;
	children?: Item[];
}

export const organisation: Item[] = [
	{
		id: 'root',
		label: 'Root',
		children: [
			{
				id: 'ica',
				label: 'Client ICA',
				children: [
					{
						id: 'ica.north',
						label: 'Region North',
						children: [
							{ id: 'ica.north.lulea', label: 'Luleå' },
							{ id: 'ica.north.umea', label: 'Umeå' },
							{ id: 'ica.north.kiruna', label: 'Kiruna' },
						],
					},
					{
						id: 'ica.south',
						label: 'Region South',
						children: [
							{ id: 'ica.south.malmo', label: 'Malmö' },
							{ id: 'ica.south.lund', label: 'Lund' },
						],
					},
					{ id: 'ica.hq', label: 'Head office' },
				],
			},
			{
				id: 'rexel',
				label: 'Client Rexel',
				children: [
					{ id: 'rexel.se', label: 'Sweden' },
					{ id: 'rexel.no', label: 'Norway' },
				],
			},
			{ id: 'food', label: 'Food Market' },
			{ id: 'demo', label: 'Demo structure', children: [] },
		],
	},
];

/** A root with `count` children, a few of which have children of their own. */
export const wide = (count: number): Item[] => [
	{
		id: 'wide',
		label: `Wide node (${count.toLocaleString()} children)`,
		children: Array.from({ length: count }, (_, i) => ({
			id: `wide.${i}`,
			label: `Store ${String(i + 1).padStart(6, '0')}`,
			children:
				i % 1000 === 0
					? [
							{ id: `wide.${i}.a`, label: 'Department A' },
							{ id: `wide.${i}.b`, label: 'Department B' },
						]
					: undefined,
		})),
	},
];

/** Nodes shaped like cosmoz-tree's: `pathLocator` ids, `name` labels, `children` as an object map. */
export interface PathNode {
	pathLocator: string;
	name: string;
	children?: Record<string, PathNode>;
}

export const pathNodes: PathNode[] = [
	{
		pathLocator: '1',
		name: 'C:',
		children: {
			2: {
				pathLocator: '1.2',
				name: 'Windows',
				children: {
					3: { pathLocator: '1.2.3', name: 'System' },
					4: { pathLocator: '1.2.4', name: 'Fonts' },
				},
			},
			5: {
				pathLocator: '1.5',
				name: 'Users',
				children: { 6: { pathLocator: '1.5.6', name: 'John' } },
			},
		},
	},
	{ pathLocator: '7', name: 'D:' },
];
