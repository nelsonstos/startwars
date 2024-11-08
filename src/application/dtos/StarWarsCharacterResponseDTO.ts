// StarWarsCharacterResponseDTO.ts

export class StarWarsCharacterResponseDTO {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  
    constructor(data: any) {
      this.name = data.name;
      this.height = data.height;
      this.mass = data.mass;
      this.hairColor = data.hair_color;
      this.skinColor = data.skin_color;
      this.eyeColor = data.eye_color;
      this.birthYear = data.birth_year;
      this.gender = data.gender;
      this.homeworld = data.homeworld;
      this.films = data.films;
      this.species = data.species;
      this.vehicles = data.vehicles;
      this.starships = data.starships;
      this.created = data.created;
      this.edited = data.edited;
      this.url = data.url;
    }
  }
  