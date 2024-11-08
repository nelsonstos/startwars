import axios from 'axios';
import { StarWarsCharacterResponseDTO } from '../../application/dtos/StarWarsCharacterResponseDTO'; // Asegúrate de que la ruta sea correcta
import { StarWarsFilmResponseDTO } from '../../application/dtos/StarWarsFilmResponseDTO';

export class SwapiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://swapi.py4e.com/api';
  }

  // Método para obtener personajes por nombre
  async getCharacterByName(name: string): Promise<StarWarsCharacterResponseDTO | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/people/?search=${name}`);
      
      if (response.data && response.data.results.length > 0) {
        // Asumiendo que tomamos el primer personaje de los resultados
        return new StarWarsCharacterResponseDTO(response.data.results[0]);
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error fetching character:', error);
      return null; 
    }
  }

  // Método para obtener información de una película por ID
  async getFilmById(id: number): Promise<StarWarsFilmResponseDTO | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/films/${id}/`);

      if (response.data) {
        return new StarWarsFilmResponseDTO(response.data); 
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching film:', error);
      return null;
    }
  }
}
