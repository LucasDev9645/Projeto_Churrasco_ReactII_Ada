import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/Input";

const registerFormSchema = z.object({
  barbecueDate: z.string().refine(
    (value) => {
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    { message: "Data inválida" }
  ),
  numberOfMen: z
    .string()
    .refine((value) => !isNaN(Number(value)) && Number(value) >= 1, {
      message: "Digite um valor válido.",
    }),
  numberOfWomen: z
    .string()
    .refine((value) => !isNaN(Number(value)) && Number(value) >= 1, {
      message: "Digite um valor válido.",
    }),
  numberOfchildren: z
    .string()
    .refine((value) => !isNaN(Number(value)) && Number(value) >= 1, {
      message: "Digite um valor válido.",
    }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export const EditBarbecue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  function handleRegister(data: RegisterFormData) {
    console.log(data);
  }

  return (
    <>
      <h1 className="text-2xl font-bold tracking-wide mb-10">
        Criar novo churrasco
      </h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-4 max-w-3xl mx-auto"
      >
        <Input text="Data" type="date" {...register("barbecueDate")} />
        {errors.barbecueDate && <span>{errors.barbecueDate.message}</span>}

        <Input
          text="Quantidade de Homens:"
          type="number"
          {...register("numberOfMen")}
        />
        <p>{errors.numberOfMen?.message}</p>
        <Input
          text="Quantidade de Mulheres"
          type="text"
          {...register("numberOfWomen")}
        />
        <p>{errors.numberOfWomen?.message}</p>
        <Input
          text="Quantidade de Crianças"
          type="text"
          {...register("numberOfchildren")}
        />
        <p>{errors.numberOfchildren?.message}</p>
        <button
          type="submit"
          className="bg-amber-500 p-3 rounded-md text-lg font-semibold hover:brightness-105 uppercase"
        >
          Salvar
        </button>
      </form>
    </>
  );
};
