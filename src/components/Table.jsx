import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTENTS";
import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"
import { FiEye } from "react-icons/fi"
import { Link } from "react-router-dom"







export default function Table (){
  const {user} = useContext(AuthContext);
  console.log(user)
  const [transcriptions, setTranscriptions] = useState([]);
  
 
  
 
  async function tableInfo() {

      const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
      }; console.log(user.uid)
  
      const res = await axios.get(WEB_URL + "/api/transcriptions?uid=" + user.uid, headers);
        console.log(res);
        if (res.data.status === "ok"){
          const newTranscriptions = res.data.transcription;
          console.log(newTranscriptions)
          setTranscriptions(newTranscriptions)

        }
    
      } ;
      useEffect(() => {
        if (user.loggedIn){
          tableInfo()
        }
      }, [user]);

      async function handleRemove(id){
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }; console.log(user.uid)

      const res = await axios.delete(WEB_URL + "/api/transcriptions/" + id,  headers);
      if (res.data.status === "ok"){
        window.location.reload();
        
      }
      }
     

      


      

    return (
    <div>
      {transcriptions && transcriptions.map((transcription) => {
        return (
          <div key={transcription.id} className="container">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Filename</th>
                  <th>Date Transcribed</th>
                  <th>Results</th>
                  <th>See More</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="font-bold">{transcription.filename}</div>
                  </td>
                  <td>
                    <div>{transcription.created_at}</div>
                  </td>
                  <td>{transcription.body}...</td>
                  <th>
                    <label htmlFor="my-modal" className="btn btn-ghost btn-md"><FiEye size={32} /></label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Your transcription is ready!</h3>
                        <p className="py-4">To see in full, you will need to pay</p>
                        <div className="modal-action">
                          <Link htmlFor="my-modal" className="btn" to="/checkout">Purchase Now</Link>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-md" onClick={() => handleRemove(transcription.id)} ><FaTrashAlt size={32} /></button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        );
      })}
    </div>
  );
};


  
