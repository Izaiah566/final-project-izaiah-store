import Header from "../components/Header";
import { MockListings } from "../../public/MockListings";

const Home = () => {
    return (
        <>
            <div id="home-div">
                <h1>Buy and Sell in Your Community</h1>
                <p>Join our marketplace to connect with  buyers and sellers near you.</p>
                <input type="text" placeholder="Search for items"/><button>Search</button>
            </div>
            <div id="featured-listings">
                <h1>Featured Listings</h1>
            </div>
            <div id="home-categories">
                <h1>Explore Categories</h1>
            </div>
        </>
    )
}

export default Home;