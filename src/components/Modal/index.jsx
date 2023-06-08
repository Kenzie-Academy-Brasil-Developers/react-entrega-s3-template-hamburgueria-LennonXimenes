import teste from "../../assets/teste.png"

import { useEffect, useRef } from "react";

import { StyledContainer, StyledList, StyledModal, StyledTitle } from "./style";
import { FaTrash } from "react-icons/fa";
import X from "../../assets/X.png";
import { FontParagraph, FontTitle } from "../../styles/typograph";

function Modal({setIsOpen, children}) {
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

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">
                <StyledTitle>
                    <FontTitle>Carrinho de compras</FontTitle>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}> <img src={X} alt="Letra X"/></button>
                    {children}
                </StyledTitle>
                <StyledList>
                    <li>
                        <div>
                            <img src={teste} alt="" />
                            <FontTitle>X Tapa Certo</FontTitle>
                        </div>
                        <button><FaTrash size={25} color="#BDBDBD"/></button>
                    </li>
                </StyledList>
                <StyledContainer>
                    <div className="line"></div>
                    <div>
                        <FontParagraph>Total</FontParagraph>
                        <FontParagraph color="grey3">R$ <span>XXXX</span></FontParagraph>
                    </div>
                    <button>Remover todos</button>
                </StyledContainer>
            </div>
        </StyledModal>
    )
}

export default Modal;