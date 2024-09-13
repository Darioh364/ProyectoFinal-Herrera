import { useState, useEffect } from "react"
import { obtenerProducto, obtenerProductoCategoria } from '../catalogoProductos'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

function ItemListContainer({}){
    const[productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const asyncFunc = categoriaId ? obtenerProductoCategoria : obtenerProducto
        asyncFunc(categoriaId)
        .then(res => {
            setProductos(res)
        })
        .catch(error =>{
            console.log(error)
        })
    },[categoriaId])


 
    return (
        <div className="item_List_Container p-2 m-4">
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer