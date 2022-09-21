export default function bs_list(haystack: number[], needle: number): boolean {
	let lo = 0;
	let hi = haystack.length;
	let m = Math.floor(((hi - lo) / 2) + lo);

	do {
		if (haystack[m] === needle) {
			return true;
		}

		if (needle < haystack[m]) {
			hi = m - 1;
		}
		else {
			lo = m + 1;
		}

		m = Math.floor(((hi - lo) / 2) + lo);
	} while (lo < hi)

	return false;
}
