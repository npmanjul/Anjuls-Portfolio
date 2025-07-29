import React from "react";

type NavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex items-center justify-evenly font-bold text-[14px] lg:text-[16px] text-neutral-300 overflow-x-auto scrollbar-hide">
      {["about", "skills", "projects", "contact", "resume"].map((tab) => (
        <button
          key={tab}
          className={`lg:pb-2 cursor-pointer whitespace-nowrap ${
            activeTab === tab ? "font-bold text-yellow-300" : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
