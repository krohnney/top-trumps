import { Component, OnInit } from '@angular/core';
import { GameService, PLAYER_ONE, PLAYER_TWO } from "./game/game.service";
import { Observable } from "rxjs/internal/Observable";
import { filter, map } from "rxjs/operators";
import { CardsService } from "./cards/cards.service";

@Component({
    selector: 'app-root',
    template: `
        <H1>Stars Wars Top Trumps</H1>
        
        <button (click)="newGame()">New Game</button>
        
        <div *ngIf="game$ | async as game">
            <p *ngIf="game.winner; else draw">The winner is: {{ getWinnerName(game.winner) }}</p>
            <ng-template #draw>Its a Draw!</ng-template>
            <div *ngIf="game.type === 'people'">
                <app-people-card [card]="game.player1Card"
                                 [attribute]="game.attribute"></app-people-card>
                <app-people-card [card]="game.player2Card"
                                 [attribute]="game.attribute"></app-people-card>
            </div>
            <div *ngIf="game.type === 'starships'">
                <app-starship-card [card]="game.player1Card"
                                   [attribute]="game.attribute"></app-starship-card>
                <app-starship-card [card]="game.player2Card"
                                   [attribute]="game.attribute"></app-starship-card>
            </div>
        </div>
  `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    game$: Observable<any>;

    constructor(private gameService: GameService,
                private cardService: CardsService) {
    }

    ngOnInit() {
        this.newGame();
        this.game$ = this.gameService.game$.pipe(
            filter((game) => game[PLAYER_ONE].card && game[PLAYER_TWO].card),
            map(this.selectWinner()),
            map((game) => {
                return {
                    attribute: game.attribute,
                    winner: game.winner,
                    type: game.type,
                    player1Card: game[PLAYER_ONE].card,
                    player2Card: game[PLAYER_TWO].card,
                }
            }),
        );
    }

    newGame() {
        this.gameService.start();
    }

    selectWinner() {
        return (game) => {
            game.attribute = this.cardService.getRandomAttribute(game.type);
            const p1Attribute = game[PLAYER_ONE].card.attributes[game.attribute];
            const p2Attribute = game[PLAYER_TWO].card.attributes[game.attribute];
            const winner = this.cardService.selectWinningCard(p1Attribute, p2Attribute);

            switch(winner) {
                case p1Attribute:
                    game.winner = PLAYER_ONE;
                    break;
                case p2Attribute:
                    game.winner = PLAYER_TWO;
                    break;
            }

            return game;
        }
    }

    getWinnerName(winner) {
        return winner === PLAYER_ONE ? 'Player One' : 'Player Two';
    }
}
