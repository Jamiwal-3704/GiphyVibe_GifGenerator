import React from "react";

function Spinner() {
  return (
    <div
      className="flex min-h-[120px] items-center justify-center py-6"
      role="status"
      aria-label="Loading GIF"
    >
      <div className="spinner" />
    </div>
  );
}

export default Spinner;
