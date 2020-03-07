class ArrayLike {
    constructor(...props) {
        this.length = props.length;

        for (let i = 0; i < props.length; i++) {
            this[i] = props[i];
        }
    }

    entries() {
        let otherThis = this;
        
        return {
            *[Symbol.iterator]() {
                for (let i = 0; i < otherThis.length; i++) {
                    yield [i, otherThis[i]];
                }
            }
        }
    }

    keys() {
        let otherThis = this;
        
        return {
            *[Symbol.iterator]() {
                for (let i = 0; i < otherThis.length; i++) {
                    yield i;
                }
            }
        }
    }

    values() {
        let otherThis = this;
        
        return {
            *[Symbol.iterator]() {
                for (let i = 0; i < otherThis.length; i++) {
                    yield this[i];
                }
            }
        }
    }

    toString(separator = ",") {
        return Array.from(this).join(separator);
    }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
}

module.exports = ArrayLike;