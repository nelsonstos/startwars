import dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { config } from '../config/config';

export interface Client extends Item {
    clientId: string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
  }
  

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
