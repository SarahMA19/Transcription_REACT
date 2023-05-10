import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTENTS";
import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"
import { FiEye } from "react-icons/fi"
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-hot-toast";










export default function Table(props) {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [transcriptions, setTranscriptions] = useState([]);



  async function tableInfo() {

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }; console.log(user.uid)

    const res = await axios.get(WEB_URL + "/api/transcriptions?uid=" + user.uid, headers);
    console.log(res);
    if (res.data.status === "ok") {
      const newTranscriptions = res.data.transcription;
      console.log(newTranscriptions)
      setTranscriptions(newTranscriptions)
      
      
     
    }

  };
  useEffect(() => {
    if (user.loggedIn) {
      tableInfo()
    }
  }, [user]);







  
  async function handleRemove(id) {
  
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }; console.log(user.uid)

    const res = await axios.delete(WEB_URL + "/api/transcriptions/" + id, headers);
    if (res.data.status === "ok") {
      toast.success("Deleted Sucessfully")
      setTimeout("window.location='/audio'",2000);
      
      
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
                        <th>Audio Length (seconds)</th>
                        <th>Total Cost</th>
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
                          <div>{moment(transcription.created_at).format("MMMM Do YYYY h:mm a")}</div>
                        </td>
                        <td>
                          <div>{Math.round(transcription.audio_length)}</div>
                        </td>
                        <td>
                          <div>${(Math.round(transcription.audio_length)* 0.07).toFixed(2)}</div>
                        </td>
                        <td>
                          <div>{transcription.body}...</div>
                        </td>
                        <th>

                          <Link to={`/transcription/${transcription.id}`} className="btn" ><FiEye size={32} /></Link>

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
      )
        };
  
      
  







