import "./App.css";
import CharecterDitale from "./Components/CharecterDitale";
import CharecterList from "./Components/CharecterList";
import Navbar from "./Components/Navbar";
import { characters } from "../data/data";

function App() {
    return <div className="nav">
        <Navbar />
        <div className="main">
            <CharecterList characters={characters} />
            <CharecterDitale />
        </div>
    </div>
}

export default App;