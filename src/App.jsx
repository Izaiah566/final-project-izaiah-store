import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MarketplaceListings from "./pages/MarketplaceListings"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import './index.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/MarketplaceListings" element={<MarketplaceListings />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
