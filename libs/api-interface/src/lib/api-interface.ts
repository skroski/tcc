export interface ApiResponse {
  message: string;
}
export const API_URL = 'https://eagencyapp.herokuapp.com';

import { Document } from "mongoose";

import * as mongoose from 'mongoose';

import axios from "axios";
export interface ServiceProps extends Document {
  _id: mongoose.Schema.Types.ObjectId,
  name: string,
  excerpt: string,
  description: string,
  price: number,
  type: string
}
export class ServicesService {

  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});
  public async getAllServices(): Promise<any> {
    const response = await axios.get<ServiceProps[]>(API_URL + "/services");
    console.log(response.data)
    return await response.data;
  };

  public async createService(data: any): Promise<any> {
  
    try {
      const response = await axios.post<ServiceProps[]>(API_URL + "services", data , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      console.log(response.data);
      return await response.data;
    }
    catch (err) {
      console.error(err);
    }

  }
  public async deleteService(serviceId: number): Promise<any> {
    const response = await axios.delete(API_URL + `/services/${serviceId}`, {method: 'DELETE'})
    return await response.data;
}
}

