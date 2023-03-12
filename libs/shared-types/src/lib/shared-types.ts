export const API_URL = 'https://eagencyapp.herokuapp.com/api';
//export const API_URL = 'http://localhost:3333/api';

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