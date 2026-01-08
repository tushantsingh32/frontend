import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requireAuth } from "../utils/auth";
import { authHeader } from "../utils/api";

export default function PatientDashboard() {
  const nav = useNavigate();
  const user = requireAuth("patient", nav);
  if (!user) return null;

  const [records, setRecords] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/records/${user.email}`,
        { headers: authHeader() }
      );

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.message || "Failed to load records");
        return;
      }

      setRecords(data.records);
    } catch {
      setMsg("Server error");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Patient Dashboard</h2>

      <button
        onClick={() => {
          localStorage.clear();
          nav("/login");
        }}
        className="mb-6 bg-red-600 text-white px-3 py-1 rounded"
      >
        Logout
      </button>

      {msg && <p className="text-red-600 mb-4">{msg}</p>}

      {records.length === 0 && (
        <p className="text-gray-500">No medical records uploaded yet.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {records.map(record => (
          <div
            key={record.id}
            className="border p-4 rounded shadow"
          >
            <p className="font-semibold mb-2">
              {record.originalName}
            </p>

            {/* ✅ IMAGE PREVIEW */}
            {record.fileUrl.endsWith(".png") ||
              record.fileUrl.endsWith(".jpg") ||
              record.fileUrl.endsWith(".jpeg") ? (
              <img
                src={`http://localhost:3000${record.fileUrl}`}
                alt="Medical Record"
                className="w-full max-w-sm rounded"
              />
            ) : (
              <a
                href={`http://localhost:3000${record.fileUrl}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Document
              </a>
            )}

            <p className="text-sm text-gray-500 mt-2">
              Uploaded on:{" "}
              {new Date(record.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
