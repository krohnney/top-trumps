import { Injectable } from '@angular/core';

import { from, BehaviorSubject } from "rxjs/";
import { mergeMap, filter, map, take } from "rxjs/operators";

import { CardsService } from "../cards/cards.service";

export const PLAYER_ONE = 'p1';
export const PLAYER_TWO = 'p2';

const initialGameState = {
    winner: null,
    type: '',
    [PLAYER_ONE]: {
        card: null
    },
    [PLAYER_TWO]: {
        card: null
    }
};

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private gameSubject = new BehaviorSubject(initialGameState);
    public game$ = this.gameSubject.asObservable();

    constructor(private cardService: CardsService) {
    }

    start() {
        this.gameSubject.pipe(
            take(1),
            map((game) => {
                game.type = this.cardService.getRandomCardType();
                game.winner = null;
                return game;
            }),
            map((game) => {
                from([PLAYER_ONE, PLAYER_TWO]).pipe(
                    mergeMap((player) => {
                        return this.cardService.getRandomCard(game.type).pipe(
                            map((card) => {
                                game[player].card = card;
                            })
                        )
                    }),
                    filter(() => game[PLAYER_ONE].card && game[PLAYER_TWO].card),
                    map(() => {
                        this.gameSubject.next(game);
                    })

                ).subscribe();
            })
        ).subscribe();
    }

}
