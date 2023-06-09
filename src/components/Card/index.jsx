import { FontParagraph, FontSmall, FontTitle } from "../../styles/typograph";

function Card({product, setProducts, cart, setCart}) {

    function addToCart(product) {
        setCart([...cart, product])

    }

    function handleAdd(e){
        e.preventDefault()
        addToCart(product)
    }

    
    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <FontTitle marginTop="yes">{product.name}</FontTitle>
            <FontSmall>{product.category}</FontSmall>
            <FontParagraph color="green">R$ {(product.price).toFixed(2).replace(".", ",")}</FontParagraph>
            <button onClick={handleAdd}>Adicionar</button>
        </li>
    )
}

export default Card;