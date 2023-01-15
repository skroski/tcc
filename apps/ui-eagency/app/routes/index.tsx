import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";




export const loader: LoaderFunction = () => {
  return fetch("https://eagencyapp.herokuapp.com/api/services");
};


const Index = () => {
  const services: any = useLoaderData();
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

    
    </div>
  );
}

export default Index;
