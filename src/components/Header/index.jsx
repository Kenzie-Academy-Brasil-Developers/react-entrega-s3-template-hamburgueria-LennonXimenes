import { useState } from "react"

import { BiSearchAlt2 } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/logo.png"

import Modal from "../Modal";
import { CartCount, StyledHeader } from "./style";

function Header({callback, isOpen, setIsOpen, products, setProducts, cart, setCart}) {
    const [inputSearch, setInputSearch] = useState("");

    function handleSbumit(e) {
        e.preventDefault();
        callback(inputSearch);
    }



    let count = 0;

    return (
        <StyledHeader>
                <div className="container">
                    <img src={logo} alt=""/>
                    <button
                        onClick={() => setIsOpen(true)}>
                        <CartCount count={count}><FaShoppingCart size={25} color="#BDBDBD"/></CartCount>
                    </button>
                    {isOpen ? <Modal setIsOpen={setIsOpen} cart={cart} setCart={setCart}></Modal> : null}
                </div>

                <form onSubmit={handleSbumit}>
                    <input
                        type="search"
                        placeholder="Digite aqui.."
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <button><BiSearchAlt2 size={20} color="white"/></button>
                </form>
        </StyledHeader>
    )
}

export default Header;