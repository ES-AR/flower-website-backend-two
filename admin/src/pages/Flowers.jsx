import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "./Flowers.css";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const res = await axios.get("https://flower-website-backend-two-2ddp.onrender.com/api/flowers");
      setFlowers(res.data);
    } catch (err) {
      console.error("Fetch flowers error:", err);
      toast.error(err.response?.data?.error || "Failed to fetch flowers");
    }
  };

  const deleteFlower = async (id) => {
    if (!window.confirm("Are you sure you want to delete this flower?")) return;
    try {
      await axios.delete(`https://flower-website-backend-two-2ddp.onrender.com/api/flowers/${id}`);
      toast.success("Flower deleted successfully!");
      setFlowers(flowers.filter((f) => f._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      toast.error(err.response?.data?.error || "Failed to delete flower");
    }
  };

  return (
    <div className="flowers-container">
      <div className="flowers-card">
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

        {/* Flowers List */}
        <div className="flowers-list">
          {flowers.map((flower) => (
            <div key={flower._id} className="flower-card">
              <div className="flower-image">
                <img src={`http://localhost:5000${flower.Image}`} alt={flower.Title} />
                {/* ❌ Delete button overlay */}
                <button
                  className="delete-overlay"
                  onClick={() => deleteFlower(flower._id)}
                >
                  ×
                </button>
              </div>
              <div className="flower-details">
                <p><span className="label">Name:</span> {flower.Title}</p>
                <p><span className="label">Category:</span> {flower.Category}</p>
                <p><span className="label">Price:</span> ${flower.Price}</p>
                <p><span className="label">Description:</span> {flower.Description}</p>
                {/* Optional delete button under description */}
                <button
                  className="delete-btn"
                  onClick={() => deleteFlower(flower._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

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

export default Flowers;
