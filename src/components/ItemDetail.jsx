import ItemCount from './ItemCount'

function ItemDetail ({id, nombre, precio, categoria, stock, descripcion, img}) {
    return(
        <article className="CardItem m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <img src= {img} alt="" />
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Descripcion">
                    Descripcion: {descripcion}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <p>
                    Categoria: {categoria}
                </p>
            </section>
            <footer className="ItemFooter">
               <ItemCount stock={10}  initial={1} onAdd={(quanty) => console.log ('Cantidad agregada ',quanty)}/>
            </footer>
        </article>
    )
}

export default ItemDetail