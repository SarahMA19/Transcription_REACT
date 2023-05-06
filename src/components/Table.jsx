import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTENTS";
import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"
import { FiEye } from "react-icons/fi"
import dayjs from "dayjs";






export default function Table (){
  const {user} = useContext(AuthContext);
  const [transcriptions, setTranscriptions] = useState([]);
  
 
  async function tableInfo() {

      const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
      }; console.log(user.uid)
  
      const res = await axios.get(WEB_URL + "/api/transcriptions?uid=" + "6wNvAnZUhLMUPFmnO6r3P8IkhH53", headers);
        console.log(res);
        if (res.data.status === "ok"){
          const newTranscriptions = res.data.transcription;
          setTranscriptions(newTranscriptions)

        }
    
      } ;
      useEffect(() => {
        tableInfo()
      }, []);

    return (
    <div>
      {transcriptions && transcriptions.map((transcription) => {
        return (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Filename</th>
                  <th>Date Transcribed</th>
                  <th>Results</th>
                  <th>See More</th>
                  <th>Delete</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="font-bold">{transcription.filename}</div>
                  </td>
                  <td>
                    <div>{transcription.created_at}</div>
                  </td>
                  <td>{transcription.body}...</td>
                  <th>
                    <button className="btn btn-ghost btn-md"><FiEye size={32} /></button>
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-md"><FaTrashAlt size={32} /></button>
                  </th>
               </tr>
              </tbody>
            </table>
          </div>
        );
          })}
    </div>
      );
  };
