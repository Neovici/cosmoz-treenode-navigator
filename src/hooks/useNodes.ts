import type { Node } from '@neovici/cosmoz-tree';
import { useEffect, useRef, useState } from '@pionjs/pion';

/**
 * Loads a list of nodes, keeping the previous list on screen while the next one
 * is on its way — a level that resolves instantly would otherwise blink through
 * an empty state on every keystroke.
 *
 * Responses are matched against the request that is still current, so a slow
 * level cannot overwrite a faster one the user asked for afterwards.
 */
export const useNodes = (
	load: () => Node[] | Promise<Node[]>,
	deps: unknown[],
) => {
	const [nodes, setNodes] = useState<Node[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();
	const request = useRef(0);

	useEffect(() => {
		const id = ++request.current;

		setLoading(true);
		setError(undefined);

		Promise.resolve()
			.then(load)
			.then(
				(result) => {
					if (id !== request.current) return;
					setNodes(result ?? []);
					setLoading(false);
				},
				(reason) => {
					if (id !== request.current) return;
					setNodes([]);
					setError(reason);
					setLoading(false);
				},
			);
	}, deps);

	return { nodes, loading, error };
};
