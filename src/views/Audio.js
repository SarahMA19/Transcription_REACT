
import React from "react";
import { AuthContext } from "../context/AuthProvider";
import Header2 from "../components/Header2";
import UploadFile from "../components/UploadFile";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Header from "../components/Header";
import HomeView from "./HomeView";
import { useContext} from "react";
import { useEffect } from "react";







export default function Audio () {
 

  
  return(
    <>
    <Header />
    <Header2/>
    <UploadFile />
    <Table />
    <Footer />
    </>
  )
};
  
    
