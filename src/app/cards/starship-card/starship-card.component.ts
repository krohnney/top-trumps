import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starship-card',
  template: `
    <div *ngIf="card" class="card-starship">
        <table class="info">
            <tr><td>Name:</td><td>{{ card.info.name }}</td></tr>
            <tr><td>Model:</td><td>{{ card.info.model }}</td></tr>
            <tr><td>Manufacturer:</td><td>{{ card.info.manufacturer }}</td></tr>
            <tr><td>Class:</td><td>{{ card.info.starship_class }}</td></tr>
        </table>
        <table class="attributes">
            <tr class="cost_in_credits"><td>Cost:</td><td>{{ card.attributes.cost_in_credits }}</td></tr>
            <tr class="length"><td>Length:</td><td>{{ card.attributes.length }}</td></tr>
            <tr class="max_atmosphering_speed"><td>Speed:</td><td>{{ card.attributes.max_atmosphering_speed }}</td></tr>
            <tr class="crew"><td>Crew:</td><td>{{ card.attributes.crew }}</td></tr>
            <tr class="passengers"><td>Passengers:</td><td>{{ card.attributes.passengers }}</td></tr>
            <tr class="cargo_capacity"><td>Cargo Capacity:</td><td>{{ card.attributes.cargo_capacity }}</td></tr>
            <tr class="hyperdrive_rating"><td>Hyperdrive rating:</td><td>{{ card.attributes.hyperdrive_rating }}</td></tr>
            <tr class="MGLT"><td>MGLT:</td><td>{{ card.attributes.MGLT }}</td></tr>
            <tr class="pilots"><td>Pilots:</td><td>{{ card.attributes.pilots }}</td></tr>
            <tr class="films"><td>Films:</td><td>{{ card.attributes.films }}</td></tr>
        </table>
    </div>
  `,
  styleUrls: ['./starship-card.component.scss']
})
export class StarshipCardComponent {
  @Input() card;
  @Input() attribute;

}
