import { Link } from "react-router-dom"

function Item ({id, nombre, precio, stock, img}) {
    return(
        <article className="CardItem m-1">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className="d-flex justify-content-center align-items-center">
            <img src= {img} alt="" className="ImgCard" />
            </div>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}> Ver detail </Link>
            </footer>
        </article>
    )
}

export default Item