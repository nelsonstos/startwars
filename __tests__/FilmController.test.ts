import request from 'supertest';
import app from '../src/app';  // Importa tu aplicación Express
import { sendResponse } from '../src/infraestructure/utils/responseUtils';
import StarWarsFilmUseCase from '../src/application/useCases/StarWarsFilmUseCase';
import FilmController from '../src/infraestructure/adapters/FilmController';

// Mockear StarWarsFilmUseCase y sendResponse
jest.mock('../src/application/useCases/StarWarsFilmUseCase');
jest.mock('../src/infraestructure/utils/responseUtils');

describe('FilmController', () => {
  const mockSendResponse = sendResponse as jest.Mock;
  const mockGetFilm = StarWarsFilmUseCase.prototype.getFilm as jest.Mock;

  beforeEach(() => {
    mockSendResponse.mockClear();
    mockGetFilm.mockClear();
  });

  it('should return 400 if id parameter is missing', async () => {
    const response = await request(app)
      .get('/films/')
      .send();

    expect(response.status).toBe(400);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      400,
      null,
      'id parameter is required'
    );
  });

  it('should return 404 if film is not found', async () => {
    const id = '1';
    mockGetFilm.mockResolvedValue(null); // Simulamos que no encontramos la película

    const response = await request(app)
      .get(`/films/${id}`)
      .send();

    expect(response.status).toBe(404);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      404,
      null,
      'Film not found'
    );
  });

  it('should return 200 and film data if film is found', async () => {
    const id = '1';
    const film = { id: 1, title: 'A New Hope', releaseDate: '1977-05-25' };
    mockGetFilm.mockResolvedValue(film); // Simulamos que encontramos la película

    const response = await request(app)
      .get(`/films/${id}`)
      .send();

    expect(response.status).toBe(200);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      200,
      film,
      'Film successfully obtained',
      'film'
    );
  });

  it('should return 500 if an error occurs during fetching film data', async () => {
    const id = '1';
    mockGetFilm.mockRejectedValue(new Error('Something went wrong')); // Simulamos un error

    const response = await request(app)
      .get(`/films/${id}`)
      .send();

    expect(response.status).toBe(500);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      500,
      null,
      'An error occurred while updating the film'
    );
  });
});
