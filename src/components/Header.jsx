import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/MarketplaceListings">Listings</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </div>
                
                <div>
                    <li>Join</li>
                    <li>Sell</li>
                </div>
            </nav>
        </header>
    );
};

export default Header;