import React from "react";
import { useForm } from "react-hook-form";
import { BudgetsService} from "@tcc/api-interface";


export default function CreateBudget() {
  const { register, handleSubmit } = useForm();
  const servicesBudget = new BudgetsService();

  const handleCreateNewBudget = (data: any, e: any) => {

    servicesBudget.createBudget(data).then((response) => {
      console.log(response.data);
      e.target.reset();
      alert("Budget criado com sucesso!");
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(handleCreateNewBudget)}
    >
      <div className="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Titulo do Orçamento
            </label>
            <input
              {...register("title")}
              type="text"
              name="title"
              id="title"
              placeholder="Digite o título do Serviço"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
            Service
            </label>
            <input
              {...register("service")}
              type="text"
              name="service"
              id="service"
              placeholder="Digite o service do Budget"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Resumo
            </label>
            <input
              {...register("excerpt")}
              type="text"
              name="excerpt"
              id="excerpt"
              placeholder="Digite o título do Serviço"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Description
            </label>
            <input
              {...register("description")}
              type="number"
              placeholder="Digite uma Descrição Válida"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Total de Horas
            </label>
            <input
              {...register("totalhours")}
              type="number"
              placeholder="Digite um Total de Horas Válido"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
             Valor Total:
            </label>
            <input
              {...register("totalprice")}
              type="text"
              placeholder="Digite o preço total"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
         
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Tipo de Budget
            </label>
            <select
              {...register("type")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="Tipo"
            >
              <option value="">Fee Mensal</option>
              <option value="">Projeto</option>
            </select>
          </div>
         
        </div>
        <button
          type="submit"
          className="cursor-pointer border-2 rounded text-green-600 border-green-600 p-3"
        >
          Inserir Budgete
        </button>
      </div>
    </form>
  );
}
