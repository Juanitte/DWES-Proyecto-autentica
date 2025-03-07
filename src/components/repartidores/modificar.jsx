import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({ repartidor }) {
    return (
        <form className="flex flex-col gap-4" action={modificarRepartidor}>
            <h1 className="text-xl text-red-500">Modificar repartidor</h1>

            <input type="hidden" name="id" defaultValue={repartidor.id} className="text-white bg-slate-600" />

            <label>Nombre:
                <input name='nombre' defaultValue={repartidor.nombre} className="text-white bg-slate-600" />
            </label>

            <label>Teléfono:
                <input name='telefono' defaultValue={repartidor.telefono} className="text-white bg-slate-600" />
            </label>

            <label>Imagen:
                <input name='imagen' defaultValue={repartidor.imagen} className="text-white bg-slate-600" />
            </label>

            <button className="p-2 rounded-lg bg-red-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default RepartidorModificar;