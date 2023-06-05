import logo from "../../assets/logo.png"
import carrinho from "../../assets/carrinho.png"
import lupa from "../../assets/lupa.png"

function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="Logo da Hamburgueria Kenzie"/>
                <img src={carrinho} alt="Carrinho de compras"/>
            </div>

            <div>
                <input type="search"/>
                <button><img src={lupa} alt="Lupa para pesquisa"/></button>
            </div>
        </header>
    )
}

export default Header;