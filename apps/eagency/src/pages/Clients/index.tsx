import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";
import { API_URL, Client } from "@tcc/api-interface";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

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
      <h1 className="text-3xl">Serviços</h1>
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
                Título do Serviço
              </label>
              <input
                type="text"
                placeholder="Digite o título do Serviço"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Resumo
              </label>
              <input
                type="text"
                placeholder="Digite o resumo:"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Descrição
              </label>
              <textarea
                placeholder="Digite uma descrição:"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Preço
              </label>
              <input
                type="number"
                placeholder="Valor"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></input>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="task"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Tipo
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="Tipo"
              >
                <option value="">Único</option>
                <option value="">Recorrente</option>
              </select>
            </div>
          </div>
          <button className="pointer border radius bg-green-300 border-green-600 p-3">
            Inserir Serviço
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
                      Nome Serviço
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
