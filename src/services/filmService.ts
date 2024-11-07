import { SwapiClient } from "../clients/SwapiClient";
import { StarWarsFilmsToSpanishResponseDTO } from "../dtos/StarWarsFilmToSpanishResponse";

class FilmService {

    async getFilm(id: number) {
        const swapiClient = new SwapiClient();
        const film = await swapiClient.getFilmById(id);
        const toSpanish = new StarWarsFilmsToSpanishResponseDTO(film);
        if (toSpanish) {
          return toSpanish;
        } else {
          console.log('Film not found');
        }
    }
}


export default FilmService;