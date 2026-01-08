import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
      {icon && <div className="text-sky-600 mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-sky-800">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
