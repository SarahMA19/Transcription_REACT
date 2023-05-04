
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext} from "../context/AuthProvider";



const UPLOAD_ENDPOINT = "http://127.0.0.1:5000/sasurl";
const TRANSCRIPTION_ENDPOINT = "http://127.0.0.1:5000/api"


const Audio = () => {
    const { user } = useContext(AuthContext);
   

//   const [transcription, setTranscription] = useState(null);
  const [container_name, setContainer_name] = useState("");
  const [filename, setFilename] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);  

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("container_name", container_name);
    formData.append("uid", user.uid);
    const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "Ocp-Apim-Subscription-Key": "5cb74fcedeb14edd8eee96bc0634288b",
        "Content-Type": "application/json",
      },
    }); 
    setStatus(resp.status === 200 ? "Thank you!" : "Error.");
    
    const { BlobServiceClient } = require("@azure/storage-blob");
    const STORAGE_ACCOUNT_NAME = 'audiofilesproject';
   
   
     
     const sasURL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net?${resp.data}`;
     console.log(sasURL);
     const blobServiceClient = new BlobServiceClient(sasURL);
     const containerClient = blobServiceClient.getContainerClient(container_name);
   
     const blockBlobClient = containerClient.getBlockBlobClient(filename);
     const uploadBlobResponse = blockBlobClient.uploadBrowserData(file);
     console.log(`Upload block blob ${file.name} successfully`, uploadBlobResponse.clientRequestId);

     const response = await axios.post(TRANSCRIPTION_ENDPOINT, formData, {
        headers: {
          "Ocp-Apim-Subscription-Key": "5cb74fcedeb14edd8eee96bc0634288b",
          "Content-Type": "application/json",
        },
      }); setStatus(resp.status === 200 ? response.data : "Error.");

    }
   

    return (
      
        
        <form onSubmit={handleSubmit}>
        <h1> File Upload</h1>
        <input type="file" accept=".wav" name="filename" className="file-input file-input-bordered file-input-secondary w-full max-w-xs"onChange={(e) => {setFilename(e.target.files[0].name); setFile(e.target.files[0])}}  />
        <input type="text" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setContainer_name(e.target.value)} value={container_name}  />
        <button type="submit" className="btn btn-active btn-secondary" active={(container_name)}>
            Upload File
        </button>
        {status ? <h1>{status}</h1> : null}
        </form>
       
        
    );
  };


  export default Audio;