import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from "./config"

const db = getFirestore(app)


export const traerProductos = async (setProductos) => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const productos = []
    querySnapshot.forEach((doc) => {
        productos.push(doc.data())
    })

    setProductos(productos)
}

export const traerProductosPorCategoria = async (categoria, setProductos) => {
    const productosRef = collection(db, "Productos")
    const q = query(productosRef, where("categoria", "==", categoria))
    const querySnapshot = await getDocs(q);
    const productos = []

    querySnapshot.forEach((doc) => {
        productos.push(doc.data())
    });
    setProductos(productos)
}