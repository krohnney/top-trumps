import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";

import { ApiService } from "../services/api.service";
import { PeopleCardModel } from "./people-card/people-card.model";
import { StarshipCardModel } from "./starship-card/starship-card.model";


@Injectable({
    providedIn: 'root'
})
export class CardsService {
    private cardTypes = ['people', 'starships'];
    private config = {'people': 9, 'starships': 4};

    constructor(private api: ApiService) {}

    getRandomCardType() {
        return this.cardTypes[this.getRandomNumber(0, 1)];
    }

    getRandomCard(type='people') {
        const pageNum = this.getRandomNumber(1, this.config[type]);
        return this.api.get(type, pageNum).pipe(
            map((data) => {
                const randomCardNumber = this.getRandomNumber(0, data.results.length-1);
                let card = data.results[randomCardNumber];

                if (type === 'people') {
                    card = new PeopleCardModel(card);
                }

                if (type === 'starships') {
                    card = new StarshipCardModel(card);
                }

                return card;
            })
        );
    }

    getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomAttribute(type) {
        let attributes = [];

        switch (type) {
            case 'people':
                attributes = PeopleCardModel.attributesToCompare;
                break;
            case 'starships':
                attributes = StarshipCardModel.attributesToCompare;
                break;
        }

        return attributes[this.getRandomNumber(0, attributes.length)];
    }

    selectWinningCard(cardA, cardB) {
        const cardAIsNumber = typeof cardA === 'number';
        const cardBIsNumber = typeof cardB === 'number';

        if (cardAIsNumber && !cardBIsNumber) {
            return cardA;
        }

        if (!cardAIsNumber && cardBIsNumber) {
            return cardB;
        }

        if (cardA > cardB) {
            return cardA;
        }

        if (cardB > cardA) {
            return cardB;
        }

        return 'Draw';
    }
}
