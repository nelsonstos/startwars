import dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';

export interface Client extends Item {
    clientId: string;
    name: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
  }
  