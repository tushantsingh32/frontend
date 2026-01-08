import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://backend-pwou.onrender.com/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ Store JWT + user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ Role-based navigation
    if (data.user.userType === "doctor") {
      nav("/doctor");
    } else {
      nav("/patient");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleLogin} className="grid gap-4 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-sky-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}




