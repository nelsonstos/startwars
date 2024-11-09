import request from 'supertest';
import app from './../src/app'; // Asegúrate de importar la instancia de tu aplicación Express
import { sendResponse } from '../src/infraestructure/utils/responseUtils';
import StarWarsCharacterUseCase from '../src/application/useCases/StarWarsCharacterUseCase';
import CharacterController from '../src/infraestructure/adapters/CharacterController';

// Mockear StarWarsCharacterUseCase y sendResponse
jest.mock('../src/application/useCases/StarWarsCharacterUseCase');
jest.mock('../src/infraestructure/utils/responseUtils');

describe('CharacterController', () => {
  const mockSendResponse = sendResponse as jest.Mock;
  const mockGetCharacter = StarWarsCharacterUseCase.prototype.getCharacter as jest.Mock;

  beforeEach(() => {
    mockSendResponse.mockClear();
    mockGetCharacter.mockClear();
  });

  it('should return 400 if name parameter is missing', async () => {
    const response = await request(app)
      .get('/characters/')
      .send();

    expect(response.status).toBe(400);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      400,
      null,
      'name parameter is required'
    );
  });

  it('should return 404 if character is not found', async () => {
    const name = 'Luke Skywalker';
    mockGetCharacter.mockResolvedValue(null); // Simulamos que no encontramos al personaje

    const response = await request(app)
      .get(`/characters/${name}`)
      .send();

    expect(response.status).toBe(404);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      404,
      null,
      'character not found'
    );
  });

  it('should return 200 and character data if character is found', async () => {
    const name = 'Luke Skywalker';
    const character = { name: 'Luke Skywalker', species: 'Human' };
    mockGetCharacter.mockResolvedValue(character); // Simulamos que encontramos al personaje

    const response = await request(app)
      .get(`/characters/${name}`)
      .send();

    expect(response.status).toBe(200);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      200,
      character,
      'Character updated obtained',
      'character'
    );
  });

  it('should return 500 if an error occurs during fetching character data', async () => {
    const name = 'Luke Skywalker';
    mockGetCharacter.mockRejectedValue(new Error('Something went wrong')); // Simulamos un error

    const response = await request(app)
      .get(`/characters/${name}`)
      .send();

    expect(response.status).toBe(500);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      500,
      null,
      'An error ocurred while fetching the character data'
    );
  });
});
