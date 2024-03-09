import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

import Input from "../../components/Input";
import { BASE_URL } from "../../util/api";
import { calculateBarbecue } from "../../util/calculateBarbecue";

const registerFormSchema = z.object({
  barbecueDate: z.string().refine(
    (value) => {
      const inputDate = new Date(value);
      const currentDate = new Date();

      inputDate.setDate(inputDate.getDate() + 1);

      return !isNaN(inputDate.getTime()) && inputDate >= currentDate;
    },
    { message: "A data deve ser igual ou posterior à data de hoje." }
  ),
  numberOfMen: z
    .string()
    .refine(
      (value) =>
        value.trim() !== "" && !isNaN(Number(value)) && Number(value) >= 1,
      {
        message: "Digite um valor válido.",
      }
    ),
  numberOfWomen: z
    .string()
    .refine(
      (value) =>
        value.trim() !== "" && !isNaN(Number(value)) && Number(value) >= 1,
      {
        message: "Digite um valor válido.",
      }
    ),
  numberOfchildren: z
    .string()
    .refine(
      (value) =>
        value.trim() !== "" && !isNaN(Number(value)) && Number(value) >= 0,
      {
        message: "Digite um valor válido (mínimo: 0).",
      }
    ),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export const EditBarbecue = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  function setFormValues(churrascoData: BarbecueDataProps) {
    setValue("barbecueDate", churrascoData.data);
    setValue("numberOfMen", churrascoData.qtd_homens.toString());
    setValue("numberOfWomen", churrascoData.qtd_mulheres.toString());
    setValue("numberOfchildren", churrascoData.qtd_criancas.toString());
  }

  function clearFormValues() {
    setValue("barbecueDate", "");
    setValue("numberOfMen", "");
    setValue("numberOfWomen", "");
    setValue("numberOfchildren", "");
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (id) {
          setIsEditing(true);

          const response = await axios.get(`${BASE_URL}/${id}`);
          const barbecueData = response.data;

          if (barbecueData) {
            setFormValues(barbecueData);
          } else {
            console.log(
              "Dados do churrasco não encontrados na resposta da API."
            );
          }
        }
      } catch (error) {
        console.log("Erro ao obter dados do churrasco:", error);
      }
    }

    fetchData();
  }, [id, setValue]);

  async function handleRegister(data: RegisterFormData) {
    try {
      const barbecueDataCalculate = calculateBarbecue(data);

      if (isEditing) {
        await axios.put(`${BASE_URL}/${id}`, barbecueDataCalculate);
        toast.success("Churrasco editado com sucesso!", {
          position: "bottom-right",
        });
      } else {
        await axios.post(BASE_URL, barbecueDataCalculate);
        toast.success("Churrasco criado com sucesso!", {
          position: "bottom-right",
        });
        clearFormValues();
      }

      navigate("/");
    } catch (error) {
      console.log("Erro ao processar registro:", error);
      toast.error("Erro ao processar registro. Tente novamente.", {
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold tracking-wide mb-10">
        {isEditing ? "Editar Churrasco" : "Criar Novo Churrasco"}
      </h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-4 max-w-3xl mx-auto"
      >
        <Input text="Data" type="date" {...register("barbecueDate")} />
        {
          <span className="text-red-500 text-sm">
            {errors.barbecueDate?.message}
          </span>
        }

        <Input
          text="Quantidade de Homens:"
          type="number"
          {...register("numberOfMen")}
        />
        <span className="text-red-500 text-sm">
          {errors.numberOfMen?.message}
        </span>

        <Input
          text="Quantidade de Mulheres"
          type="number"
          {...register("numberOfWomen")}
        />
        <span className="text-red-500 text-sm">
          {errors.numberOfWomen?.message}
        </span>

        <Input
          text="Quantidade de Crianças"
          type="number"
          {...register("numberOfchildren")}
        />
        <span className="text-red-500 text-sm">
          {errors.numberOfchildren?.message}
        </span>

        <button
          type="submit"
          className="bg-amber-500 p-3 rounded-md text-lg font-semibold hover:brightness-105 uppercase"
        >
          {isEditing ? "Atualizar" : "Salvar"}
        </button>
      </form>
    </>
  );
};
