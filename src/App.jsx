import { Routes, Route } from "react-router-dom";
import Dashboard from "./assets/Page/Dashboard";
import About from "./assets/Page/About";
import Projetc from "./assets/Page/Projetc";
import Game from "./assets/Page/Game";
import Home from "./assets/Components/Home";
import Card from "./assets/Components/Card";
import Contact from "./assets/Page/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Porfolio/" element={<Dashboard />}>
          <Route path="Porfolio/home" element={<Home/>}/>
          <Route path="Porfolio/about" element={<About />} />
          <Route path="Porfolio/project" element={<Projetc />} />
          <Route path="Porfolio/game" element={<Game />} />
          <Route path="Porfolio/contact" element={<Contact/>} />
          <Route path="Porfolio/card" element={<Card />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
