import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PatientRecord() {
  const { email } = useParams();
  const [records, setRecords] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/records/" + email)
      .then(res => res.json())
      .then(data => setRecords(data.records || []));
  }, [email]);

  const upload = async () => {
    if (!file) return alert("Select a file");

    const form = new FormData();
    form.append("doctorEmail", localStorage.getItem("doctorEmail"));
    form.append("patientEmail", email);
    form.append("file", file);

    const res = await fetch("http://localhost:5000/api/uploadRecord", {
      method: "POST",
      body: form
    });

    const out = await res.json();
    if (out.status === "success") {
      alert("Uploaded!");
      setRecords([...records, out.record]);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Records for {email}</h2>

      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload} className="bg-sky-600 text-white px-4 py-2 ml-2 rounded">
        Upload Record
      </button>

      <div className="mt-6">
        {records.map(r => (
          <div key={r.id} className="p-4 bg-white rounded shadow mt-2">
            <p><b>{r.originalName}</b></p>
            <p>{new Date(r.createdAt).toLocaleString()}</p>

            <a
              href={"http://localhost:5000" + r.localPath}
              target="_blank"
              className="text-blue-600 underline"
            >
              Open File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


