import { useState } from "react";
import { MockListings } from "../../public/MockListings";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const MarketplaceListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredListings = MockListings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || listing.category === category)
  );

  const navigate = useNavigate();

  return (
    <div className="listing-page">
      <h1>Marketplace</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search listings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Home">Home</option>
          <option value="Design">Design</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div>
        {filteredListings.map((item) => (
          <div key={item.id} className="listing-card">
            <h2>{item.title}</h2>
            <img src={item.image} />
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => navigate(`/MarketplaceListings/${item.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListings;
