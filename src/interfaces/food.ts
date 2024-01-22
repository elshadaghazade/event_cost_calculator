import { iBase } from "./base";

export enum FoodUnitEnum {
    kg,
    litre,
    count,
    other
}

export enum FoodCurrencyEnum {
    usd,
    azn
}

export interface iFood extends iBase {
    name: string;
    unit: FoodUnitEnum;
    quantity: number;
    vendor?: string;
    price: number;
    currency: FoodCurrencyEnum
}