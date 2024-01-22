import { iBase } from "./base";

export interface iVenue extends iBase {
    name: string;
    address: string;
    price: number;
    period: number;
}