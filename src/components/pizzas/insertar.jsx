import { insertarPizza } from "@/lib/actions";

function PizzaInsertar() {
    return (
        <form className="flex flex-col gap-4" action={insertarPizza}>
            <h1 className="text-xl text-red-500">Nueva pizza</h1>

            <label>Nombre:
                <input name="nombre" placeholder="Nombre" className="text-white bg-slate-600" />
            </label>

            <label>Precio:
                <input name="precio" type='number' step={0.01} min={0} className="text-white bg-slate-600" />
            </label>

            <label>Imagen:
                <input name="imagen" placeholder="Imagen" className="text-white bg-slate-600" />
            </label>

            <button className="p-2 rounded-lg bg-red-700 text-white cursor-pointer">Insertar pizza</button>
        </form>

    );
}

export default PizzaInsertar;