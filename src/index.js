import ReactDOM from "react-dom";
import Header from "./header";
import Stories from "./stories";
import Posts from "./posts";
import Sidebar from "./sidebar";
import Body from "./body";
import Mobile from "./mobile";


function App(){
    return (
        <div>
            <Header />
            <Body />
            <Mobile />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root);