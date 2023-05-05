import React from "react";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import upload from "../static/upload.jpg"

const UPLOAD_ENDPOINT = "http://127.0.0.1:5000/sasurl";
const TRANSCRIPTION_ENDPOINT = "http://127.0.0.1:5000/api"

export default function UploadFile() {
    const { user } = useContext(AuthContext);
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
                            <div className="flex">
                            <input type="file" accept=".wav" name="filename" className="file-input file-input-bordered file-input-secondary text-gray-900 w-full max-w-xs" onChange={(e) => { setFilename(e.target.files[0].name); setFile(e.target.files[0]) }} />
                            </div>
                            <div className="flex py-4">
                            <input type="text" placeholder="Type Here" className="file-input file-input-bordered file-input-secondary text-gray-900 w-full max-w-xs pl-2" onChange={(e) => setContainer_name(e.target.value)} value={container_name} />
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-active btn-secondary " active={(container_name)}>Submit</button>
                            {status ? <h1>{status}</h1> : null}
                        </form>
                        </div>
                    </div>
                
            </div>
        </div>
    )

}