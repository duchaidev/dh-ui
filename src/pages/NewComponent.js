// NewComponent.js
import React from "react";
import ComponentUploadForm from "../components/ComponentUploadForm";

const NewComponent = () => {
  const handleUpload = ({ fileName, code, folderName }) => {
    const content = `import React from 'react';\n\n${code}\n\nexport default ${folderName}Component;`;
    const blob = new Blob([content], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>New Component</h1>
      <ComponentUploadForm onUpload={handleUpload} />
    </div>
  );
};

export default NewComponent;
