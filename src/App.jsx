import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App