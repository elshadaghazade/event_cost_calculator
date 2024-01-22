import { iEvent } from "../interfaces/event";
import { iGift } from "../interfaces/gift";
import { iMedia } from "../interfaces/media";
import { iParticipant } from "../interfaces/participant";
import { iVenue } from "../interfaces/venue";


export class Event implements iEvent {

    public getAmount(): number {
        const venueTotal = this.venue.reduce((a, b) => a + b.getAmount(), 0);
        const participantsTotal = this.participants.reduce((a, b) => a + b.getAmount(), 0);
        const mediaTotal = this.media.reduce((a, b) => a + b.getAmount(), 0);
        const gifts = this.gifts?.reduce((a, b) => a + b.getAmount(), 0) || 0;
        return venueTotal + participantsTotal + mediaTotal + gifts;
    }
    
    constructor (
        public name: string,
        public venue: iVenue[],
        public participants: iParticipant[],
        public media: iMedia[],
        public startDate: Date,
        public endDate: Date,
        public gifts?: iGift[],
    ) {}
}