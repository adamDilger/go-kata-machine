export default function bubble_sort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			const nextIndex = j + 1;
			if (arr[nextIndex] < arr[j]) {
				const tmp = arr[nextIndex];
				arr[nextIndex] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}
