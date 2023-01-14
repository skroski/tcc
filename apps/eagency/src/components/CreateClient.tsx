import React from "react";
import { useForm } from "react-hook-form";
import { ServicesService } from "@tcc/api-interface";

//import { zodResolver } from "@hookform/resolvers/zod";
//import * as zod from "zod";

/* const newServiceFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});
type NewServiceFormData = zod.infer<typeof newServiceFormValidationSchema>; */

//const [apiResponse, setApiResponse] = useState({message: 'Loading...'});

export default function CreateService() {
  const { register, handleSubmit } = useForm();
  const servicesService = new ServicesService();
  /*  const { register, handleSubmit, watch, reset } = useForm<NewServiceFormData>({
    resolver: zodResolver(newServiceFormValidationSchema),
  }); */

  const handleCreateNewService = (data: any, e: any) => {
    /*  const id = String(new Date().getTime());
    
        const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
        
      
        addServices
        setServices((state) => [...state, newService]);
        setActiveServiceId(id);
        e.target.reset(); */
    //e.preventDefault();

    servicesService.createService(data).then((response) => {
      console.log(response.data);
      e.target.reset();
      alert("Serviço criado com sucesso!");
    });
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(handleCreateNewService)}
    >
      <div className="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Título do Serviço
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
              Resumo
            </label>
            <input
              {...register("excerpt")}
              type="text"
              name="excerpt"
              id="excerpt"
              placeholder="Digite o resumo:"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Descrição
            </label>
            <textarea
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite uma descrição:"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Preço
            </label>
            <input
              {...register("price")}
              type="number"
              placeholder="Valor"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ></input>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="task"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Tipo
            </label>
            <select
              {...register("type")}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="Tipo"
            >
              <option value="">Único</option>
              <option value="">Recorrente</option>
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
