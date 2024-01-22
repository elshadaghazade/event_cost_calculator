import { GiftTypeEnum, iGift } from "../interfaces/gift";


export class Gift implements iGift {

    constructor (
        public name: string, 
        public type: GiftTypeEnum, 
        public price: number, 
        public quantity: number
    ) {}

    getAmount(): number {
        return this.price * this.quantity;
    }
    
}