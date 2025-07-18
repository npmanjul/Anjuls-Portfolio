import React, { useState, useEffect } from "react";

type ContactProps = {
  setShowPopup: (
    popup: { type: "success" | "error"; message: string } | null
  ) => void;
  setShowSaveIndicator: (show: boolean) => void;
};

const Contact: React.FC<ContactProps> = ({
  setShowPopup,
  setShowSaveIndicator,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
  }, [formData, setShowSaveIndicator]);

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
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowPopup(null), 3000);
    }
  };

  return (
    <div className="relative flex flex-col items-start justify-start gap-8 w-full ">
      {/* Popup Notifications */}

      {/* Auto-save Indicator */}

      <div className="w-full max-w-2xl mx-auto pb-5 lg:pb-0 ">
        <form onSubmit={handleSubmit} className="md:space-y-3 space-y-6 ">
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
