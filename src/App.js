
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import HomeView from "./views/HomeView";
import Audio from "./views/Audio";
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";




function App() {
  const {user} = useContext(AuthContext);
  
  return (
    <div className="App">
      <i className='bi bi-list'></i>
     
      
      <Toaster containerClassName="mt-16" />
      
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/audio" element={<Audio />} />
    
        </Routes>
      
    </div>
  );
}

export default App;