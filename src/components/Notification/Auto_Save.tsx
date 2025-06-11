import React from "react";

type AutoSaveProps = {
  showSaveIndicator: boolean;
};

const Auto_Save: React.FC<AutoSaveProps> = ({ showSaveIndicator }) => {
  return (
    <div
      className={`fixed top-2 right-2 transform transition-all duration-300 z-100 ${
        showSaveIndicator
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span className="text-sm">Saving...</span>
      </div>
    </div>
  );
};

export default Auto_Save;
