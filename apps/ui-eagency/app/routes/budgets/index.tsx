import { Header } from "@tcc/header";
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return fetch("https://eagencyapp.herokuapp.com/api/budgets");
};

export default function BudgetsRoute() {
  const budgets: any = useLoaderData();
  return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Header></Header>
        <div className="p-4 pl-8">
          <h1 className="text-2xl pb-4 border-b-2 mb-0 mr-4  border-gray-300 text-purple-900 font-semibold">
            Orçamentos
          </h1>
          <ul>
            {budgets.map((budget: any) => (
              <li key={budget._id}>
                <h3 className="text-purple-900 text-2xl py-3">{budget.title}</h3>
               
                <p>
                {budget.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/budgets" className="text-violet-600 underline ">
          Budgets
        </Link>
      </div>
  );
}