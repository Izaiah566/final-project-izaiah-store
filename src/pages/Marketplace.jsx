import { useState, useEffect } from "react";
import { MockListings } from "../data/MockListings";
import { useNavigate } from "react-router-dom";
//import { supabase } from "../../supabaseClient";
import styles from "../modules/marketplace.module.css";

const Marketplace = () => {
  const [listings, setListings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Load listings (mock or Supabase)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        // OPTION A: Supabase API (when ready)
        //const { data, error } = await supabase.from("listings").select("*");
        //if (error) throw error;
        //setListings(data);
        

        // OPTION B: Mock Data (current)
        setListings(MockListings);
      } catch (err) {
        console.error("Failed to load listings:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter Listings based on search + category
  useEffect(() => {
    let data = listings;

    if (search.trim() !== "") {
      data = data.filter((listing) =>
        listing.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "") {
      data = data.filter((listing) => listing.category === category);
    }

    setFiltered(data);
  }, [search, category, listings]);

  if (loading) {
    return (
      <div className={styles.listingPage}>
        <h1>Marketplace</h1>
        <p>Loading listings...</p>
      </div>
    );
  }

  return (
    <div className={styles.listingPage}>
      <h1>Marketplace</h1>

      {/* Filters */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Home">Home</option>
          <option value="Design">Design</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      {/* No Results */}
      {filtered.length === 0 && (
        <p className="no-results">No listings match your search.</p>
      )}

      {/* Listings Grid */}
      <div className={styles.listingGrid}>
        {filtered.map((item) => (
          <div key={item.id} className={styles.listingCard}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.listingImage}
            />

            <div className={styles.listingInfo}>
              <h2>{item.title}</h2>
              <p className="price">${item.price}</p>
              <p className="category">{item.category}</p>
              <p className="description">{item.description}</p>
            </div>

            <button
              className={styles.detailsBtn}
              onClick={() => navigate(`/Marketplace/${item.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
