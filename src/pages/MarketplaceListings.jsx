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
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search listings..."
          className="border px-4 py-2 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Home">Home</option>
          <option value="Design">Design</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-blue-500 font-bold mt-2">{item.price}</p>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceListings;
