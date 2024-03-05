export function Home() {
  const churrascoData = [
    {
      id: 1,
      data: "2024-03-04",
      qtd_homens: 5,
      qtd_mulheres: 3,
      qtd_criancas: 2,
      carne_kg: 10,
      pao_de_alho: 2,
      carvao_kg: 5,
      refri_l: 2,
      cerveja_l: 3,
    },
    {
      id: 2,
      data: "2024-03-04",
      qtd_homens: 5,
      qtd_mulheres: 3,
      qtd_criancas: 2,
      carne_kg: 10,
      pao_de_alho: 2,
      carvao_kg: 5,
      refri_l: 2,
      cerveja_l: 3,
    },
    {
      id: 3,
      data: "2024-03-04",
      qtd_homens: 5,
      qtd_mulheres: 3,
      qtd_criancas: 2,
      carne_kg: 10,
      pao_de_alho: 2,
      carvao_kg: 5,
      refri_l: 2,
      cerveja_l: 3,
    },
  ];

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
          {churrascoData.map((churrasco) => (
            <tr key={churrasco.id} className="text-center p-4">
              <td className="p-3">{churrasco.data}</td>
              <td>
                {churrasco.qtd_homens +
                  churrasco.qtd_mulheres +
                  churrasco.qtd_criancas}
              </td>
              <td>{churrasco.carne_kg} Kg</td>
              <td>{churrasco.pao_de_alho}</td>
              <td>{churrasco.carvao_kg} Kg</td>
              <td>{churrasco.refri_l} L</td>
              <td>{churrasco.cerveja_l} L</td>
              <td>
                <div className="text-sm flex gap-4 justify-center">
                  <button className="text-yellow-600 uppercase">editar</button>
                  <button className="text-red-600 uppercase">excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
