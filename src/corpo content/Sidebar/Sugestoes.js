function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt="User" />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes () {
    const sugestoes = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram"
        },
        {
            image: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você"
        },
    ]
    
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map(item => <Sugestao image={item.image} nome={item.nome} razao={item.razao} />)}
        </div>
    )
}