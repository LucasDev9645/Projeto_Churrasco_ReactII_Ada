import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../components/Input";
import { useEffect } from "react";
import { getApi, postApi } from "../../services/churrasco.service";

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
    if (data) {
      const onSubscribe = async () => {
        const resp = await postApi('churrasco', calcularChurrasco(data));
        console.log(resp)
      }
      onSubscribe();
    }
    console.log(data);
  }



  /* ----- ----- Funções Churrasco: ----- ----- */
  function calcularChurrasco(data: RegisterFormData): any {
    let qtd_criancas = Number(data.numberOfMen);
    let qtd_mulheres = Number(data.numberOfWomen);
    let qtd_homens = Number(data.numberOfchildren);
    let qtd_pessoas = qtd_homens + qtd_mulheres + qtd_criancas;

    if (qtd_pessoas <= 0) return false;

    const dadosChurrasco = {
      data: data.barbecueDate,
      qtd_homens: qtd_homens,
      qtd_mulheres: qtd_mulheres,
      qtd_criancas: qtd_criancas,
      carne_kg: (qtd_homens * 0.4 + qtd_mulheres * 0.32 + qtd_criancas * 0.2).toFixed(1).replace(".", ","),
      carvao_kg: (qtd_homens * 1 + qtd_mulheres * 1 + qtd_criancas * 1),
      pao_de_alho: (qtd_homens * 2 + qtd_mulheres * 2 + qtd_criancas * 1),
      refri_l: (qtd_pessoas <= 5) ? 2 : Math.ceil(qtd_pessoas / 5),
      cerveja_l: ((qtd_homens * 3 + qtd_mulheres * 3 + qtd_criancas * 0) * 0.6).toFixed(1).replace(".", ",")
    }
    return dadosChurrasco;
  }


  useEffect(() => {
    const onMount = async () => {
      const resp = await getApi('churrascos');
      console.log(resp.data)
    }
    onMount();
  }, [])

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
          type="number"
          {...register("numberOfWomen")}
        />
        <p>{errors.numberOfWomen?.message}</p>
        <Input
          text="Quantidade de Crianças"
          type="number"
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
