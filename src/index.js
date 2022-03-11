import ReactDOM from "react-dom";
import Header from "./header";
import Stories from "./stories";
import Posts from "./posts";
import Sidebar from "./sidebar";

function App(){
    return (
        <div>
            <Header />
            <Stories />
            <Sidebar />
            <Posts />
            
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);