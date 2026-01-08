
import React from "react";
import Navbar from "../components/Navbar";

export default function PatientLogin(){
  // In next steps we'll fetch real records
  const sampleRecords = [
    { id: 1, title: "COVID Vaccine Certificate", date: "2022-03-10", status: "Verified" },
    { id: 2, title: "Blood Test (CBC)", date: "2023-07-21", status: "Verified" },
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-xl font-semibold text-sky-800">Patient Dashboard</h2>
        <p className="text-sm text-slate-500">Your uploaded and verified medical documents.</p>

        <div className="mt-6 grid gap-4">
          {sampleRecords.map(r => (
            <div key={r.id} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <div className="font-semibold text-sky-800">{r.title}</div>
                <div className="text-xs text-slate-500">{r.date}</div>
              </div>
              <div className="text-sm font-medium text-green-600">{r.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


