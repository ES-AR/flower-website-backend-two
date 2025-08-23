import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Flowers from "./pages/Flowers";
import AddFlower from "./pages/AddFlower";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div className="app-container">

      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/flowers" />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/add-flower" element={<AddFlower />} />
      </Routes>
    </div>
  );
}

export default App;
