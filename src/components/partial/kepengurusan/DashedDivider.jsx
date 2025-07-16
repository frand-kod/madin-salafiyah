import React from "react";

export default function DashedDivider({ className = "" }) {
  return (
    <div
      className={`my-6 border-t border-dashed border-gray-300 ${className}`}
    ></div>
  );
}
