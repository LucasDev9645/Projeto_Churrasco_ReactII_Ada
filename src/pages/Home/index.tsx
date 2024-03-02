import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">Lista de Churrascos:</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
