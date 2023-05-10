import React from "react";
import axios from "axios";
import { useState, useContext} from "react";
import { AuthContext } from "../context/AuthProvider";
import upload from "../static/upload.jpg"
import { toast } from "react-hot-toast";
// import { UPLOAD_ENDPOINT, TRANSCRIPTION_ENDPOINT } from "../lib/CONSTENTS";
const UPLOAD_ENDPOINT = "http://127.0.0.1:5000/api/sasurl";
const TRANSCRIPTION_ENDPOINT = "http://127.0.0.1:5000/api/transcription"

export default function UploadFile() {
    const { user } = useContext(AuthContext);
    const [filename, setFilename] = useState("");
    const [status, setStatus] = useState("");
    const [file, setFile] = useState(null);
    const [duration, setDuration] = useState(0);


    

    const handleSubmit = async (event) => {
        setStatus(""); // Reset status
        

        event.preventDefault();
        const formData = new FormData();
        formData.append("filename", filename);
        formData.append("container_name", "6e636747-11f0-49d8-8d49-f84f0a78a6c9");
        formData.append("uid", user.uid);
        formData.append("duration", duration);
       

        const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
                "Ocp-Apim-Subscription-Key": "5cb74fcedeb14edd8eee96bc0634288b",
                "Content-Type": "application/json",
            },
        });
        setStatus(resp.status === 200 ? "Loading" : "Error.");
        
        

        const { BlobServiceClient } = require("@azure/storage-blob");
        const STORAGE_ACCOUNT_NAME = 'audiofilesproject';

        const sasURL = `https://${STORAGE_ACCOUNT_NAME}.blob.core.windows.net?${resp.data}`;
        console.log(sasURL);
        const blobServiceClient = new BlobServiceClient(sasURL);
        const containerClient = blobServiceClient.getContainerClient("6e636747-11f0-49d8-8d49-f84f0a78a6c9");

        const blockBlobClient = containerClient.getBlockBlobClient(filename);
        const uploadBlobResponse = blockBlobClient.uploadBrowserData(file);
        console.log(`Upload block blob ${file.name} successfully`, uploadBlobResponse.clientRequestId);

        const transcriptionPromise = await axios.post(TRANSCRIPTION_ENDPOINT, formData, {
            headers: {
                "Ocp-Apim-Subscription-Key": "5cb74fcedeb14edd8eee96bc0634288b",
                "Content-Type": "application/json",
            },
        }); 
        setStatus(resp.status === 200 ? window.location.reload() : 'error');
        
        
    

        
  };

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const audio = new Audio(e.target.result);
      audio.onloadedmetadata = function () {
        setDuration(audio.duration);
      };
    };

    reader.readAsDataURL(file);
  }

 


  

    


    return (
       
        <div className="container">
            <div className="hero h-96 md:h-[700px] rounded-box overflow-hidden my-4" style={{ backgroundImage: `url(${upload})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Upload Audio</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                        <div className="flex-center">
                            <input type="file" accept=".wav, .mp3" name="filename" className="file-input file-input-bordered file-input-secondary text-gray-900 w-full max-w-xs" onInput={handleFileInputChange} onChange={(e) => { setFilename(e.target.files[0].name); setFile(e.target.files[0])}} />
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-active btn-secondary">Submit</button>
                            <br></br>
                            {status ? <progress className="progress w-56">{status}</progress> : null}
                          
                        </form>
                        </div>
                    </div>
            </div>
        </div>
    )

}
