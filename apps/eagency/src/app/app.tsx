import { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";
import { UiHeader } from "@tcc/ui-header";
import { UiSidebar } from "@tcc/ui-sidebar";

import axios from "axios";
import { API_URL, Service } from "@tcc/api-interface";
//import { Services } from '@tcc/shared-types';

export function App() {
  const [service, setService] = useState<Service[]>([]);
  //const [apiResponse, setApiResponse] = useState({message: 'Loading...'});

  const getServices = useCallback(async () => {
    const resp = await axios.get<Service[]>(API_URL + "services");
    setService(resp.data);
    console.log(resp);
  }, []);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <UiHeader />
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
        <div className="col-span-1">
        <UiSidebar />
        </div>
        <div className="col-span-2">
        <main>
          {service.map((s) => {
            return (
              <>
                <h2 className="text-xl text-red-800">{s.name}</h2>
                <h3>{s.price}</h3>
              </>
            );
          })}
          <p>{JSON.stringify(service)}</p>
        </main>
        </div>
      </section>
    </>
  );
}

export default App;
