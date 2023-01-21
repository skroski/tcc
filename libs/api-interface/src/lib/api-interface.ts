export interface ApiResponse {
  message: string;
}
export const API_URL = 'https://eagencyapp.herokuapp.com/api';

import { Document } from "mongoose";

import * as mongoose from 'mongoose';

import axios, { AxiosResponse } from "axios";
export interface ServiceProps extends Document {
  _id: mongoose.Schema.Types.ObjectId,
  name: string,
  excerpt: string,
  description: string,
  price: number,
  type: string
}
export interface BudgetProps extends Document {
  _id: mongoose.Schema.Types.ObjectId,
  title: string,
  services: [],
  excerpt: string,
  description: string,
  totalhours: number,
  totalprice: number,
  type: string
}
export interface ClientProps extends Document {
  _id: mongoose.Schema.Types.ObjectId,
  name: string,
  email: string,
  mobile: string,
  cpf: string,
  cnpj: string,
  razaosocial: string,
  cep: string,
  address: string,
  budget: string,
  typecustomer: string,
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
      const response = await axios.post<ServiceProps[]>(API_URL + "/services", data, {
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
    const response = await axios.delete(API_URL + `/services/${serviceId}`, { method: 'DELETE' })
    return await response.data;
  }
  public async editService(data: any, serviceId: number): Promise<any> {
    const response = await axios.put(API_URL + `/services/${serviceId}`, data, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    })
    return await response.data;
  }
}
export class ClientsService {
  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});
  public async getAllClients(): Promise<any> {
    const response = await axios.get<ClientProps[]>(API_URL + "/clients");
    console.log(response.data)
    return await response.data;
  };

  public async createClient(data: any): Promise<any> {

    try {
      const response = await axios.post<ClientProps[]>(API_URL + "/clients", data, {
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
  public async deleteClient(clientId: number): Promise<any> {
    const response = await axios.delete(API_URL + `/clients/${clientId}`, { method: 'DELETE' })
    return await response.data;
  }
  public async editClient(data: any, clientId: number): Promise<any> {
    const response = await axios.put(API_URL + `/clients/${clientId}`, data, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    })
    return await response.data;
  }
}

export class BudgetsService {
  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});
  public async getAllBudgets(): Promise<any> {
    const response: AxiosResponse<BudgetProps[]> = await axios.get<BudgetProps[]>(API_URL + "/budgets");
    console.log(response.data)
    return await response.data;
  };

  public async createBudget(data: any): Promise<any> {

    try {
      const response: AxiosResponse<BudgetProps[]>  = await axios.post<BudgetProps[]>(API_URL + "/budgets", data, {
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
  public async deleteBudget(budgetId: number): Promise<any> {
    const response = await axios.delete(API_URL + `/budgets/${budgetId}`, { method: 'DELETE' })
    return await response.data;
  }
  public async editBudget(data: any, budgetId: number): Promise<any> {
    const response = await axios.put(API_URL + `/budgets/${budgetId}`, data, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    })
    return await response.data;
  }
}

