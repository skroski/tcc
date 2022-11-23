import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ServicesService } from "@tcc/api-interface";
import { PencilIcon } from "@heroicons/react/outline";

interface IEditServiceModal {
  service: any;
  serviceEdited: Function;
}

export default function EditServiceModal({
  service,
  serviceEdited,
}: IEditServiceModal) {
  const [show, setShow] = useState(false);
  const serviceService = new ServicesService();

  const handleClose = (e: any) => {
    setShow(false);
    e.preventDefault();
  };
  const handleShow = (e: any) => {
    setShow(true); 
    e.preventDefault();
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any, e: any) => {
    e.preventDefault()
    serviceService.editService(data).then((response) => {
      serviceEdited(response);
      setShow(false);
    });
    
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="px-6 py-3 text-orange-500 rounded-md flex "
          type="button"
          onClick={handleShow}
        > <PencilIcon
        className="h-6 w-6 mr-2"
        aria-hidden="true"
      />
          Editar
        </button>
      </div>
      {show ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-autoback drop:bg-gray-50">
            <form  onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <button className="border-red-500 rounded text-red-400 p-4" onClick={handleClose}>Fechar</button>
                <div className="flex">
                  <label htmlFor="serviceId">Id</label>
                  <input
                    {...register("id")}
                    type="text"
                    className="border-gray-300 text-gray-600 p-4 bg-white"
                    defaultValue={service._id}
                    name="id"
                    id="id"
                    disabled
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Nome do Serviço:</label>
                  <input
                    {...register("name")}
                    type="text"
                    className="border-gray-300 text-gray-600 p-4 bg-white"
                    defaultValue={service.name}
                    name="name"
                    id="name"
                    placeholder="Nome do Serviço:"
                  />
                </div>
                <div className="flex">
                  <label htmlFor="excerpt">Resumo:</label>
                  <input
                    {...register("excerpt")}
                    type="text"
                    className="border-gray-300 text-gray-600 p-4 bg-white"
                    defaultValue={service.excerpt}
                    name="excerpt"
                    id="excerpt"
                    placeholder="Resumo"
                  />
                </div>
                <div className="flex">
                  <label htmlFor="description">Descrição:</label>
                  <textarea
                    {...register("description")}
                    className="border-gray-300 text-gray-600 p-4 bg-white"
                    name="description"
                    defaultValue={service.description}
                    id="description"
                  ></textarea>
                </div>
              <div className="btncenter">
                <input type="submit" className="bg-red-500 text-white p-4 rounded border-red-800" />
              </div>
              </div>
            </form>
          </div>
        </>
      ): null }
    </>
  );
}
