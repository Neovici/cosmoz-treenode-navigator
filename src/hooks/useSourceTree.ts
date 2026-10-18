import type { Node } from '@neovici/cosmoz-tree';
import { useEffect, useMemo, useState } from '@pionjs/pion';
import type { NodeSource } from '../util/source';
import { searchTree, sourceTree } from '../util/source-tree';

export const useSourceTree = (
	source: NodeSource,
	path: string,
	opened?: boolean,
) => {
	const [, refresh] = useState(0);
	const model = useMemo(() => sourceTree(source), [source, opened]);
	const [expanded, setExpanded] = useState<readonly string[]>([]);
	const [highlighted, setHighlighted] = useState('');
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [attempt, setAttempt] = useState(0);
	useEffect(
		() => model.subscribe(() => refresh((value) => value + 1)),
		[model],
	);
	useEffect(() => {
		if (opened === false) return;
		const controller = new AbortController();
		setLoading(true);
		setError(false);
		const initial = path ? model.loadPath(path) : Promise.resolve([] as Node[]);
		initial
			.then(
				async (parts) => {
					if (controller.signal.aborted) return;
					const current = parts[parts.length - 1];
					setExpanded(parts.map((node) => node.pathLocator));
					setHighlighted(current?.pathLocator === path ? path : '');
					if (current) {
						await model.loadLevel(
							source.hasChildren(current) === false
								? source.parentOf(current)
								: current.pathLocator,
						);
					} else {
						await model.loadLevel('');
						if (controller.signal.aborted) return;
						const roots = model.roots();
						setExpanded(roots.map((node) => node.pathLocator));
						await Promise.all(
							roots.map((node) => model.loadLevel(node.pathLocator)),
						);
					}
				},
				() => {
					if (!controller.signal.aborted) setError(true);
				},
			)
			.finally(() => {
				if (!controller.signal.aborted) setLoading(false);
			});
		return () => controller.abort();
	}, [model, path, attempt]);
	return {
		model,
		expanded,
		setExpanded,
		highlighted,
		setHighlighted,
		error,
		loading,
		retry: () => setAttempt((value) => value + 1),
	};
};

export const useSearchTree = (source: NodeSource, query: string) => {
	const [found, setFound] = useState<Awaited<ReturnType<typeof searchTree>>>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [attempt, setAttempt] = useState(0);
	useEffect(() => {
		const controller = new AbortController();
		setError(false);
		if (!query) {
			setFound(undefined);
			setLoading(false);
			return;
		}
		setLoading(true);
		searchTree(source, query)
			.then(
				(result) => {
					if (!controller.signal.aborted) setFound(result);
				},
				() => {
					if (!controller.signal.aborted) {
						setFound(undefined);
						setError(true);
					}
				},
			)
			.finally(() => {
				if (!controller.signal.aborted) setLoading(false);
			});
		return () => controller.abort();
	}, [source, query, attempt]);
	return {
		found,
		loading,
		error,
		retry: () => setAttempt((value) => value + 1),
	};
};
