function User (props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.conta}</strong>
                {props.nome}
            </div>
        </div>
    )
}

export default function Usuario () {
    return (
        <User image="assets/img/catanacomics.svg" conta="catanacomics" nome="Catana"/>
    )
}