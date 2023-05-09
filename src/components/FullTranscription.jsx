import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTENTS";
import axios from "axios";
import { useState } from "react";








export default function fulltranscription (){
 


     
     

      


      

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6" id="wally"></p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    )
    
            
};
