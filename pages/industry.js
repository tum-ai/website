import Header2 from "../components/02_molecules/Header2.js"
import { useState } from "react";

export default function Industry() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <Header2
        imageSrc={"/assets/industry/industry_header.svg"}
      />
      <div>
        <ul className="flex border overflow-hidden">
          <li className={`${activeTab === "tab1" ? "w-3/5 z-10" : "w-2/5 z-0"} transform transition-all duration-150 ease-in-out`}>
            <button
              className={`w-full text-center px-4 py-2 font-bold text-lg rounded ${
                activeTab === "tab1" ? "bg-primary-600 text-white" : "bg-white text-primary-900"
              } transition-all duration-100`}
              onClick={() => setActiveTab("tab1")}
            >
              For Students
            </button>
          </li>
          <li className={`${activeTab === "tab2" ? "w-3/5 z-10" : "w-2/5 z-0"} transform transition-all duration-150 ease-in-out`}>
            <button
              className={`w-full text-center px-4 py-2 font-bold text-lg rounded ${
                activeTab === "tab2" ? "bg-primary-600 text-white" : "bg-white text-primary-900"
              } transition-all duration-100`}
              onClick={() => setActiveTab("tab2")}
            >
              For Industry
            </button>
          </li>
        </ul>
        <div className="pt-4">
          {activeTab === "tab1" && <p>Content for tab 1.</p>}
          {activeTab === "tab2" && <p>Content for tab 2.</p>}
          {activeTab === "tab3" && <p>Content for tab 3.</p>}
        </div>
      </div>
    </>
  );
}
