import { describe, expect, test } from '@jest/globals';
import { Food } from '../classes/food';
import { FoodCurrencyEnum, FoodUnitEnum, iFood } from '../interfaces/food';
import { Gift } from '../classes/gift';
import { GiftTypeEnum, iGift } from '../interfaces/gift';
import { Media } from '../classes/media';
import { MediaTypeEnum, iMedia } from '../interfaces/media';
import { Participant } from '../classes/participant';
import { Venue } from '../classes/venue';
import { iVenue } from '../interfaces/venue';
import { iParticipant } from '../interfaces/participant';
import { Event } from '../classes/event';

describe('Foods', () => {
    test('Food cost calculator', () => {
        const food = new Food("Pizza", FoodUnitEnum.count, 12, 10, FoodCurrencyEnum.azn, "Papa Johns");
        expect(food.getAmount()).toBe(120);
    });
});

describe('Gifts', () => {
    test('Gift cost calculator', () => {
        const gift = new Gift("Cup", GiftTypeEnum.present, 8, 10);
        expect(gift.getAmount()).toBe(80);
    });
});

describe('Media', () => {
    test('Media cost calculator', () => {
        const media = new Media(MediaTypeEnum.videograph, 300, 2);
        expect(media.getAmount()).toBe(600);
    });
});

describe('Participants', () => {
    test('Participant cost calculator', () => {
        const food: iFood[] = [
            new Food("Pizza", FoodUnitEnum.count, 1, 16, FoodCurrencyEnum.azn)
        ];

        const gift:  iGift[] = [
            new Gift("Cup", GiftTypeEnum.present, 8, 10)
        ];
        const participant = new Participant(food, 1, gift);

        expect(participant.getAmount()).toBe(96);
    });
});

describe('Venues', () => {
    test('Venue cost calculator', () => {
        const venue = new Venue("ADA University", "", 1500, 2)

        expect(venue.getAmount()).toBe(3000);
    });
});

describe('Events', () => {
    test('Event cost calculator', () => {
        const venue: iVenue[] = [
            new Venue("innoland 1", "asdsda", 0, 1),
            new Venue("luftizade center", "asdsad", 200, 1)
        ];
        
        const participants: iParticipant[] = [];
        for(let i = 0; i < 150; i++) {
            const foods: iFood[] = [
                new Food("Pizza", FoodUnitEnum.count, 0.5, 16, FoodCurrencyEnum.azn, "PizzaMizza"),
                new Food("Tea, Coffee & Snacks", FoodUnitEnum.other, 1, 15, FoodCurrencyEnum.azn, "zdfsfd")
            ];
        
            const gifts: iGift[] = [
                new Gift("koynek", GiftTypeEnum.dress, 8, 1),
                new Gift("Sticker", GiftTypeEnum.present, 0.5, 10)
            ];
        
            participants.push(
                new Participant(foods, 1, gifts)
            );
        }
        
        const media: iMedia[] = [
            new Media(MediaTypeEnum.photograph, 150, 2),
            new Media(MediaTypeEnum.videograph, 300, 2),
            new Media(MediaTypeEnum.mounting, 200, 1)
        ];
        
        
        const event = new Event(
            "Techbrains 2023", 
            venue, 
            participants, 
            media, 
            new Date("2024-01-01 10:00"), 
            new Date("2024-01-01 18:00")
        );

        expect(event.getAmount()).toBe(6700);
    });
});