import React from "react";
import { Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorPatientView from "./pages/DoctorPatientView";  // IMPORTANT

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/patient" element={<PatientDashboard />} />

      {/* doctor opens a patient */}
      <Route path="/doctor/patient/:email" element={<DoctorPatientView />} />
    </Routes>
  );
}
