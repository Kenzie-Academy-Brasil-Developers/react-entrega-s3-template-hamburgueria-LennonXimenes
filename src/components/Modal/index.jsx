import { useEffect, useRef } from "react";
import { StyledModal } from "./style";

function Modal({setIsOpen, children}) {
    const modalRef = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if(!modalRef.current?.contains(e.target)) {
                console.log("Clicou fora")
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
            <div ref={modalRef}>
                <button ref={buttonRef} onClick={() => setIsOpen(false)}>Fechar</button>
                {children}
            </div>
        </StyledModal>
    )
}

export default Modal;