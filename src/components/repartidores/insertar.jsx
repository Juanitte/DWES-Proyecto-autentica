import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form className="flex flex-col gap-4" action={insertarRepartidor}>
            <h1 className="text-xl text-red-500">Nuevo repartidor</h1>

            <label>Nombre:
                <input name='nombre' placeholder="Nombre" className="text-white bg-slate-600" />
            </label>

            <label>Teléfono:
                <input name='telefono' placeholder="Teléfono" className="text-white bg-slate-600" />
            </label>

            <label>Imagen:
                <input name='imagen' placeholder="Imagen" className="text-white bg-slate-600" />
            </label>

            <button className="p-2 rounded-lg bg-red-500 text-white cursor-pointer">Insertar repartidor</button>
        </form>

    );
}

export default RepartidorInsertar;