import { isMappedTypeNode } from "typescript";
import Mapper from "../../infraestructure/utils/mapper";

const StarWarsCharacterToSpanishMapper: Record<string, string> = {
  name: "nombre",
  height: "altura",
  mass: "masa",
  hairColor: "colorCabello",
  skinColor: "colorPiel",
  eyeColor: "colorOjos",
  birthYear: "añoNacimiento",
  gender: "genero",
  homeworld: "planetaNatal",
  films: "peliculas",
  species: "especies",
  vehicles: "vehiculos",
  starships: "navesEstelares",
  created: "creado",
  edited: "editado",
  url: "url"
};

export class StarWarsCharacterToSpanishResponseDTO {
  nombre: string;
  altura: string;
  masa: string;
  colorCabello: string;
  colorPiel: string;
  colorOjos: string;
  anoNacimiento: string;
  genero: string;
  planetaNatal: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  navesEstelares: string[];
  creado: string;
  editado: string;
  url: string;

  constructor(data: any) {
    // Usar el mapeador para traducir los datos automáticamente
    const translatedData = Mapper.applyMapper(data, StarWarsCharacterToSpanishMapper);

    this.nombre = translatedData.nombre;
    this.altura = translatedData.altura;
    this.masa = translatedData.masa;
    this.colorCabello = translatedData.colorCabello;
    this.colorPiel = translatedData.colorPiel;
    this.colorOjos = translatedData.colorOjos;
    this.anoNacimiento = translatedData.añoNacimiento;
    this.genero = translatedData.genero;
    this.planetaNatal = translatedData.planetaNatal;
    this.peliculas = translatedData.peliculas;
    this.especies = translatedData.especies;
    this.vehiculos = translatedData.vehiculos;
    this.navesEstelares = translatedData.navesEstelares;
    this.creado = translatedData.creado;
    this.editado = translatedData.editado;
    this.url = translatedData.url;
  }
}




