import React from "react";

const Notification_Popup = ({ showPopup }: any) => {
  return (
    <div
      className={`fixed top-2 right-2 transform transition-all duration-500 z-100 ${
        showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div
        className={`${
          showPopup?.type === "success" ? "bg-green-500/90" : "bg-red-500/90"
        } backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3`}
      >
        {showPopup?.type === "success" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span>{showPopup?.message}</span>
      </div>
    </div>
  );
};

export default Notification_Popup;
