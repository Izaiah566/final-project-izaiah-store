
//import { item } from "../../public/MockListings";
import { useState, useEffect } from "react";
import styles from "../modules/home.module.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to MarketConnect</h1>
        <p>Buy, Sell, and Connect with your local community</p>
        <div className={styles.heroButtons}>
          <button 
          className={styles.btnPrimary}
          onClick={() => navigate(`/Registration`)}
          >
            Join Now
          </button>
          <button 
          className={styles.btnSecondary}
          onClick={() => navigate('/CreateListing')}
          >
            Sell Something
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className={styles.featured}>
        <h2>Featured Listings</h2>
        <div className={styles.listingGrid}>
          {/* Example listing cards */}
          <div className={styles.listingCard}>
            <img src="https://picsum.photos/seed/1/300/200" alt="Product" />
            <h3>Handmade Mug</h3>
            <p>$15</p>
            <button>View Details</button>
          </div>
          <div className={styles.listingCard}>
            <img src="https://picsum.photos/seed/2/300/200" alt="Product" />
            <h3>Mountain Bike</h3>
            <p>$300</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* Community Feed Preview */}
      <section className={styles.community}>
        <h2>Community Feed</h2>
        <ul>
          <li>Jane shared a new gardening tip 🌱</li>
          <li>Mike is looking for a local photographer 📸</li>
        </ul>
        <button className={styles.btnSecondary}>View All Posts</button>
      </section>
    </div>
  );
}

export default Home