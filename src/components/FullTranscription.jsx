import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";





const FullTranscription = () => {
    const {id} = useParams();
    console.log(id)
    const [data, setData] = useState();
    const { user } = useContext(AuthContext);
    const url = (`http://127.0.0.1:5000/api/transcriptions/${id}`);

    useEffect(() => {

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }; 
        const fetchTranscription = async () => {
            try {
                const response = await axios.get(url, headers);
                
                    setData(response.data);
                    console.log(response.data);
               
            } catch (error) {
                console.error("Failed to fetch data from API:", error);
            }
        };
        
        fetchTranscription();
        
    }, []);
    
    
    
    if (!data) {
        return <div>Loading...</div>;
    }
 
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{data && data}</h1>
            <p className="py-6"></p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    )

};
            
export default FullTranscription;
