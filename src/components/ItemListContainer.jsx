import { useState, useEffect } from "react"
// import { obtenerProducto, obtenerProductoCategoria } from '../catalogoProductos'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { traerProductos, traerProductosPorCategoria } from "../firebase/db"


function ItemListContainer({ }) {
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {
        traerProductos(setProductos)
        traerProductosPorCategoria(categoriaId)

        categoriaId ? traerProductosPorCategoria(categoriaId, setProductos) : traerProductos(setProductos)

    }, [categoriaId])

    return (

        <div className="item_List_Container p-2 m-4">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer