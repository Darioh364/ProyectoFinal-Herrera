import { Link } from "react-router-dom"

function Item({ id, nombre, precio, imagen, categoria }) {
    
    return (
        <article className="CardItem col-12 col-md-4 ">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <div className="d-flex justify-content-center align-items-center">
                <img src={`/img/${imagen}`} alt="" className="ImgCard" />
            </div>
            <section>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Categoria: {categoria}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`}> Ver detalle </Link>
            </footer>
        </article>
    )
}

export default Item