import { useState } from "react";
import { MockListings } from "../../public/MockListings";

const MarketplaceListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredListings = MockListings.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || item.category === category)
  );

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
            <button>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListings;
