export class StarWarsFilmResponseDTO {
    title: string;
    episodeId: number;
    openingCrawl: string;
    director: string;
    producer: string;
    releaseDate: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
  
    constructor(data: any) {
      this.title = data.title;
      this.episodeId = data.episode_id;
      this.openingCrawl = data.opening_crawl;
      this.director = data.director;
      this.producer = data.producer;
      this.releaseDate = data.release_date;
      this.characters = data.characters;
      this.planets = data.planets;
      this.starships = data.starships;
      this.vehicles = data.vehicles;
      this.species = data.species;
      this.created = data.created;
      this.edited = data.edited;
      this.url = data.url;
    }
  }
  