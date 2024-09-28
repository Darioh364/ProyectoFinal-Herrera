import { useState } from "react"
import { cartContext } from "./cartContext"

function CartProvider ({children}){
    const [cart, setCart] = useState([])

    const añadirCarrito = (item) => {
        setCart([...cart, item])
    }

    return(
        <cartContext.Provider value={{cart, añadirCarrito}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider