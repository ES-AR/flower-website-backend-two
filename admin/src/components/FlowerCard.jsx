import "./FlowerCard.css";

const FlowerCard = ({ flower, onDelete }) => {
  return (
    <div className="flower-card">
      <div className="image-container">
        <img src={`http://localhost:5000${flower.Image}`} alt={flower.Title} />
        <button className="delete-icon" onClick={() => onDelete(flower._id)}>
          ✖
        </button>
      </div>
      <h3>{flower.Title}</h3>
      <p>{flower.Description}</p>
      <p className="price">${flower.Price}</p>
      <button className="delete-btn" onClick={() => onDelete(flower._id)}>
        Delete
      </button>
    </div>
  );
};

export default FlowerCard;
