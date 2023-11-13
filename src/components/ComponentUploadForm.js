// ComponentUploadForm.js
import React, { useState } from "react";

const ComponentUploadForm = ({ onUpload }) => {
  const [folderName, setFolderName] = useState("");
  const [code, setCode] = useState("");

  const handleFolderChange = (event) => {
    setFolderName(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleUpload = () => {
    const fileName = `${folderName}/${folderName}Component.js`;
    onUpload({ fileName, code, folderName }); // Chuyển thêm thông tin folderName
    setFolderName("");
    setCode("");
  };

  return (
    <div>
      <h2>Upload New Component</h2>
      <label>
        Folder Name:
        <input type="text" value={folderName} onChange={handleFolderChange} />
      </label>
      <br />
      <label>
        Code:
        <textarea value={code} onChange={handleCodeChange} />
      </label>
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ComponentUploadForm;
