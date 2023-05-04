import 'bootstrap-icons/font/bootstrap-icons.json'
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";

import "./styles/globals.css";
import HomeView from "./views/HomeView";
import Audio from "./views/Audio";








function App() {
  
  return (
    <div className="App">
      <i className='bi bi-list'></i>
      <Nav />
      
      <Toaster containerClassName="mt-16" />
      
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="audio" element={<Audio />} />
    
        </Routes>
      
    </div>
  );
}

export default App;