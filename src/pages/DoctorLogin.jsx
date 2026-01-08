
import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function DoctorLogin(){
  const [patientName, setPatientName] = useState("");
  const [dob, setDob] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  function submit(e){
    e.preventDefault();
    // TODO: upload file to IPFS, get hash, call smart contract
    console.log({patientName, dob, notes, file});
    alert("Mock upload complete (UI only). Next: integrate IPFS + ethers.js.");
  }

  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-sky-800">Doctor — Upload Patient Record</h2>
        <p className="text-sm text-slate-500 mt-1">Fill patient details and upload supporting files (PDF, image).</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Patient full name" value={patientName} onChange={e=>setPatientName(e.target.value)} required/>
          <input className="w-full p-3 border rounded" placeholder="DOB" type="date" value={dob} onChange={e=>setDob(e.target.value)} required/>
          <textarea className="w-full p-3 border rounded" rows={4} placeholder="Clinical notes" value={notes} onChange={e=>setNotes(e.target.value)} />

          <label className="block">
            <div className="text-sm text-slate-600 mb-1">Upload file</div>
            <input type="file" accept=".pdf,image/*" onChange={e=>setFile(e.target.files?.[0] ?? null)} />
            {file && <div className="mt-2 text-sm text-slate-700">Selected: {file.name}</div>}
          </label>

          <div className="flex gap-3">
            <button type="submit" className="px-5 py-2 bg-sky-600 text-white rounded">Upload & Record</button>
            <button type="button" className="px-5 py-2 border rounded" onClick={()=>{setPatientName(""); setDob(""); setNotes(""); setFile(null)}}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}


