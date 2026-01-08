import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requireAuth } from "../utils/auth";

export default function DoctorDashboard() {
  const nav = useNavigate();
  const user = requireAuth("doctor", nav);
  if (!user) return null;

  const [aadhaar, setAadhaar] = useState("");
  const [patient, setPatient] = useState(null);
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  // 🔍 Search patient
  const searchPatient = async () => {
    setMsg("");
    setPatient(null);

    const res = await fetch(
      `http://localhost:3000/api/doctor/search/${aadhaar}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setMsg(data.message || "Patient not found");
      return;
    }

    setPatient(data);
  };

  // 📤 Upload record (FORM SUBMIT)
  const uploadRecord = async (e) => {
    e.preventDefault(); // 🔥 IMPORTANT

    if (!file) {
      alert("Please select a file");
      return;
    }

    const form = new FormData();
    form.append("file", file);
    form.append("patientEmail", patient.email);
    form.append("patientAadhaar", patient.aadhaarNumber);

    const res = await fetch("http://localhost:3000/api/uploadRecord", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: form
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Upload failed");
      return;
    }

    setMsg("Record uploaded successfully");
    setFile(null);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Doctor Dashboard</h2>

      <button
        onClick={() => {
          localStorage.clear();
          nav("/login");
        }}
        className="mb-4 bg-red-600 text-white px-3 py-1 rounded"
      >
        Logout
      </button>

      {/* Search */}
      <div className="mb-6">
        <input
          placeholder="Patient Aadhaar Number"
          className="border p-2 mr-2"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
        />
        <button
          onClick={searchPatient}
          className="bg-sky-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {msg && <p className="mb-4 text-green-600">{msg}</p>}

      {/* Upload FORM */}
      {patient && (
        <form
          onSubmit={uploadRecord}
          className="border p-4 rounded max-w-md"
        >
          <p><b>Name:</b> {patient.fullName}</p>
          <p><b>Email:</b> {patient.email}</p>

          <input
            type="file"
            className="block mt-4"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Upload Record
          </button>
        </form>
      )}
    </div>
  );
}





