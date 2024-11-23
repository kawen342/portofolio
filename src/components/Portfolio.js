import React, { useState, useEffect } from 'react';

function Portfolio() {
  // State untuk daftar proyek
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Project 1 Description',
      imagePath: 'https://imgur.com/YKXSOrK.png',  // Menggunakan imagePath
      pdfUrl: null, // URL PDF proyek (jika ada)
      pdfName: null, // Nama file PDF
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State baru untuk file gambar

  // Menyimpan file yang dipilih ke localStorage
  const saveToLocalStorage = () => {
    if (selectedFile) {
      localStorage.setItem('selectedFile', JSON.stringify(selectedFile));
    }
    if (selectedImage) {
      localStorage.setItem('selectedImage', JSON.stringify(selectedImage));
    }
  };

  // Mengambil file yang disimpan dari localStorage
  const loadFromLocalStorage = () => {
    const storedFile = localStorage.getItem('selectedFile');
    const storedImage = localStorage.getItem('selectedImage');

    if (storedFile) {
      setSelectedFile(JSON.parse(storedFile));
    }

    if (storedImage) {
      setSelectedImage(JSON.parse(storedImage));
    }
  };

  useEffect(() => {
    // Memuat file yang disimpan dari localStorage saat pertama kali render
    loadFromLocalStorage();
  }, []);

  // Fungsi untuk menangani unggahan file PDF
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    saveToLocalStorage(); // Simpan file ke localStorage
  };

  // Fungsi untuk menangani unggahan file gambar
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    setSelectedImage(image);
    saveToLocalStorage(); // Simpan gambar ke localStorage
  };

  // Fungsi untuk menambah proyek baru dengan PDF
  const addProjectWithPDF = () => {
    if (selectedFile) {
      const newId = projects.length + 1;
      const newProject = {
        id: newId,
        title: `Project ${newId}`,
        description: `Project ${newId} Description`,
        imagePath: 'https://via.placeholder.com/300x200.png?text=PDF+Uploaded', // Placeholder gambar
        pdfUrl: URL.createObjectURL(selectedFile), // URL lokal untuk file PDF
        pdfName: selectedFile.name, // Menyimpan nama file PDF
      };
      setProjects([...projects, newProject]);
      setSelectedFile(null); // Reset input file hanya setelah proyek ditambahkan
      localStorage.removeItem('selectedFile'); // Hapus file yang disimpan di localStorage
    } else {
      alert('Please select a file first!');
    }
  };

  // Fungsi untuk menambah proyek baru dengan gambar
  const addProjectWithImage = () => {
    if (selectedImage) {
      const newId = projects.length + 1;
      const newProject = {
        id: newId,
        title: `Project ${newId}`,
        description: `Project ${newId} Description`,
        imagePath: URL.createObjectURL(selectedImage), // Menyimpan URL gambar
        pdfUrl: null,
        pdfName: null,
      };
      setProjects([...projects, newProject]);
      setSelectedImage(null); // Reset input gambar hanya setelah proyek ditambahkan
      localStorage.removeItem('selectedImage'); // Hapus gambar yang disimpan di localStorage
    } else {
      alert('Please select an image first!');
    }
  };

  // Fungsi untuk menghapus proyek
  const deleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  // Fungsi untuk mendownload file (gambar atau PDF)
  const downloadProject = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2>Portfolio</h2>

      {/* Input dan tombol untuk upload PDF */}
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={handleFileUpload}
          accept=".pdf"
        />
        <button
          onClick={addProjectWithPDF}
          className="btn btn-primary mt-2"
        >
          Tambah Proyek dengan PDF
        </button>
      </div>

      {/* Input dan tombol untuk upload Gambar */}
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          onChange={handleImageUpload}
          accept="image/*"
        />
        <button
          onClick={addProjectWithImage}
          className="btn btn-info mt-2"
        >
          Tambah Proyek dengan Gambar
        </button>
      </div>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>

                {/* Tampilkan gambar atau placeholder untuk PDF */}
                <div className="card-img-top">
                  {project.pdfUrl ? (
                    <div>
                      <p>PDF Uploaded: {project.pdfName}</p>
                    </div>
                  ) : (
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="card-img-top"
                    />
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="btn btn-danger"
                  >
                    Hapus Proyek
                  </button>
                  {project.pdfUrl ? (
                    <button
                      onClick={() =>
                        downloadProject(project.pdfUrl, project.pdfName)
                      }
                      className="btn btn-success"
                    >
                      Download PDF
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        downloadProject(
                          project.imagePath,
                          `${project.title}.png`
                        )
                      }
                      className="btn btn-success"
                    >
                      Download Gambar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
