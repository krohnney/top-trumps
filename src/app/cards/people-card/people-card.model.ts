
export class PeopleCardModel {
    static attributesToCompare = ['height', 'mass', 'films', 'species', 'vehicles', 'starships'];
    info;
    attributes;

    constructor(data) {
        this.info = {
            name: data.name,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color,
            birth_year: data.birth_year,
            gender: data.gender,
        };

        this.attributes = {
            height: +data.height,
            mass: +data.mass,
            films: data.films.length,
            species: data.species.length,
            vehicles: data.vehicles.length,
            starships: data.starships.length,
        };
    }
}
