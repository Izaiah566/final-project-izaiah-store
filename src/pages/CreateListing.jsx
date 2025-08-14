import { useState } from "react";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting listing:", formData);
    // Submit to backend or show preview
  };

  return (
    <div>
      <h2>Create New Listing</h2>
      <form onSubmit={handleSubmit} className="create-listing">
        <input type="text" name="title" placeholder="Title" className="input" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" className="input" value={formData.description} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" className="input" value={formData.price} onChange={handleChange} required />
        <select name="category" className="input" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Home">Home</option>
          <option value="Digital">Digital</option>
          <option value="Services">Services</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;
