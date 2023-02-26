import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
export default function ClientsRoute(){
    const clients: any = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <Header></Header>
          <pre>{JSON.stringify(clients)}</pre>
          <h1>Posts</h1>
          <ul>
            {clients.map((client: any) => (
              <li key={client._id}>
                <h3>{client.name}</h3>
                
                <Link
                  to={client.name}
                  className="text-blue-600 underline bg-yellow-100"
                >
                  {client.email}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/clients"  className="text-blue-600 underline bg-yellow-100">Clients</Link>
    
        
        </div>
      );
}
export const loader: LoaderFunction = () => {
    return fetch("http://localhost:3333/api/clients");
  };