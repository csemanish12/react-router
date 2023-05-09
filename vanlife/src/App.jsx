import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./pages/Navbar"

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
     
    
  )
}
