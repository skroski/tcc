import React, { useCallback, useEffect, useState } from "react";

import axios, { AxiosResponse } from "axios";
import { API_URL, Budget } from "@tcc/api-interface";

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../../../../libs/ui-header/src/lib/loading/loading";
import CreateBudget from "../../components/CreateBudget";

export function Budgets() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const getBudgets: () => Promise<void> = useCallback(async () => {
    const resp: AxiosResponse<Budget[]> = await axios.get<Budget[]>(
      API_URL + "/Budgets"
    );

    setBudgets(resp.data);
    console.log(resp);
  }, []);

  useEffect(() => {
    getBudgets();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-3xl font-bold text-purple-800 py-5">
          Cadastro de Budget
        </div>
        <CreateBudget />
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
                        Nome Budgete
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
                  {budgets.map((s) => {
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
      </div>
    </>
  );
}
export default withAuthenticationRequired(Budgets, {
  onRedirecting: () => <Loading />,
});
