import carrinho from "../../assets/carrinho.png"
import logo from "../../assets/logo.png"
import lupa from "../../assets/lupa.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="" />
            <img src={carrinho} alt=""/>

            <form>
            <input type="search"/>
            <img src={lupa} alt=""/>
            </form>
        </header>
    )
}

export default Header;