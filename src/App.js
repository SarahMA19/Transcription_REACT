
import { AuthContext } from "./context/AuthProvider";
import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import HomeView from "./views/HomeView";
import Audio from "./views/Audio";
import Checkout from "./views/Checkout";
import Transcription from "./views/Transcription";






function App() {
  const [transcription, setTranscription] = useState([]);
  
  return (
    <div className="App">
  
     
      
      <Toaster containerClassName="mt-16" />
      
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/checkout" element={<Checkout />}>
           
          </Route>
          <Route path="/transcription" element={<Transcription />} />
        </Routes>
      
    </div>
  );
}

export default App;