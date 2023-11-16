import React, { useState } from "react";

const styles = {
  tab: "text-white text-base font-medium cursor-pointer border-b-2 border-transparent  transition-all duration-300 ease-in-out pb-[10px] hover:text-[#abb4c4] px-1",
  activeTab: "!border-primary text-primary ",
};

const Tab = ({ tabs, activeTab, handleActiveTab }) => {
  return (
    <ul className="flex items-center gap-5 border-b border-secondary">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={`${styles.tab} ${
            activeTab === tab.id ? styles.activeTab : ""
          }`}
          onClick={() => handleActiveTab(tab.id)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default Tab;
