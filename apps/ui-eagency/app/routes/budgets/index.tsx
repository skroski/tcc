import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import {  LoaderFunction } from "@remix-run/node";
export default function BudgetsRoute(){
    const budgets: any = useLoaderData();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <Header></Header>
          <pre>{JSON.stringify(budgets)}</pre>
          <h1>Posts</h1>
          <ul>
            {budgets.map((budget: any) => (
              <li key={budget._id}>
                <h3>{budget.name}</h3>
                
                <Link
                  to={budget.name}
                  className="text-blue-600 underline bg-yellow-100"
                >
                  {budget.price}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/budgets"  className="text-blue-600 underline bg-yellow-100">Budgets</Link>
    
        
        </div>
      );
}
export const loader: LoaderFunction = () => {
    return fetch("https://eagencyapp.herokuapp.com/api/budgets");
  };