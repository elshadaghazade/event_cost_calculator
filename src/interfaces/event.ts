import { iBase } from "./base";
import { iGift } from "./gift";
import { iMedia } from "./media";
import { iParticipant } from "./participant";
import { iVenue } from "./venue";


export interface iEvent extends iBase {
    name: string;
    startDate: Date;
    endDate: Date;
    venue: iVenue[];
    participants: iParticipant[];
    media: iMedia[];
    gifts?: iGift[];
}