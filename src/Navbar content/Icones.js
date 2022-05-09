function IconesItem (props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function Icones () {
    return (
        <div class="icones">
            <IconesItem name="paper-plane-outline" />
            <IconesItem name="compass-outline" />
            <IconesItem name="heart-outline" />
            <IconesItem name="person-outline" />
        </div>
    )
}