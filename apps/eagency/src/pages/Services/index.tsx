import React, { useEffect, useState } from "react";

import { ServiceProps, ServicesService } from "@tcc/api-interface";

import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import CreateService from "../../components/CreateService";

export function Services() {
   const [service, setService] = useState<ServiceProps[]>([]);
  const servicesService = new ServicesService();

  function deleteService(serviceId: string) {
    servicesService.deleteService(serviceId).then(response => {
        console.log(response)
      });
  }

  useEffect(() => {
   servicesService.getAllServices().then(services => {
      setService(services)
    });
  }, []);
  return (
    <>
   Teste 1 <CreateService />
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="text-3xl">Serviços</h1>
   

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
                      Preço
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
                {service.map((s) => {
                  return (
                    <>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {s._id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {s.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {s.price}
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
                            
                            <button
                              className="flex justify-end cursor-pointer text-red-500 hover:text-red-700"
                              onClick={(e) => deleteService(s._id)} 
                            >
                              <TrashIcon className="h-6 w-6" aria-hidden="true" />
                              Deletar
                            </button>
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
