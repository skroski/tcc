import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ServicesService } from "@tcc/api-interface";

interface IEditServiceModal {
  service: any;
  serviceEdited: Function;
}

export default function EditServiceModal({
  service,
  serviceEdited,
}: IEditServiceModal) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serviceService = new ServicesService();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    serviceService.editService(data).then((response) => {
      serviceEdited(response);
      setShow(false);
    });
  };

  return (
    <>
      <button onClick={handleShow}>
        Edit
      </button>
      <dialog open>
        <p>Abrir Janela de Dialogo</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>

          <h2>Editar Serviço</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="serviceId">Id</label>
                <input
                  {...register("id")}
                  type="text"
                  className="form-control"
                  defaultValue={service._id}
                  name="id"
                  id="id"
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Nome do Serviço:</label>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={service.name}
                  name="name"
                  id="name"
                  placeholder="Nome do Serviço:"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="excerpt">Resumo:</label>
                <input
                  {...register("excerpt")}
                  type="text"
                  defaultValue={service.excerpt}
                  name="excerpt"
                  id="excerpt"
                  placeholder="Resumo"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="description">Descrição:</label>
                <textarea
                  {...register("description")}
                  name="description"
                  defaultValue={service.description}
                  id="description"
                ></textarea>
              </div>
            </div>
            <div className="btncenter">
              <input type="submit" className="btn btn-danger" />
            </div>
          </form>
    </>
  );
}
