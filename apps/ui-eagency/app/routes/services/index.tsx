import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getServices } from "../../models/service.server";

type LoaderData = {
  services: Awaited<ReturnType<typeof getServices>>;
};

export const loader: LoaderFunction = async () => {
  const services = await getServices();
  return services;
};

export default function ServicesRoute() {
  const services = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header></Header>
      <div className="p-4 pl-8">
        <h1 className="text-2xl pb-4 border-b-2 mb-0 mr-4  border-gray-300 text-purple-900 font-semibold">
          Services
        </h1>
        <ul >
          {services.map((service: any) => (
            <li key={service._id}>
              <h3 className="text-purple-700 text-xl py-2">{service.name}</h3>

              <Link to={service.name} className="underline text-gray-600 ">
                {service.excerpt}
              </Link>
              <p className="py-4 text-gray-600">{service.description}</p>
            </li>
            
          ))}
        </ul>
      </div>
      <Link to="/services" className="text-violet-600 underline ">
        Services
      </Link>
    </div>
  );
}
