import { FontParagraph, FontSmall, FontTitle } from "../../styles/typograph";

function Card({product, filteredProducts}) {
    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <FontTitle marginTop="yes">{product.name}</FontTitle>
            <FontSmall>{product.category}</FontSmall>
            <FontParagraph color="green">R$ {product.price}</FontParagraph>
            <button>Adicionar</button>
        </li>
    )
}

export default Card;