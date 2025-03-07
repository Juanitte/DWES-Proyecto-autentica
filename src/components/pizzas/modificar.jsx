import { modificarPizza } from "@/lib/actions";

function PizzaModificar({ pizza }) {
    return (
        <form className="flex flex-col gap-4" action={modificarPizza}>
            <h1 className="text-xl text-red-500">Modificar pizza</h1>

            <input type="hidden" name="id" defaultValue={pizza.id} className="text-white bg-slate-600" />
            
            <label>Nombre:
                <input name="nombre" defaultValue={pizza.nombre} className="text-white bg-slate-600"  />
            </label>

            <label>Precio:
                <input name="precio" type='number' step={0.01} min={0} defaultValue={pizza.precio} className="text-white bg-slate-600" />
            </label>

            <label>Imagen:
                <input name="imagen" defaultValue={pizza.imagen} className="text-white bg-slate-600" />
            </label>

            <button className="p-2 rounded-lg bg-red-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default PizzaModificar;