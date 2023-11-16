import React, { useState } from "react";
import Tab from "../components/Tab";
import ItemComponent from "../components/ItemComponent";

const tabs = [
  { id: "All", label: "All" },
  { id: "Animation", label: "Animation" },
  { id: "Button", label: "Button" },
  { id: "Card", label: "Card" },
  { id: "Form", label: "Form" },
  { id: "Modal", label: "Modal" },
  { id: "Navigation", label: "Navigation" },
  { id: "Table", label: "Table" },
  { id: "Typography", label: "Typography" },
];

const ListComponents = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleActiveTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <Tab
        tabs={tabs}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
      ></Tab>
      <div className="grid grid-cols-3 gap-10 pb-5 mt-6">
        <ItemComponent></ItemComponent>
      </div>
    </div>
  );
};

export default ListComponents;
