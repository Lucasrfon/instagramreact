import React from "react"


function Acoes (props) {
    return (
        <ion-icon name={props.name}></ion-icon>
    )
}



export default function Fundoacoes () {
    const [icone, setIcone] = React.useState("heart-outline");
    const [cor, setCor] = React.useState("");

    function curtir () {
        if(icone === "heart-outline") {
            setIcone("heart")
            setCor("curtido md hydrated")
        } else {
            setIcone("heart-outline")
            setCor("md hydrated")
        }
    }

    return (
        <div class="acoes">
            <div>
                <ion-icon name={icone} class={cor} onClick={curtir}></ion-icon>
                <Acoes name="chatbubble-outline" />
                <Acoes name="paper-plane-outline" />
            </div>
            <div>
                <Acoes name="bookmark-outline" />
            </div>
        </div>
    )
}