
export class StarshipCardModel {
    static attributesToCompare = ['cost_in_credits', 'length', 'max_atmosphering_speed', 'crew', 'passengers', 'cargo_capacity', 'hyperdrive_rating', 'MGLT', 'pilots', 'films'];
    info;
    attributes;

    constructor(data) {
        this.info = {
            name: data.name,
            model: data.model,
            manufacturer: data.manufacturer,
            starship_class: data.starship_class,
        };

        this.attributes = {
            cost_in_credits: +data.cost_in_credits,
            length: +data.length,
            max_atmosphering_speed: +data.max_atmosphering_speed,
            crew: +data.crew,
            passengers: +data.passengers,
            cargo_capacity: +data.cargo_capacity,
            // consumables: data.consumables,
            hyperdrive_rating: +data.hyperdrive_rating,
            MGLT: +data.MGLT,
            pilots: data.pilots.length,
            films: data.films.length,
        };

    }

}