import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";




export const loader: LoaderFunction = () => {
  return fetch("https://eagencyapp.herokuapp.com/api/clients");
};


const Index = () => {
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
              className="text-blue-600 underline"
            >
              {client.excerpt}
            </Link>
          </li>
        ))}
      </ul>

    
    </div>
  );
}

export default Index;
