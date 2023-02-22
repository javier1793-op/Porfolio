import { Routes, Route } from "react-router-dom";
import Dashboard from "./assets/Page/Dashboard";
import About from "./assets/Page/About";
import Projetc from "./assets/Page/Projetc";
import Game from "./assets/Page/Game";
import Home from "./assets/Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projetc />} />
          <Route path="/game" element={<Game />} />
          <Route path="/contact" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
