import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { WEB_URL } from "../lib/CONSTENTS";
import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"
import { FiEye } from "react-icons/fi"



export default function Table (){
  const {user} = useContext(AuthContext);
 
  async function tableInfo() {

      const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
      }; console.log(user.uid)
  
      const res = await axios.get(WEB_URL + "/api/transcriptions?uid=" + user.uid, headers);
        console.log(res);
    
      } ;
      useEffect(() => {
        tableInfo()
      }, []);


    return(
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
              <div className="font-bold">Hart Hagerty</div>
        </td>
        <td>
          <div>date</div>
        </td>
        <td>{}</td>
        <th>
          <button className="btn btn-ghost btn-md"><FiEye size={32}/></button>
        </th>
        <th>
          <button className="btn btn-ghost btn-md"><FaTrashAlt size={32}/></button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
              <div className="font-bold">Hart Hagerty</div>
        </td>
        <td>
          <div>date</div>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-md"><FiEye size={32}/></button>
        </th>
        <th>
          <button className="btn btn-ghost btn-md"><FaTrashAlt size={32}/></button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
              <div className="font-bold">Hart Hagerty</div>
        </td>
        <td>
          <div>date</div>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-md"><FiEye size={32}/></button>
        </th>
        <th>
          <button className="btn btn-ghost btn-md"><FaTrashAlt size={32}/></button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
              <div className="font-bold">Hart Hagerty</div>
        </td>
        <td>
          <div>date</div>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-md"><FiEye size={32}/></button>
        </th>
        <th>
          <button className="btn btn-ghost btn-md"><FaTrashAlt size={32}/></button>
        </th>
      </tr>
    </tbody>
   
   
    
  </table>
</div>
    )

};
