import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import AuthPage from "./pages/AuthPage"
import CommunityFeed from "./pages/CommunityFeed"
import Contact from "./pages/Contact"
import CreateListing from "./pages/CreateListing"
import Home from "./pages/Home"
import MarketplaceListings from "./pages/MarketplaceListings"
import UserDashboard from "./pages/UserDashboard"
import MainLayout from "./layouts/MainLayout"
import './index.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/MarketplaceListings" element={<MarketplaceListings />} />
          <Route path="/About" element={<About />} />
          <Route path="AuthPage" element={<AuthPage />}/>
          <Route path="CommunityFeed" element={< CommunityFeed />}/>
          <Route path="Contact" element={<Contact />}/>
          <Route path="UserDashboard" element={<UserDashboard />}/>
          <Route path="CreateListing" element={<CreateListing />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
