import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Fetch listing details from backend using `id`
    fetch(`/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.category}</p>
      <p>{listing.description}</p>
      <p>{listing.price}</p>
    </div>
  );
};

export default ListingDetail;
