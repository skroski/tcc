import React, { useCallback, useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";
import { API_URL, Client } from "@tcc/api-interface";

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../../../../libs/ui-header/src/lib/loading/loading";
import CreateClient from "../../components/CreateClient";


export function Clients() {
  const [clients, setClients] = useState<Client[]>([]);
  const getClients: () => Promise<void> = useCallback(async () => {
    const resp: AxiosResponse<Client[]> = await axios.get<Client[]>(
      API_URL + "/Clients"
    );

    setClients(resp.data);
    console.log(resp);
  }, []);

  useEffect(() => {
    getClients();
  }, []);
  return (
    <>
      <h1 className="text-3xl">Clientes</h1>
      <CreateClient />
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
                            {s.typecustomer}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right ">
                            <a
                              className="flex justify-end text-green-500 hover:text-green-700"
                              href="#"
                            >
                              <PencilIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              Editar
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right">
                            <a
                              className="flex justify-end text-red-500 hover:text-red-700"
                              href="#"
                            >
                              <TrashIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
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
