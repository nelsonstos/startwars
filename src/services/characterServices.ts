import { SwapiClient } from "../clients/SwapiClient";
import { StarWarsCharacterToSpanishResponseDTO } from "../dtos/StarWarsCharacterToSpanishResponseDTO";

class CharacterService {
    
    async getCharacter(name: string) {
        const swapiClient = new SwapiClient();
        //const characterName = 'Luke Skywalker';
        
        const character = await swapiClient.getCharacterByName(name);

        const toSpanish = new StarWarsCharacterToSpanishResponseDTO(character);
        
        if (toSpanish) {
          return toSpanish;
        } else {
          console.log('Personaje not found');
        }
    }
}

export default CharacterService;