import ItemCount from './ItemCount'

function ItemDetail({nombre, precio, categoria, descripcion, imagen, id, stock }) {
    return (
        <article className="CardItem CardItemDetail m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className='d-flex'>
                <div>
                    <img src={imagen} className="ImgCard" alt="" />
                </div>
                <div>
                    <section>
                        <p className="Info">
                            Precio: ${precio}
                        </p>
                        <p className="Info">
                            Descripcion: {descripcion}
                        </p>
                        <p className="Info">
                            Categoria: {categoria}
                        </p>
                        <p className="Info">
                            Stock: {stock}
                        </p>

                    </section>
                    <footer className="ItemFooter">
                        <ItemCount item={nombre} imagen={imagen} precio={precio} id={id} stock={stock} initial={1}/>
                    </footer>
                </div>
            </div>
        </article>
    )
}

export default ItemDetail