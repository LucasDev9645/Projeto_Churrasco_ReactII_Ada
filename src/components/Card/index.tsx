import { Trash2, SquarePen } from "lucide-react";

export function Card() {

    function test() {
        console.log("Apenas um teste");
    }

    return (
        <>
            <div className="p-5 bg-amber-100 rounded-md flex flex-col gap-3">
                <h2 className="text-xl text-center">01/03/2024</h2>
                <p><b>Qtd. Pessoas:</b> {}</p>
                <p><b>Carne (KG):</b> {}</p>
                <p><b>Pão de Alho:</b> {}</p>
                <p><b>Carvão (KG):</b> {}</p>
                <p><b>Refri (L):</b> {}</p>
                <p><b>Cerveja (L):</b> {}</p>

                <div className="flex gap-4 justify-between mt-4">
                    <button className="flex w-full justify-center items-center gap-2 bg-red-200 px-3 py-2 rounded-sm"><Trash2 size={18}/> Apagar</button>
                    <button className="flex w-full justify-center items-center gap-2 bg-green-200 px-3 py-2 rounded-sm"><SquarePen size={18}/> Editar</button>
                </div>
            </div>
        </>
    )    
}