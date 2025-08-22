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
import Registration from "./pages/Registration"
import ListingDetail from "./pages/ListingDetail"
import './index.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/MarketplaceListings" element={<MarketplaceListings />} />
          <Route path="/MarketplaceListings/:id" element={<ListingDetail />}/>
          <Route path="/About" element={<About />} />
          <Route path="/AuthPage" element={<AuthPage />}/>
          <Route path="/CommunityFeed" element={< CommunityFeed />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/UserDashboard" element={<UserDashboard />}/>
          <Route path="/CreateListing" element={<CreateListing />} />
          <Route path="/Registration" element={<Registration />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
