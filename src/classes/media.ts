import { MediaTypeEnum, iMedia } from "../interfaces/media";

export class Media implements iMedia {

    constructor (
        public type: MediaTypeEnum, 
        public price: number,
        public quantity: number
    ) {}

    getAmount(): number {
        return this.price * this.quantity;
    }

}