import { useState } from "react"

import { BiSearchAlt2 } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import logo from "../../assets/logo.png"

function Header({callback}) {
    const [inputSearch, setInputSearch] = useState("");

    function handleSbumit(e) {
        e.preventDefault();
        callback(inputSearch);

    }

    return (
        <header>
            <img src={logo} alt="" />

            <FaShoppingCart size={20} />

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