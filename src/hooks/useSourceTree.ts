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
	// Opened below the top level, only that node and what is below it are listed.
	const [scope, setScope] = useState<Node>();
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [attempt, setAttempt] = useState(0);
	useEffect(
		() => model.subscribe(() => refresh((value) => value + 1)),
		[model],
	);
	useEffect(() => {
		setHighlighted('');
		setExpanded([]);
		setScope(undefined);
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
					if (current?.pathLocator === path && parts.length > 1) {
						setScope(current);
						setExpanded([path]);
						setHighlighted(path);
						if (source.hasChildren(current) !== false) {
							await model.loadLevel(path);
						}
					} else if (current) {
						if (current.pathLocator === path) setHighlighted(path);
						setExpanded(parts.map((node) => node.pathLocator));
						await Promise.all([
							model.loadLevel(''),
							...parts
								.filter((node) => source.hasChildren(node) !== false)
								.map((node) => model.loadLevel(node.pathLocator)),
						]);
					} else {
						await model.loadLevel('');
						if (controller.signal.aborted) return;
						const roots = model.roots();
						setExpanded(roots.map((node) => node.pathLocator));
						await Promise.all(
							roots
								.filter((node) => source.hasChildren(node) !== false)
								.map((node) => model.loadLevel(node.pathLocator)),
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
		scope,
		setScope,
		error,
		loading,
		retry: () => setAttempt((value) => value + 1),
	};
};

export const useSearchTree = (
	source: NodeSource,
	query: string,
	scope = '',
) => {
	const [found, setFound] = useState<
		Awaited<ReturnType<typeof searchTree>> & { widened?: boolean }
	>();
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
		setFound(undefined);
		// A scoped search that misses widens to all nodes rather than dead-ending.
		searchTree(source, query, scope)
			.then(async (result) =>
				scope && !result.roots.length
					? { ...(await searchTree(source, query)), widened: true }
					: result,
			)
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
	}, [source, query, scope, attempt]);
	return {
		found,
		loading,
		error,
		retry: () => setAttempt((value) => value + 1),
	};
};
