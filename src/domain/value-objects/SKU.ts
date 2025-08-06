export class SKU {
    readonly value: string;

    constructor(value: string) {
        if (!value || value.length < 1) {
            throw new Error('SKU cannot be empty');
        }
        this.value = value;
    }
}