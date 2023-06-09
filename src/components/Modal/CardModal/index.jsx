import { FontTitle } from "../../../styles/typograph";
import { StyledFaTrash } from "../style";

function CardModal({product, removeProductFromList}) {

    return (
        <li>
            <div>
                <img src={product.img} alt={product.name} />
                <FontTitle>{product.name}</FontTitle>
            </div>
            <button onClick={() => removeProductFromList(product.id)}><StyledFaTrash size={25} /></button>
        </li>
    )
}

export default CardModal;