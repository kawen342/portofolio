import React, { useState, useEffect } from "react";

function CV() {
  const [uploadedCVs, setUploadedCVs] = useState([]);

  // Load uploaded CVs from localStorage when the component mounts
  useEffect(() => {
    const savedCVs = JSON.parse(localStorage.getItem("uploadedCVs") || "[]");
    setUploadedCVs(savedCVs);
  }, []);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedCVs = [...uploadedCVs, { name: file.name, content: reader.result }];

        // Check the total size before saving to localStorage
        const dataSize = new Blob([JSON.stringify(updatedCVs)]).size;
        const maxQuota = 5 * 1024 * 1024; // 5MB

        if (dataSize > maxQuota) {
          alert("Cannot save file: Storage quota exceeded. Please delete some files.");
        } else {
          localStorage.setItem("uploadedCVs", JSON.stringify(updatedCVs));
          setUploadedCVs(updatedCVs);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Handle file download
  const handleDownload = (cv) => {
    const link = document.createElement("a");
    link.href = cv.content;
    link.download = cv.name;
    link.click();
  };

  // Handle delete file
  const handleDelete = (index) => {
    const updatedCVs = uploadedCVs.filter((_, i) => i !== index);
    localStorage.setItem("uploadedCVs", JSON.stringify(updatedCVs));
    setUploadedCVs(updatedCVs);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">CV Management</h1>

      {/* Upload CV */}
      <div className="mb-4">
        <label htmlFor="cvUpload" className="form-label">
          Upload your CV (PDF only):
        </label>
        <input
          type="file"
          className="form-control"
          id="cvUpload"
          accept="application/pdf"
          onChange={handleFileUpload}
        />
      </div>

      {/* Uploaded PDFs */}
      <div className="row">
        {uploadedCVs.length === 0 && (
          <div className="text-center text-muted">
            <p>No PDF files uploaded yet.</p>
          </div>
        )}

        {uploadedCVs.map((cv, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{cv.name}</h5>
                <button
                  className="btn btn-primary me-2"
                  onClick={() => handleDownload(cv)}
                >
                  Download
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CV;
