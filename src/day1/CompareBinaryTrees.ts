function compare_bst(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
	if (a == null && b == null) return true;
	if (a == null || b == null) return false;
	if (a.value !== b.value) return false;

	return compare_bst(a.left, b.left) && compare_bst(a.right, b.right);
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
	return compare_bst(a, b);
}
