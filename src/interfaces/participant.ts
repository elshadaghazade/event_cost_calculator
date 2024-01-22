import { iBase } from "./base";
import { iFood } from "./food";
import { iGift } from "./gift";


export interface iParticipant extends iBase {
    food: iFood[];
    times: number;
    gift?: iGift[]
}