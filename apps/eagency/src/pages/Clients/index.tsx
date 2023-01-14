import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { API_URL, Client } from "@tcc/api-interface";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "../../../../../libs/ui-header/src/lib/loading/loading";

const newClientFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});
type NewClientFormData = zod.infer<typeof newClientFormValidationSchema>;

export function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [activeClientId, setActiveClientId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewClientFormData>({
    resolver: zodResolver(newClientFormValidationSchema),
  });
  function handleCreateNewClient(data: any) {
    const id = String(new Date().getTime());

    const newClient: Client = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setClients((state) => [...state, newClient]);
    setActiveClientId(id);
    reset();
  }

  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});

  const getClients = useCallback(async () => {
    const resp = await axios.get<Client[]>(API_URL + "Clients");
    setClients(resp.data);
    console.log(resp);
  }, []);

  useEffect(() => {
    getClients();
  }, []);
  return (
    <>
      <h1 className="text-3xl">Clientes</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(handleCreateNewClient)}
      >
        <div className="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Nome do Cliente
              </label>
              <input
                type="text"
                placeholder="Digite o nome do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Digite o email do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Celular
              </label>
              <input
                type="text"
                placeholder="Digite o celular do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                CPF
              </label>
              <input
                type="text"
                placeholder="Digite o CPF do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                CNPJ
              </label>
              <input
                type="text"
                placeholder="Digite o CNPJ do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
               CEP
              </label>
              <input
                type="text"
                placeholder="Digite o CEP do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
              Address
              </label>
              <input
                type="text"
                placeholder="Digite o endereço do Cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
              Budget
              </label>
              <input
                type="text"
                placeholder="Digite o endereço do Budget"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
              Tipo de Cliente:
              </label>
              <input
                type="text"
                placeholder="Digite o tipo do cliente"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            
         
          </div>
         
       
          <button className="pointer border radius bg-green-300 border-green-600 p-3">
            Inserir Cliente
          </button>
        </div>
      </form>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Nome Cliente
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Tipo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Editar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      Deletar
                    </th>
                  </tr>
                </thead>
                {clients.map((s) => {
                  return (
                    <>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            1
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {s.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {s.email}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right ">
                            <a
                              className="flex justify-end text-green-500 hover:text-green-700"
                              href="#"
                            >
                              <PencilIcon className="h-6 w-6" aria-hidden="true" />
                              Editar
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right">
                            
                            <a
                              className="flex justify-end text-red-500 hover:text-red-700"
                              href="#"
                            >
                              <TrashIcon className="h-6 w-6" aria-hidden="true" />
                              Deletar
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuthenticationRequired(Clients, {
  onRedirecting: () => <Loading />,
});