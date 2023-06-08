import { useState } from "react"

import { BiSearchAlt2 } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/logo.png"

import Modal from "../Modal";

function Header({callback, isOpen, setIsOpen}) {
    const [inputSearch, setInputSearch] = useState("");

    function handleSbumit(e) {
        e.preventDefault();
        callback(inputSearch);

    }

    return (
        <header>
            <img src={logo} alt="" />

            <button onClick={() => setIsOpen(true)}><FaShoppingCart size={20} /></button>
            {isOpen ? <Modal setIsOpen={setIsOpen}></Modal> : null}

            <form onSubmit={handleSbumit}>
                <input
                    type="search"
                    placeholder="Digite aqui.."
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button><BiSearchAlt2 size={20} /></button>
            </form>
        </header>
    )
}

export default Header;