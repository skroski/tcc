import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newServiceFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});
type NewServiceFormData = zod.infer<typeof newServiceFormValidationSchema>;
interface Service {
  id: string;
  task: string;
  minutesAmount: number;
}
export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<NewServiceFormData>({
    resolver: zodResolver(newServiceFormValidationSchema),
  });
  function handleCreateNewService(data: any) {
    const id = String(new Date().getTime());

    const newService: Service = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setServices((state) => [...state, newService]);
    setActiveServiceId(id);
    reset();
  }
  return (
    <>
      <h1>Service</h1>
      <form onSubmit={handleSubmit(handleCreateNewService)}>
      <label htmlFor="task">Vou trabalhar em</label>
      <input type="text" placeholder="Digite o título do Serviço"></input>
      </form>
    </>
  );
}
