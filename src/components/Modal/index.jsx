import teste from "../../assets/teste.png"

import { useEffect, useRef } from "react";

import { StyledContainer, StyledFaTrash, StyledList, StyledModal, StyledTitle } from "./style";
import { FaTrash } from "react-icons/fa";
import X from "../../assets/X.png";
import { FontParagraph, FontSpan, FontTitle } from "../../styles/typograph";
import CardModal from "./CardModal";

function Modal({setIsOpen, products, setProducts, setCart, cart}) {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if(!modalRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        }
        window.addEventListener("mousedown", handleOutClick);

        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        }
    }, [])

    const buttonRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(e) {
            if(e.key === "Escape") {
                buttonRef.current?.click()
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    function removeProductFromList(productId) {
        setCart((cart) => cart.filter(product => product.id !== productId))
    }

    const total = cart.reduce((accTotal, product) => {
        return accTotal + product.price
    }, 0)

    function removeAll() {
        setCart([])
    }

    console.log(products)
    console.log(cart)
    console.log(total)


    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">
                <StyledTitle>
                    <FontTitle>Carrinho de compras</FontTitle>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}><img src={X} alt="Letra X"/></button>
                </StyledTitle>
                <StyledList>
                    {cart.map((product) => 
                        <CardModal
                            removeProductFromList={removeProductFromList}
                            key={product.id} 
                            product={product}
                            cart={cart}
                            setCart={setCart}>{product.name}
                        </CardModal>)}
                </StyledList>
                <StyledContainer>
                    <div className="line"></div>
                    <div>
                        <FontParagraph>Total</FontParagraph>
                        <FontParagraph><FontSpan>R$ {total.toFixed(2).replace(".", ",")}</FontSpan></FontParagraph>
                    </div>
                    <button onClick={removeAll}>Remover todos</button>
                </StyledContainer>
            </div>
        </StyledModal>
    )
}

export default Modal;