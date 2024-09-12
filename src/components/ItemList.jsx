import Item from './Item'

function ItemList({ productos }) {
    return (
        <div className="ListGroup row">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList