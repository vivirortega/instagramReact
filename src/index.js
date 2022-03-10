import ReactDOM from "react-dom";
import Header from "./header";

function App(){
    return (
        <div>
            <Header />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);