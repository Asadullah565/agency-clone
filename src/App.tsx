
import { useEffect } from "react"
import {Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { About } from "./pages/About"
import Home from "./pages/Home"
import MenuServices from "./pages/Menuservices"
import MenuContact from "./pages/MenuContact"

function ScrollToHashElement() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])

  return null
}

export function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="relative min-h-screen  text-white font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<MenuServices/>}/>
            <Route path={"/contact"} element={<MenuContact/>}/>
          </Routes>
          </main>
          <Footer />
      </div>
    </Router>
  )
}

export default App;
