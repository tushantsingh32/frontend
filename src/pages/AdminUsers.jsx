import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function AdminUsers(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/users")
      .then(r=>r.json())
      .then(d=>setUsers(d.users || []))
      .catch(e=>console.error(e));
  },[]);

  return (
    <div className="min-h-screen bg-sky-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-sky-800">All Users (Admin)</h1>
        <div className="mt-4 grid gap-3">
          {users.map(u => (
            <div key={u.id} className="p-3 bg-white rounded shadow flex justify-between">
              <div>
                <div className="font-semibold">{u.fullName}</div>
                <div className="text-xs text-slate-500">{u.email} — {u.userType}</div>
              </div>
              <div className="text-xs text-slate-400">{new Date(u.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


