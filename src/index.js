import ReactDOM from "react-dom";
import Header from "./header";
import Stories from "./stories";
import Posts from "./posts";

function App(){
    return (
        <div>
            <Header />
            <Stories />
            <Posts />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);