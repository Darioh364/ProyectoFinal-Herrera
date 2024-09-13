import { useState } from "react"

function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <div className="d-flex">
                <button onClick={incrementar} className="m-4"> + </button>
                <h4 className="p-4">{cantidad}</h4>
                <button onClick={decrementar} className="m-4"> - </button>
            </div>
            <div>
                <button onClick={()=> onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount