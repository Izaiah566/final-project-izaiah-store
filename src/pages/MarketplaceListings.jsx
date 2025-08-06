import { useState } from "react";

const listings = [
  { id: 1, title: "Handmade Mug", price: "$15", category: "Home", description: "A ceramic mug" },
  { id: 2, title: "Freelance Logo Design", price: "$50", category: "Design", description: "Custom logo work" },
  { id: 3, title: "Used Bike", price: "$100", category: "Sports", description: "Mountain bike in good condition" },
];

const MarketplaceListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "" || item.category === category)
  );

  return (
    <div>
      <h1>Marketplace</h1>

      <div className="listing-search">
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

      <div className="listing-products">
        {filteredListings.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2>{item.title}</h2>
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
