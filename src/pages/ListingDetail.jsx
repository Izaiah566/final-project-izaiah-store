import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { supabase } from "../../supabaseClient"; // uncomment if using Supabase
import { MockListings } from "../../public/MockListings";

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fetch listing (mock or Supabase)
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);

        // 🧩 Option 1: From mock data
        const foundListing = MockListings.find(
          (item) => String(item.id) === id
        );
        if (!foundListing) throw new Error("Listing not found");
        setListing(foundListing);

        // 🧩 Option 2: From Supabase (if using)
        /*
        const { data, error } = await supabase
          .from("listings")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setListing(data);
        */

      } catch (err) {
        console.error(err);
        setError(err.message || "Error loading listing");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  // ✅ Loading or error states
  if (loading) return <p className="text-center mt-10">Loading listing...</p>;
  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        <p>❌ {error}</p>
      </div>
    );

  // ✅ Display listing details
  return (
    <div className="listing-detail-container">
      <div className="listing-detail-card">
        <img
          src={listing.image || "https://via.placeholder.com/600x400"}
          alt={listing.title}
          className="listing-image"
        />

        <div className="listing-info">
          <h1 className="listing-title">{listing.title}</h1>
          <p className="listing-category">{listing.category}</p>
          <p className="listing-description">{listing.description}</p>
          <p className="listing-price">${listing.price}</p>

          <div className="listing-actions">
            <button
              className="buy-button"
              onClick={() => alert(`Buying ${listing.title}...`)}
            >
              🛒 Buy Now
            </button>
            <button
              className="contact-button"
              onClick={() => alert(`Message seller about ${listing.title}`)}
            >
              💬 Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;

