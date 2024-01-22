import { iFood } from "../interfaces/food";
import { iGift } from "../interfaces/gift";
import { iParticipant } from "../interfaces/participant";

export class Participant implements iParticipant {

    constructor (
        public food: iFood[],
        public times: number,
        public gift?: iGift[] | undefined
    ) {}

    getAmount(): number {
        const foodTotal = this.food.reduce((a, b) => a + b.getAmount(), 0);
        const giftTotal = this.gift?.reduce((a, b) => a + b.getAmount(), 0) || 0;
        return foodTotal * this.times + giftTotal;
    }
    
}