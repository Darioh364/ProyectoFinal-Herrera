import { useState } from "react"

function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial)

    const incrementar = () => {
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrementar = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="d-flex">
                <button onClick={incrementar} className="m-4"> + </button>
                <h4 className="p-4">{quantity}</h4>
                <button onClick={decrementar} className="m-4"> - </button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount