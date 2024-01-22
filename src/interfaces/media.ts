import { iBase } from "./base";

export enum MediaTypeEnum {
    photograph,
    videograph,
    mounting
}

export interface iMedia extends iBase {
    type: MediaTypeEnum;
    price: number;
    quantity: number;
}