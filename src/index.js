import ReactDOM from "react-dom";
import Header from "./header";
import Stories from "./stories";

function App(){
    return (
        <div>
            <Header />
            <Stories />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);