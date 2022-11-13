export const API_URL = 'https://apiagency.duplod.com.br/';

import * as mongoose from 'mongoose';
export interface Services {
  _id : mongoose.Schema.Types.ObjectId;
  name: string,
  users: object,
  excerpt: string,
  description: string,
  price: number,
  type: string
  
}