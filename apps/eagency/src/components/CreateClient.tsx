import React from "react";
import { useForm } from "react-hook-form";
import { ClientsService} from "@tcc/api-interface";


export default function CreateService() {
  const { register, handleSubmit } = useForm();
  const servicesClient= new ClientsService();

  const handleCreateNewClient = (data: any, e: any) => {

    servicesClient.createClient(data).then((response) => {
      console.log(response.data);
      e.target.reset();
      alert("Serviço criado com sucesso!");
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(handleCreateNewClient)}
    >
      <div className="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Nome do Cliente
            </label>
            <input
              {...register("name")}
              type="text"
              name="name"
              id="name"
              placeholder="Digite o título do Serviço"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
             Email
            </label>
            <input
              {...register("email")}
              type="email"
              name="email"
              id="email"
              placeholder="Digite o email do Cliente"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Telefone
            </label>
            <input
              {...register("mobile")}
              type="text"
              name="name"
              id="name"
              placeholder="Digite o título do Serviço"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              CPF
            </label>
            <input
              {...register("cpf")}
              type="number"
              placeholder="Digite um CPF Válido"
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
              CNPJ
            </label>
            <input
              {...register("cnpj")}
              type="number"
              placeholder="Digite um CNPJ Válido"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Razão Social
            </label>
            <input
              {...register("razaosocial")}
              type="text"
              placeholder="Digite a Razão Social"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
         
        </div>
    
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="cep"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              CEP
            </label>
            <input
              {...register("cep")}
              type="number"
              placeholder="Digite um CEP Válido"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="address"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Address
            </label>
            <input
              {...register("address")}
              type="number"
              placeholder="Digite um Endereço Válido"
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
              Budget
            </label>
            <input
              {...register("budget")}
              type="number"
              placeholder="Digite um Budget Válido"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Tipo de Cliente
            </label>
            <select
              {...register("typecustomer")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="Tipo"
            >
              <option value="">Contratante</option>
              <option value="">Contratada</option>
            </select>
          </div>
         
        </div>
        
        
        
        
        
        
      
       
        <button
          type="submit"
          className="cursor-pointer border-2 rounded text-green-600 border-green-600 p-3"
        >
          Inserir Serviço
        </button>
      </div>
    </form>
  );
}
