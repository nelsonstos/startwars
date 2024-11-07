import { SwapiClient } from "./../src/clients/SwapiClient";
import CharacterService from "./../src/services/characterServices"; // Ajusta la ruta según sea necesario
import { StarWarsCharacterToSpanishResponseDTO } from "./../src/dtos/StarWarsCharacterToSpanishResponseDTO";

jest.mock("./../src/clients/SwapiClient"); // Asegúrate de que el cliente esté mockeado

describe("CharacterService", () => {
    let characterService: CharacterService;
    let swapiClientMock: jest.Mocked<SwapiClient>;

    beforeEach(() => {
        characterService = new CharacterService();
        swapiClientMock = new SwapiClient() as jest.Mocked<SwapiClient>;
    });

    it('should return a character in Spanish when a valid name is provided', async () => {
        // Definición correcta del mockCharacter
        const mockCharacter = {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
        };

        // Simula la respuesta del método del cliente
        swapiClientMock.getCharacterByName = jest.fn().mockResolvedValue(mockCharacter);

        const result = await characterService.getCharacter('Luke Skywalker');

        // Verifica que el método fue llamado con el nombre correcto
        expect(swapiClientMock.getCharacterByName).toHaveBeenCalledWith('Luke Skywalker');

        // Verifica que el resultado es una instancia del DTO y contiene la información esperada
        expect(result).toBeInstanceOf(StarWarsCharacterToSpanishResponseDTO);
        expect(result?.nombre).toEqual(mockCharacter.name);
        expect(result?.colorCabello).toEqual(mockCharacter.hair_color); // Verifica que la propiedad coincida
        expect(result?.colorPiel).toEqual(mockCharacter.skin_color); // Verifica que la propiedad coincida
        expect(result?.colorOjos).toEqual(mockCharacter.eye_color); // Verifica que la propiedad coincida
        expect(result?.anoNacimiento).toEqual(mockCharacter.birth_year); // Verifica que la propiedad coincida
        expect(result?.genero).toEqual(mockCharacter.gender); // Verifica que la propiedad coincida
    });

    it('should log "Personaje not found" when the character is not found', async () => {
        console.log = jest.fn(); // Mockear console.log

        swapiClientMock.getCharacterByName.mockResolvedValue(null); // Simular que no se encontró el personaje

        await characterService.getCharacter('Unknown Character');

        expect(console.log).toHaveBeenCalledWith('Personaje not found');
    });
});
