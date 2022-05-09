import Stories from "./Stories";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}