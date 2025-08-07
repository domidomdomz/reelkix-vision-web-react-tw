export class Colorway {
    readonly value: string;

    constructor(value: string) {
        // if (!value || value.length < 1) {
        //     throw new Error('Colorway cannot be empty');
        // }
        this.value = value;
    }
}