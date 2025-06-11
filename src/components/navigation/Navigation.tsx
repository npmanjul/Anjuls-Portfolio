import React from "react";

const Navigation = ({ activeTab, setActiveTab }: any) => {
  return (
    <>
      <div className="w-full flex items-center justify-evenly font-bold text-[14px] lg:text-[16px] text-neutral-300 overflow-x-auto scrollbar-hide">
        <button
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === "about" ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === "skills" ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === "projects" ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab("projects")}
        >
          Project
        </button>
        <button
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === "contact" ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
        <button
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === "blogs" ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab("blogs")}
        >
          Blogs
        </button>
      </div>
    </>
  );
};

export default Navigation;
