import Fundoacoes from "./Fundoacoes";

function Post (props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imageTopo} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imageMain} />
            </div>

            <div class="fundo">
                <Fundoacoes />

                <div class="curtidas">
                    <img src={props.imageCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.curtiu}</strong> e <strong>outras {props.quantidadeCurtiu} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts () {
    const posts = [
        {
            imageTopo: "assets/img/meowed.svg",
            name: "meowed",
            imageMain: "assets/img/gato-telefone.svg",
            imageCurtiu: "assets/img/respondeai.svg",
            curtiu: "respondeai",
            quantidadeCurtiu: "101.523"
        },
        {
            imageTopo: "assets/img/barked.svg",
            name: "barked",
            imageMain: "assets/img/dog.svg",
            imageCurtiu: "assets/img/adorable_animals.svg",
            curtiu: "adorable_animals",
            quantidadeCurtiu: "99.159"
        }
    ]
    return (
        <div class="posts">
            {posts.map(item => <Post imageTopo={item.imageTopo} name={item.name} imageMain={item.imageMain} imageCurtiu={item.imageCurtiu} curtiu={item.curtiu} quantidadeCurtiu={item.quantidadeCurtiu} />)}
        </div>
    )
}