import dynamoose from 'dynamoose';

import { config } from '../config/config';
import { Client } from '../../domain/entities/Client';

const ClientSchema = new dynamoose.Schema({
  clientId: {
    type: String,
    hashKey: true, // Clave de partición
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
},
{
    timestamps: true,
    saveUnknown: true,
  }

);

const ClientModel = dynamoose.model<Client>(config.dynamoClientsTable, ClientSchema);
export default ClientModel;