"use client";
import { useState } from "react";
import About from "./page/about";
import Skills from "./page/skills";
import Project from "./page/project";
import Contact from "./page/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex items-center justify-center h-full lg:h-screen w-full min-h-[100vh]  bg-neutral-900">
      <div className="lg:max-w-[1500px] py-5 pb-15 lg:py-15 w-full flex lg:flex-row flex-col items-center lg:items-start justify-start lg:justify-center gap-4 md:gap-6 h-full">
        {/* left part */}
        <div className="flex flex-col items-center justify-center border-2 border-neutral-600 bg-neutral-800 h-auto lg:h-full w-[95%] lg:w-[25%] xl:w-[20%]  rounded-3xl max-h-[auto] lg:max-h-[1000px] p-4 sm:p-8 lg:p-0">
          <div className="flex flex-col items-center justify-evenly w-full h-full lg:pt-5">
            <div className="flex flex-row lg:flex-col items-center justify-start lg:justify-center gap-5 md:gap-10 lg:gap-2 w-full">
              <div className="bg-neutral-700 p-1 rounded-2xl">
                <img
                  src="/profile.png"
                  alt="profile"
                  className="w-25 h-25 sm:w-40 sm:h-40 rounded-2xl"
                />
              </div>
              <div className="flex flex-col items-start lg:items-center justify-center gap-2 sm:gap-6 lg:gap-2 ">
                <div className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-3xl text-white">
                  Anjul Singh
                </div>
                <div className="text-[12px] sm:text-[15px] text-neutral-300 bg-neutral-700 py-2 px-6 rounded-[10px]">
                  Software Developer
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden w-full mt-4 p-2 bg-neutral-700 rounded-xl flex items-center justify-center gap-2 text-white"
            >
              <span>More Details</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-300 ${
                  showMobileMenu ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="w-[80%] h-[1px] bg-neutral-600 rounded-full hidden lg:block"></div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden w-full overflow-hidden transition-all duration-300 ${
                showMobileMenu
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-start justify-center gap-4 py-4">
                {/* Email */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Email
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      anjulsingh462@gmail.com
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm120-40h160q17 0 28.5-11.5T600-200q0-17-11.5-28.5T560-240H400q-17 0-28.5 11.5T360-200q0 17 11.5 28.5T400-160Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Phone
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      +91 7523801921
                    </div>
                  </div>
                </div>

                {/* Birthday */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Birthday
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      Sep 3st, 2004
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Location
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      <div>Prayagraj</div>
                      <div>Uttar Pradesh, India</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-5 py-3 w-full">
                  <div>
                    {/* Github */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </div>
                  <div>
                    {/* LinkedIn */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </div>
                  <div>
                    {/* Instagram */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex flex-col items-start justify-center gap-4">
                {/* Email */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Email
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      anjulsingh462@gmail.com
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm120-40h160q17 0 28.5-11.5T600-200q0-17-11.5-28.5T560-240H400q-17 0-28.5 11.5T360-200q0 17 11.5 28.5T400-160Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Phone
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      +91 7523801921
                    </div>
                  </div>
                </div>

                {/* Birthday */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Birthday
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      Sep 3st, 2004
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-neutral-700 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EAC452"
                    >
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <div className="font-bold text-neutral-300 text-[14px]">
                      Location
                    </div>
                    <div className="text-neutral-500 text-[14px]">
                      <div>Prayagraj</div>
                      <div>Uttar Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-center items-center gap-5 py-3">
                <div>
                  {/* Github */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                  </svg>
                </div>
                <div>
                  {/* LinkedIn */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                  </svg>
                </div>
                <div>
                  {/* Instagram */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="relative bg-neutral-800 border-2 border-neutral-600 h-auto lg:h-full w-[95%] lg:w-[60%] max-h-[100%]  lg:max-h-[1000px] rounded-3xl overflow-y-auto scrollbar-hide">
          <div className="fixed lg:sticky bottom-0 lg:bottom-auto left-0 lg:left-auto right-0 lg:right-auto w-full lg:w-[60%] p-3 lg:p-5 bg-neutral-700 border-t-2 lg:border-t-0 border-l-2 border-b-2 border-neutral-600 rounded-t-3xl lg:rounded-t-none lg:rounded-bl-3xl ml-auto to-transparent z-50">
            <div className="w-full flex items-center justify-between lg:justify-evenly font-bold text-[14px] lg:text-[16px] text-neutral-300 overflow-x-auto">
              <button
                className={`pb-2 cursor-pointer whitespace-nowrap ${
                  activeTab === "about" ? "font-bold text-yellow-300" : ""
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`pb-2 cursor-pointer whitespace-nowrap ${
                  activeTab === "skills" ? "font-bold text-yellow-300" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`pb-2 cursor-pointer whitespace-nowrap ${
                  activeTab === "projects" ? "font-bold text-yellow-300" : ""
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Project
              </button>
              <button
                className={`pb-2 cursor-pointer whitespace-nowrap ${
                  activeTab === "contact" ? "font-bold text-yellow-300" : ""
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
              <button
                className={`pb-2 cursor-pointer whitespace-nowrap ${
                  activeTab === "blogs" ? "font-bold text-yellow-300" : ""
                }`}
                onClick={() => setActiveTab("blogs")}
              >
                Blogs
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 p-4 lg:p-8">
            <div className="text-white font-bold text-2xl lg:text-4xl">
              <div>
                {activeTab === "about" && <h1>About Me</h1>}
                {activeTab === "skills" && <h1>Skills</h1>}
                {activeTab === "projects" && <h1>Projects</h1>}
                {activeTab === "contact" && <h1>Contact</h1>}
                {activeTab === "blogs" && <h1>Blogs</h1>}
              </div>
              <div className="w-[40px] lg:w-[60px] h-[5px] absolute top-16 lg:top-20 left-4 lg:left-8 bg-yellow-300 rounded-full"></div>
            </div>
          </div>
          <div className="h-full gap-6 w-full p-4 lg:p-10   mt-20 lg:mt-2">
            {/* Tab Content */}
            <div>
              {activeTab === "about" && <About />}
              {activeTab === "skills" && <Skills />}
              {activeTab === "projects" && <Project />}
              {activeTab === "contact" && <Contact />}
              {activeTab === "blogs" && <p>Here are your blogs.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
