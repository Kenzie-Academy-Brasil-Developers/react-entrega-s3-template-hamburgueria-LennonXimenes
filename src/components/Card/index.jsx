function Card({product, filteredProducts}) {
    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <small>{product.category}</small>
            <button>Adicionar</button>
        </li>
    )
}

export default Card;