import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function ItemCount({stock, initial, item}) {
    const [cantidad, setCantidad] = useState(initial)

    const {añadirCarrito} = useContext(cartContext)

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

    const manejoAñadirCarrito = () => añadirCarrito([item, cantidad])

    return (
        <div>
            <div className="d-flex">
                <button onClick={incrementar} className="m-4"> + </button>
                <h4 className="p-4">{cantidad}</h4>
                <button onClick={decrementar} className="m-4"> - </button>
            </div>
            <div>
                <button onClick={()=> manejoAñadirCarrito(cantidad)} disabled={!stock}>Agregar al carrito</button>
                <Link to={`/carrito`}> Ver carrito </Link>
            </div>

        </div>
    )
}

export default ItemCount