function FundomobileItem (props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function Fundomobile () {
    return (
        <div class="fundo-mobile">
            <FundomobileItem name="home"/>
            <FundomobileItem name="search-outline"/>
            <FundomobileItem name="add-circle-outline"/>
            <FundomobileItem name="heart-outline"/>
            <FundomobileItem name="person-outline"/>
        </div>
    )
}