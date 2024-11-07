
import { compilerOptions } from './tsconfig.json';

export default {
  preset: 'ts-jest',  // Utiliza ts-jest para soportar TypeScript
  testEnvironment: 'node',  // Define el entorno de prueba
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],  // Extensiones de archivos soportadas
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],  // Define las raíces donde se encuentran tus archivos de prueba
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],  // Patrones para encontrar archivos de prueba
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',  // Ruta a tu archivo tsconfig
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': `<rootDir>/src/$1`,  // Mapea el alias '@' a la carpeta 'src'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Si tienes configuración adicional
  // Puedes añadir más configuraciones de Jest si es necesario
};
