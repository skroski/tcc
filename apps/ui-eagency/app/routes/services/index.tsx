import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getServices } from "../../models/service.server";

type LoaderData = {
    services: Awaited<ReturnType<typeof getServices>>
}

export const loader: LoaderFunction = async () => {
    const services = await getServices();
    return services
  };

export default function ServicesRoute(){
    const services = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <Header></Header>
          <pre>{JSON.stringify(services)}</pre>
          <h1>Posts</h1>
          <ul>
            {services.map((service: any) => (
              <li key={service._id}>
                <h3>{service.name}</h3>
                
                <Link
                  to={service.name}
                  className="text-blue-600 underline bg-yellow-100"
                >
                  {service.excerpt}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services"  className="text-blue-600 underline bg-yellow-100">Services</Link>
        </div>
      );
}
