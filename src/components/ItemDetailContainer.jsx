import { useState, useEffect } from "react";
import { obtenerProductoId } from "../catalogoProductos";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

function ItemDetailContainer (){
    const [producto, setProducto] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        obtenerProductoId(itemId)
        .then(res => {
            setProducto(res)
        })
        .catch(error => {
            console.log(error)
        })
    },[itemId])

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer