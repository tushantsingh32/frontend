import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userType, setUserType] = useState("patient");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");

  const nav = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      userType,
      fullName,
      email,
      password,
      aadhaarNumber: userType === "patient" ? aadhaarNumber : null
    };

    const res = await fetch(
      "https://backend-pwou.onrender.com/api/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Signup successful. Please login.");
    nav("/login");
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>

      <form onSubmit={handleSignup} className="grid gap-4">
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        <input
          placeholder="Full Name"
          className="border p-2 rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {userType === "patient" && (
          <input
            placeholder="Aadhaar Number"
            className="border p-2 rounded"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            required
          />
        )}

        <button className="bg-blue-600 text-white p-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
}



