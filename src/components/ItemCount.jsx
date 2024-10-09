import { useState, useContext } from "react"
import { cartContext } from "../context/cartContext"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';


function ItemCount({ initial, item, imagen, precio, id, stock }) {
    const [cantidad, setCantidad] = useState(initial)
    const [visible, setVisible] = useState(true);

    const {añadirCarrito } = useContext(cartContext)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }else(
            Swal.fire({
                icon: "error",
                title: '¡No hay mas stock !',
                showConfirmButton: true,
            })
        )
    }

    const decrementar = () => {
        if (cantidad > 1) {
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

        Swal.fire({
            icon: "success",
            title: '¡Producto añadido!',
            text: 'El producto fue agregado exitosamente al carrito.',
            showConfirmButton: false,
            timer: 1500
        });
        setVisible(false);  // Ocultar el componente después de agregar al carrito
    };

    if (!visible) return (
        <div>
            <Link to={`/carrito`} className="mt-3"> Ver carrito </Link>
        </div>
    ) // Si `visible` es falso, renderiza solo la opcion de ver el carrito


    return (
        <div>
            <div className="d-flex">
                <button onClick={incrementar} className="m-4"> + </button>
                <h4 className="p-4">{cantidad}</h4>
                <button onClick={decrementar} className="m-4"> - </button>
            </div>
            <div>
                <button onClick={() => manejoAñadirCarrito(cantidad)}>Agregar al carrito</button>
                <Link to={`/carrito`} className="mt-3"> Ver carrito </Link>
            </div>

        </div>
    )
}

export default ItemCount