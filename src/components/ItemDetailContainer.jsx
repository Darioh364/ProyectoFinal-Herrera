import { useState, useEffect } from "react";
// import { obtenerProductoId } from "../catalogoProductos";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { traerProductosPorId } from "../firebase/db"

function ItemDetailContainer (){
    const [productosId, setProducto] = useState(null)
    const {itemId} = useParams()  //Aca tengo el ID

    useEffect(() => {
        //obtenerProductoId(itemId)
        //.then(res => {
          //  setProducto(res)
        //})
        //.catch(error => {
          //  console.log(error)
        //})
        traerProductosPorId(itemId, setProducto)
    },[itemId])

    return (
        <div className="d-flex justify-content-center">
            <ItemDetail {...productosId} />
        </div>
    )
}

export default ItemDetailContainer