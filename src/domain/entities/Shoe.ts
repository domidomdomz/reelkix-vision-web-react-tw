import { Brand } from "../value-objects/Brand";
import { Model } from "../value-objects/Model";
import { Colorway } from "../value-objects/Colorway";
import { SKU } from "../value-objects/SKU";

export class Shoe {

    readonly brand: Brand;
    readonly model: Model;
    readonly colorway: Colorway;
    readonly sku: SKU;
    readonly confidence: number;
    readonly description: string;

    constructor(
        brand: Brand,
        model: Model,
        colorway: Colorway,
        sku: SKU,
        confidence: number,
        description: string
    ){
        this.brand = brand;
        this.model = model;
        this.colorway = colorway;
        this.sku = sku;
        this.confidence = confidence;
        this.description = description;
    }
}