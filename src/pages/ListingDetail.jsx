import { useParams } from "react-router-dom";
import { MockListings } from "../../public/MockListings";
import { useEffect, useState } from "react";

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Find the listing from mock data
    const foundListing = MockListings.find((item) => String(item.id) === id);
    setListing(foundListing);
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div className="details-page">
      <div className="details-info">
        <h1>{listing.title}</h1>
        <p>{listing.category}</p>
        <p>{listing.description}</p>
        <p>{listing.price}</p>
        {listing.image && (
          <img src={listing.image} className="details-image"/>
        )}
        <button className="buy-button">
          Buy
        </button>
      </div>
    </div>
    
  );
};

export default ListingDetail;
