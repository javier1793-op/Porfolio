import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./assets/Page/Dashboard"
import About from "./assets/Page/About"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
