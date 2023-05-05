
import React from "react";

import Header2 from "../components/Header2";
import UploadFile from "../components/UploadFile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";





export default function Audio () {
  return(
    <>
    <Header/>
    <Header2/>
    <UploadFile />
    <Table />
    <Footer />
    </>
  )
};
  
    
{/* <>
<form onSubmit={handleSubmit}>
<h1> File Upload</h1>
<input type="file" accept=".wav" name="filename" className="file-input file-input-bordered file-input-secondary w-full max-w-xs"onChange={(e) => {setFilename(e.target.files[0].name); setFile(e.target.files[0])}}  />
<input type="text" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" onChange={(e) => setContainer_name(e.target.value)} value={container_name}  />
<button type="submit" className="btn btn-active btn-secondary" active={(container_name)}>
    Upload File
</button>
{status ? <h1>{status}</h1> : null}
</form>
</> */}

 

