import Mapper from "../../infraestructure/utils/mapper";

const StarWarsFilmToSpanishMapper: Record<string, string> = {
    title: "titulo",
    episodeId: "episodioId",
    openingCrawl: "introduccion",
    director: "director",
    producer: "productor",
    releaseDate: "fechaEstreno",
    characters: "personajes",
    planets: "planetas",
    starships: "navesEstelares",
    vehicles: "vehiculos",
    species: "especies",
    created: "creado",
    edited: "editado",
    url: "url",
  };

  export class StarWarsFilmsToSpanishResponseDTO {
    titulo: string;
    episodioId: number;
    introduccion: string;
    director: string;
    productor: string;
    fechaEstreno: string;
    personajes: string[];
    planetas: string[];
    navesEstelares: string[];
    vehiculos: string[];
    especies: string[];
    creado: string;
    editado: string;
    url: string;

    constructor(data: any) {
        const translatedData = Mapper.applyMapper(data, StarWarsFilmToSpanishMapper)
        this.titulo = translatedData.titulo;
        this.episodioId = translatedData.episodioId;
        this.introduccion = translatedData.introduccion;
        this.director = translatedData.director;
        this.productor = translatedData.productor;
        this.fechaEstreno = translatedData.fechaEstreno;
        this.personajes = translatedData.personajes;
        this.planetas = translatedData.planetas;
        this.navesEstelares = translatedData.navesEstelares;
        this.vehiculos = translatedData.vehiculos;
        this.especies = translatedData.especies;
        this.creado = translatedData.creado;
        this.editado = translatedData.editado;
        this.url = translatedData.url;
    }
}
