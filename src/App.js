
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import HomeView from "./views/HomeView";
import Audio from "./views/Audio";
import Checkout from "./views/Checkout";






function App() {
 
  
  return (
    <div className="App">
  
     
      
      <Toaster containerClassName="mt-16" />
      
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      
    </div>
  );
}

export default App;