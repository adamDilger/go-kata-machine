export default function bfs(head: BinaryNode<number>, needle: number): boolean {
	const path = [head]

	while (path.length) {
		const p = path.shift()

		if (!p) continue;

		if (p.value == needle) {
			return true;
		}

		if (p.left) path.push(p.left)
		if (p.right) path.push(p.right)
	}

	return false;
}
