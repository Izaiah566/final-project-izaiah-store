import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.leftUl}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/MarketplaceListings">Listings</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/AuthPage">Login</Link></li>
                    <li><Link to="/UserDashboard">User</Link></li>
                    <li><Link to="/CommunityFeed">Feedback</Link></li>
                    <li><Link to="/CreateListing">Create</Link></li>
                </ul>
                <ul className={styles.rightUl}>
                    <li>Join</li>
                    <li>Sell</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;