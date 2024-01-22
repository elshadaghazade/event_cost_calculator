import { iVenue } from "../interfaces/venue";

export class Venue implements iVenue {
    constructor (
        public name: string, 
        public address: string, 
        public price: number, 
        public period: number) {}

    getAmount(): number {
        return this.price * this.period;
    }
}