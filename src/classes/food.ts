import { FoodCurrencyEnum, FoodUnitEnum, iFood } from "../interfaces/food";


export class Food implements iFood {
    constructor (
        public name: string,
        public unit: FoodUnitEnum,
        public quantity: number,
        public price: number,
        public currency: FoodCurrencyEnum,
        public vendor?: string | undefined,
    ) {}

    getAmount(): number {
        return this.quantity * this.price;
    }
}