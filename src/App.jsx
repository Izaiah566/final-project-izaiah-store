import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Auth from "./pages/Auth"
import Community from "./pages/Community"
import Contact from "./pages/Contact"
import CreateListing from "./pages/CreateListing"
import Home from "./pages/Home"
import Marketplace from "./pages/marketplace"
import Dashboard from "./pages/Dashboard"
import MainLayout from "./layouts/MainLayout"
import Registration from "./pages/Registration"
import Listings from "./pages/Listings"
import './index.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Marketplace/:id" element={<Listings />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Auth" element={<Auth />}/>
          <Route path="/Community" element={< Community />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/CreateListing" element={<CreateListing />} />
          <Route path="/Registration" element={<Registration />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
