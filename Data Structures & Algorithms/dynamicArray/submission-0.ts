class DynamicArray {
    public array = [];
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.array = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if(this.getSize() === this.getCapacity()) {
            this.resize();
        }
        this.array[this.getSize()] = n;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const lastEltIndex = this.getSize() - 1
        const value = this.array[lastEltIndex];
        this.array[lastEltIndex] = undefined;
        return value;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newArray = new Array(this.getCapacity() * 2);
        for(let i = 0; i < this.getSize(); i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        let size = 0;
        let i = 0;
        while (this.array[i] !== undefined) {
            size++;
            i++;
        }
        return size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.array.length;
    }
}
