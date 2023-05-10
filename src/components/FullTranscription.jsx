import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { WEB_URL } from "../lib/CONSTENTS";
import background2 from "../static/background2.jpg"





const FullTranscription = () => {
    const {id} = useParams();
    console.log(id)
    const [data, setData] = useState();
    const url = (WEB_URL + `/api/transcriptions/${id}`);

    useEffect(() => {

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }; 
        const fetchTranscription = async () => {
            try {
                const response = await axios.get(url, headers);
                
                    setData(response.data);
    
               
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
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${background2})`}}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl">{data && data}</h1>
            <p className="py-6"></p>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    )

};
            
export default FullTranscription;
