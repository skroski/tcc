import { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";
import { UiSidebar } from "@tcc/ui-sidebar";

import { ServiceProps, ServicesService } from "@tcc/api-interface";
import React from "react";
//import { Services } from '@tcc/shared-types';

export function Home() {
  const [service, setService] = useState<ServiceProps[]>([]);
  const servicesService = new ServicesService();

  useEffect(() => {
    servicesService.getAllServices().then((services) => {
      console.log(services);
      setService(services);
    });
  }, []);

  return (
    <>
      <section className="grid grid-cols-2">
        <UiSidebar />
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
      </section>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
