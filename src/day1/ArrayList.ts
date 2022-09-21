export default class ArrayList<T> {
    public length: number;
		public capacity: number;
		public data: Array<T>;

    constructor(initialCapacity: number = 5) {
			this.length = 0; 
			this.capacity = initialCapacity;
			this.data = new Array<T>(Math.max(5, this.capacity));
    }

		prepend(item: T): void {
			this.insertAt(item, 0);
		}

		insertAt(item: T, idx: number): void {
			let tmp;

			if (this.capacity > this.length) {
				tmp = this.data;
			} else {
				this.capacity *= 2;
				tmp = new Array(this.capacity);
			}
			
			for (let i = this.length; i >= idx; i--) {
				tmp[i + 1] = this.data[i];
			}

			tmp[idx] = item;

			this.length++;
			this.data = tmp;
		}

		append(item: T): void {
			this.insertAt(item, this.length);
		}

		remove(item: T): T | undefined {
			for (let i = 0; i < this.length; i++) {
				if (item === this.data[i]) {
					return this.removeAt(i);
				}
			}

			return undefined;
		}

		get(idx: number): T | undefined {
			if (idx > this.length - 1) return undefined;
			return this.data[idx];
		}

		removeAt(idx: number): T | undefined {
			if (idx > this.length - 1) return undefined;
			

			let tmp = this.data[idx];
			for (let i = idx; i < this.length; i++) {
				this.data[i] = this.data[i + 1];
			}

			this.length--;
			return tmp;
		}
}
