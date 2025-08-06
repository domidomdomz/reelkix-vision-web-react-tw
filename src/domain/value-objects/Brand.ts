export class Brand {
    readonly value: string;

    constructor(value: string) {
        if (!value || value.length < 1) {
            throw new Error('Brand cannot be empty');
        }
        this.value = value;
    }
}