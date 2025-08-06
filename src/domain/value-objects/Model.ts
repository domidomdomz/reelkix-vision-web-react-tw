export class Model {
    readonly value: string;

    constructor(value: string) {
        if (!value || value.length < 1) {
            throw new Error('Model cannot be empty');
        }
        this.value = value;
    }
}