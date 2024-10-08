import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

function ItemCount({initial, item, imagen, precio, id}) {
    const [cantidad, setCantidad] = useState(initial)

    const {añadirCarrito} = useContext(cartContext)

    const incrementar = () => {
            setCantidad(cantidad + 1)
    }

    const decrementar = () => {
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    const manejoAñadirCarrito = () => {
        const nuevoItem = {
            item: item, // Este debe ser un objeto que contenga las propiedades adecuadas
            cantidad: cantidad,
            imagen: imagen,
            precio: precio,
            id: id
        };
        añadirCarrito(nuevoItem);
    };
    

    return (
        <div>
            <div className="d-flex">
                <button onClick={incrementar} className="m-4"> + </button>
                <h4 className="p-4">{cantidad}</h4>
                <button onClick={decrementar} className="m-4"> - </button>
            </div>
            <div>
                <button onClick={()=> manejoAñadirCarrito(cantidad)}>Agregar al carrito</button>
                <Link to={`/carrito`} className="mt-3"> Ver carrito </Link>
            </div>

        </div>
    )
}

export default ItemCount