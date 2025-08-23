import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "./AddFlower.css";

const AddFlower = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    Price: "",
    Category: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    if (image) data.append("Image", image);

    try {
      await axios.post("https://flower-website-backend-two-2ddp.onrender.com/api/flowers", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Flower added successfully!");
      setFormData({ Title: "", Description: "", Price: "", Category: "" });
      setImage(null);
    } catch (err) {
      console.error("Add flower error:", err);
      toast.error(err.response?.data?.error || "Failed to add flower");
    }
  };

  return (
    <div className="add-flower-container">
      <div className="add-flower-card">
        {/* Header row */}
        <div className="header-row">
          <h1>Admin Panel</h1>
          <div className="nav-buttons">
            <NavLink to="/flowers" className={({ isActive }) => (isActive ? "active" : "")}>
              Flowers
            </NavLink>
            <NavLink to="/add-flower" className={({ isActive }) => (isActive ? "active" : "")}>
              Add Flowers
            </NavLink>
          </div>
        </div>
        <div className="divider"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="add-flower-form">
          <label>Image</label>

          {/* Custom upload box */}
          <label htmlFor="image" className="file-drop">
            <div>
              <div style={{fontWeight:700, marginBottom:6}}>Upload</div>
              <small>{image ? image.name : "Click to select an image"}</small>
            </div>
          </label>
          <input
            id="image"
            type="file"
            className="file-input"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <label>Name</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} required />

          <div className="row">
            <div>
              <label>Category</label>
              <input type="text" name="Category" value={formData.Category} onChange={handleChange} required />
            </div>
            <div>
              <label>Price</label>
              <input type="number" name="Price" value={formData.Price} onChange={handleChange} required />
            </div>
          </div>

          <label>Description</label>
          <textarea name="Description" value={formData.Description} onChange={handleChange} required />

          <button type="submit">SUBMIT</button>
        </form>

        {/* Footer */}
        <footer className="footer">
          Flower Delivery App <br />
          Created for ElevateHER Innovation Space Ltd <br />
          By [Sadiq Ridwan Abubakar]
        </footer>
      </div>
    </div>
  );
};

export default AddFlower;
