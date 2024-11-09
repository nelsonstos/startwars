import request from 'supertest';
import app from '../src/app'; // Importa tu aplicación Express
import { sendResponse } from '../src/infraestructure/utils/responseUtils';
import ClientUseCase from '../src/application/useCases/ClientUseCase';
import ClientController from '../src/infraestructure/adapters/ClientController';
import { ClientDTO } from '../src/application/dtos/ClientDTO';

// Mockear ClientUseCase y sendResponse
jest.mock('../src/application/useCases/ClientUseCase');
jest.mock('../src/infraestructure/utils/responseUtils');

describe('ClientController', () => {
  const mockSendResponse = sendResponse as jest.Mock;
  const mockCreateClient = ClientUseCase.prototype.createClient as jest.Mock;
  const mockGetClientById = ClientUseCase.prototype.getClientById as jest.Mock;

  beforeEach(() => {
    mockSendResponse.mockClear();
    mockCreateClient.mockClear();
    mockGetClientById.mockClear();
  });

  it('should return 201 and the created client on successful creation', async () => {
    const newClientData: ClientDTO = {clientId: '001', name: 'John Doe', lastName: 'pepe',phone: '5225', email: 'john@example.com', address: '545454' };
    const createdClient = { id: 1, ...newClientData }; // Suponemos que el cliente creado tiene un id
    mockCreateClient.mockResolvedValue(createdClient); // Simulamos el comportamiento exitoso

    const response = await request(app)
      .post('/clients')
      .send(newClientData);

    expect(response.status).toBe(201);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      201,
      createdClient,
      'Succcessfully registered Client',
      'client'
    );
  });

  it('should return 400 if client data is missing or invalid', async () => {
    const response = await request(app)
      .post('/clients')
      .send({}); // Enviamos datos vacíos

    expect(response.status).toBe(400);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      400,
      null,
      'Invalid client data'
    );
  });

  it('should return 200 and the client data if client is found by id', async () => {
    const clientId = '1';
    const clientData = { id: 1, name: 'John Doe', email: 'john@example.com' };
    mockGetClientById.mockResolvedValue(clientData); // Simulamos que el cliente se encuentra

    const response = await request(app)
      .get(`/clients/${clientId}`)
      .send();

    expect(response.status).toBe(200);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      200,
      clientData,
      'Client successfully obtained',
      'client'
    );
  });

  it('should return 404 if client is not found by id', async () => {
    const clientId = '999'; // ID que no existe
    mockGetClientById.mockResolvedValue(null); // Simulamos que el cliente no se encuentra

    const response = await request(app)
      .get(`/clients/${clientId}`)
      .send();

    expect(response.status).toBe(404);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      404,
      null,
      'Client not found'
    );
  });

  it('should return 500 if an error occurs during client creation', async () => {
    const newClientData: ClientDTO =  {clientId: '001', name: 'John Doe', lastName: 'pepe',phone: '5225', email: 'john@example.com', address: '545454' };
    mockCreateClient.mockRejectedValue(new Error('Something went wrong')); // Simulamos un error

    const response = await request(app)
      .post('/clients')
      .send(newClientData);

    expect(response.status).toBe(500);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      500,
      null,
      'An error occurred while creating the client'
    );
  });

  it('should return 500 if an error occurs during fetching client by id', async () => {
    const clientId = '1';
    mockGetClientById.mockRejectedValue(new Error('Something went wrong')); // Simulamos un error

    const response = await request(app)
      .get(`/clients/${clientId}`)
      .send();

    expect(response.status).toBe(500);
    expect(mockSendResponse).toHaveBeenCalledWith(
      expect.any(Object), // res
      500,
      null,
      'An error occurred while fetching client data'
    );
  });
});
