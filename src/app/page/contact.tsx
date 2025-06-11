import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);

  // Load saved form data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved form data:", error);
        localStorage.removeItem("contactFormData");
      }
    }
  }, []);

  // Auto-save form data whenever it changes
  useEffect(() => {
    if (Object.values(formData).some((value) => value !== "")) {
      localStorage.setItem("contactFormData", JSON.stringify(formData));
      setShowSaveIndicator(true);
      setTimeout(() => setShowSaveIndicator(false), 2000);
    }
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://portfolio-backend-eight-ashen.vercel.app/api/v1/contacts/addNewContact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        localStorage.removeItem("contactFormData");
        setShowPopup({
          type: "success",
          message: "Message sent successfully!",
        });
      } else {
        setShowPopup({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setShowPopup({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowPopup(null), 3000);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-8 w-full ">
      {/* Popup Notifications */}
      <div
        className={`fixed lg:bottom-2 lg:right-4 top-2 right-4 transform transition-all duration-500 ${
          showPopup
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] lg:translate-y-full opacity-0"
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

      {/* Auto-save Indicator */}
      <div
        className={`fixed top-4 right-4 transform transition-all duration-300 ${
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

      <div className="w-full max-w-2xl mx-auto pb-5 lg:pb-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-yellow-300 transition-colors"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800 border-2 border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/30 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-yellow-300 transition-colors"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800 border-2 border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/30 transition-all duration-300"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Field */}
          <div className="group">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-yellow-300 transition-colors"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-neutral-800 border-2 border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/30 transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Field */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-yellow-300 transition-colors"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-neutral-800 border-2 border-neutral-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300/50 focus:ring-1 focus:ring-yellow-300/30 transition-all duration-300 resize-none"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium text-black transition-all duration-300 transform hover:scale-[1.02] ${
              isSubmitting
                ? "bg-yellow-300/50 cursor-not-allowed"
                : "bg-yellow-300 hover:bg-yellow-400"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
