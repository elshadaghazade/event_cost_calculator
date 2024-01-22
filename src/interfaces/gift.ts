import { iBase } from "./base";

export enum GiftTypeEnum {
    money,
    dress,
    present,
    other
}


export interface iGift extends iBase {
    name: string;
    type: GiftTypeEnum;
    price: number;
    quantity: number;

}