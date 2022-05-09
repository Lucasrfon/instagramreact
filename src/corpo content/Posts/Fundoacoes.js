function Acoes (props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}

export default function Fundoacoes () {
    return (
        <div class="acoes">
            <div>
                <Acoes name="heart-outline" />
                <Acoes name="chatbubble-outline" />
                <Acoes name="paper-plane-outline" />
            </div>
            <div>
                <Acoes name="bookmark-outline" />
            </div>
        </div>
    )
}