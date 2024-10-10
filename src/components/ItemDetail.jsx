import { useState, useContext, useEffect } from "react";
import ItemCount from './ItemCount';
import { cartContext } from "../context/cartContext";



function ItemDetail({ nombre, precio, categoria, descripcion, imagen, id, stock }) {
    const { cart } = useContext(cartContext);

    // Verifico el stock inicial basado en el carrito
    const calcularStockInicial = () => {
        const itemEnCarrito = cart.find(cartItem => cartItem.id === id);
        if (itemEnCarrito) {
            return stock - itemEnCarrito.cantidad; // Restar cantidad si el producto está en el carrito
        }
        return stock; // Si no está, devolver el stock original
    };

    const [stockDisponible, setStockDisponible] = useState(calcularStockInicial); // Stock local con cálculo inicial

    // Actualizar el stock si el carrito cambia
    useEffect(() => {
        const itemEnCarrito = cart.find(cartItem => cartItem.id === id);
        if (itemEnCarrito) {
            setStockDisponible(stock - itemEnCarrito.cantidad);
        } else {
            setStockDisponible(stock); // Si el producto no está, mostrar el stock original
        }
    }, [cart, id, stock]);

    return (
        <article className="CardItem CardItemDetail m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className='d-flex row'>
                <div className="col-12 col-md-4">
                    <img src={imagen} className="ImgCard" alt={nombre} />
                </div>
                <div className="col-12 col-md-8">
                    <section>
                        <p className="Info">
                            Precio: ${precio}
                        </p>
                        <p className="Info">
                            Descripción: {descripcion}
                        </p>
                        <p className="Info">
                            Categoría: {categoria}
                        </p>
                        <p className="Info">
                            Stock disponible: {stockDisponible}  {/* Mostrar el stock actualizado */}
                        </p>
                    </section>
                    <footer className="ItemFooter">
                        {/* Pasar el stock actualizado a ItemCount */}
                        <ItemCount item={nombre} imagen={imagen} precio={precio} id={id} stock={stockDisponible} initial={1} />
                    </footer>
                </div>
            </div>
        </article>
    );
}

export default ItemDetail;
