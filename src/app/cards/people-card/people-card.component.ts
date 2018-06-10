import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-card',
  template: `
    <div *ngIf="card" class="card-people">
        <table class="info">
            <tr><td>Name:</td><td>{{ card.info.name }}</td></tr>
            <tr><td>Hair Colour:</td><td>{{ card.info.hair_color }}</td></tr>
            <tr><td>Skin Colour:</td><td>{{ card.info.skin_color }}</td></tr>
            <tr><td>Eye Colour:</td><td>{{ card.info.eye_color }}</td></tr>
            <tr><td>Gender:</td><td>{{ card.info.gender }}</td></tr>
            <tr><td>Birth Year:</td><td>{{ card.info.birth_year }}</td></tr>
        </table>
        <table class="attributes">
            <tr><td>Height:</td><td>{{ card.attributes.height }}</td></tr>
            <tr><td>Mass:</td><td>{{ card.attributes.mass }}</td></tr>
            <tr><td>Films:</td><td>{{ card.attributes.films }}</td></tr>
            <tr><td>Species:</td><td>{{ card.attributes.species }}</td></tr>
            <tr><td>Vehicles:</td><td>{{ card.attributes.vehicles }}</td></tr>
            <tr><td>Starships:</td><td>{{ card.attributes.starships }}</td></tr>
        </table>
    </div>
  `,
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {
  @Input() card;
  @Input() attribute;
}
