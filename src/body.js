import Posts from "./posts";
import Sidebar from "./sidebar";
import Stories from "./stories";

export default function Body() {
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