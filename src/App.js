import './App.css'; 
import { Route, Routes } from "react-router-dom";
import Wishlist from "./Wishlist/index"
import Home from "./Pages/Home";

function App() { 
  return (
    <div className="App">
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
