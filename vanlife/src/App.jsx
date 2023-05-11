import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./pages/Navbar"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
import "./server"

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetails />}/>
      </Routes>
    </BrowserRouter>
     
    
  )
}
