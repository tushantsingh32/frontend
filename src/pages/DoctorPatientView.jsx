import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorPatientView() {
  const { email } = useParams();
  const [records, setRecords] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/records/" + email)
      .then(r => r.json())
      .then(d => setRecords(d.records || []))
      .catch(err => console.error(err));
  }, [email]);

  const uploadRecord = async () => {
    if (!file) return alert("Please select a file");

    const data = new FormData();
    data.append("patientEmail", email);
    data.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/uploadRecord", {
        method: "POST",
        body: data
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Upload failed");
        return;
      }

      alert("Record uploaded successfully");
      setRecords(prev => [...prev, result.record]);

    } catch (err) {
      console.error(err);
      alert("Upload error");
    }
  };

  return (
    <div className="p-6 bg-sky-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Patient: {email}</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Upload New Record</h3>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button
        className="px-4 py-2 bg-sky-600 text-white rounded ml-2"
        onClick={uploadRecord}
      >
        Upload
      </button>

      <h3 className="text-xl font-semibold mt-6 mb-2">Existing Records</h3>
      <div className="grid gap-4">
        {records.map(r => (
          <div key={r.id} className="p-4 bg-white rounded shadow">
            <div className="font-bold">{r.originalName}</div>
            <div className="text-sm">
              Uploaded: {new Date(r.createdAt).toLocaleString()}
            </div>

            <a
              href={"http://localhost:5000" + r.localPath}
              target="_blank"
              className="text-sky-600 text-sm underline"
            >
              View File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


