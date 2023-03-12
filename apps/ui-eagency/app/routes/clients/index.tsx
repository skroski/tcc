import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return fetch("https://eagencyapp.herokuapp.com/api/clients");
};

export default function ClientsRoute() {
  const clients: any = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header></Header>
      <div className="p-4 pl-8">
        <h1 className="text-2xl pb-4 border-b-2 mb-0 mr-4  border-gray-300 text-purple-900 font-semibold">
          Services
        </h1>
        <ul>
          {clients.map((client: any) => (
            <li key={client._id}>
              <h3 className="text-purple-900 text-2xl py-3">{client.name}</h3>

              <Link to={client.name} className="underline text-gray-600">
                {client.email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/clients" className="text-violet-600 underline ">
        Clients
      </Link>
    </div>
  );
}
