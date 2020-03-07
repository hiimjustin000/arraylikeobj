interface ArrayLike<T> {
    length: number;
    [Symbol.iterator](): IterableIterator<T>;
    entries(): IterableIterator<[number, T]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<T>;
    /**
     * Returns a string representation of an object.
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
     */
    toString(separator?: string): string;
}

declare var ArrayLike: new <T>(...props: T[]) => ArrayLike<T>;

export = ArrayLike;