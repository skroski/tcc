import { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";
import { UiSidebar } from "@tcc/ui-sidebar";

import { ServiceProps, ServicesService } from "@tcc/api-interface";
import * as CurrencyFormat from 'react-currency-format';
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
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <UiSidebar />
        </div>
        <div className="col-span-3">
        <main>
          {service.map((s) => {
            return (
              <>
                <h2 className="text-xl text-red-800 my-4" >{s.name}</h2>
                <p className="text-sm">{s.excerpt}</p>
                <CurrencyFormat className="text-2xl" value={s.price} displayType={'text'} thousandSeparator={'.'} decimalScale={2} decimalSeparator={'.'} suffix={',00'} prefix={'R$'} renderText={value => <div>{value}</div>} />
                <hr className="py-4"/>

              </>
            );
          })}
        </main>
        </div>
      </section>
  
    </>
  );
}
