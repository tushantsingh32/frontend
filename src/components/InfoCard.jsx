import React from "react";

export default function InfoCard({ title, children, footer }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold text-sky-800 mb-2">{title}</h3>
      <div className="text-sm text-slate-700">{children}</div>
      {footer && <div className="mt-3 text-xs text-slate-500">{footer}</div>}
    </div>
  );
}
