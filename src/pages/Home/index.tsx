import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../util/api";
import { deleteBarbecue } from "../../util/deleteBarbecue";

export function Home() {
  const [barbecueData, setBarbecueData] = useState<ChurrascoProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(BASE_URL);
        setBarbecueData(response.data);
      } catch (error) {
        console.log("Erro na requisição:", error);
      }
    }

    fetchData();
  }, [barbecueData]);

  return (
    <>
      <h1 className="text-2xl font-bold tracking-wide">Lista de Churrascos</h1>
      <table className="w-full mt-8 ">
        <thead className="bg-gray-300">
          <tr className="border-2 font-semibold">
            <th className="p-4">Data</th>
            <th>Total Pessoas</th>
            <th>Carne (Kg)</th>
            <th>Pão de Alho</th>
            <th>Carvão (Kg)</th>
            <th>Refri (L)</th>
            <th>Cerveja (L)</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200 font-medium">
          {barbecueData.map((barbecue) => (
            <tr key={barbecue.id} className="text-center p-4">
              <td className="p-3">{barbecue.data}</td>
              <td>
                {barbecue.qtd_homens +
                  barbecue.qtd_mulheres +
                  barbecue.qtd_criancas}
              </td>
              <td>{barbecue.carne_kg} Kg</td>
              <td>{barbecue.pao_de_alho}</td>
              <td>{barbecue.carvao_kg} Kg</td>
              <td>{barbecue.refri_l} L</td>
              <td>{barbecue.cerveja_l} L</td>
              <td>
                <div className="text-sm flex gap-4 justify-center">
                  <Link to={`/edit-barbecue/${barbecue.id}`}>
                    <button className="text-yellow-600 uppercase">
                      editar
                    </button>
                  </Link>

                  <button
                    className="text-red-600 uppercase"
                    onClick={() => deleteBarbecue(barbecue.id)}
                  >
                    excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
