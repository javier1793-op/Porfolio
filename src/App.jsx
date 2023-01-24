import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./assets/Page/Dashboard"

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
