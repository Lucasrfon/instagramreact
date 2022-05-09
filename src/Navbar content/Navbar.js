import Logo from "./Logo";
import Icones from "./Icones";
import Instagrammobile from "./Instagram-mobile";
import Pesquisa from "./Pesquisa"

function NavbarItem (props) {
    return (
        <div class={props.class}>
            <ion-icon name={props.name}></ion-icon>
        </div>
    )
}

export default function Navbar() {
    return(
        <div class="navbar">
            <div class="container">
                <Logo />
                <NavbarItem class="logo-mobile" name="logo-instagram"/>
                <Instagrammobile />
                <Pesquisa />
                <Icones />
                <NavbarItem class="icones-mobile" name="paper-plane-outline"/>
            </div>
        </div>
    )
}