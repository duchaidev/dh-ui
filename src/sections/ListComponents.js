import React, { useEffect, useState } from "react";
import Tab from "../components/Tab";
import ItemComponent from "../components/ItemComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import dataComponent from "../data/dataComponent";
import typeComponents from "../data/typeComponent";
import { use } from "marked";

const ListComponents = () => {
  const [listComponent, setListComponent] = useState([]);
  // const [typeComponents, setTypeComponents] = useState([]);
  // const [htmlCodes, setHtmlCodes] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  //fetch type component
  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     const colRef = collection(db, "typeComponent");
  //     const docSnap = await getDocs(colRef);
  //     const result = [];
  //     docSnap.forEach((doc) => {
  //       result.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //     // Sắp xếp mảng theo trường 'type' theo thứ tự ABC
  //     result.sort((a, b) => a.type.localeCompare(b.type));
  //     setTypeComponents(result);
  //   };
  //   fetchCategory();
  // }, []);

  //fetch type component
  // useEffect(() => {
  //   const fetchCode = async () => {
  //     const colRef = collection(db, "code");
  //     const docSnap = await getDocs(colRef);
  //     const result = [];
  //     docSnap.forEach((doc) => {
  //       result.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //     // Sắp xếp mảng theo trường 'type' theo thứ tự ABC
  //     // result.sort((a, b) => a.type.localeCompare(b.type));

  //     setHtmlCodes(result);
  //   };
  //   fetchCode();
  // }, []);
  useEffect(() => {
    setListComponent(dataComponent);
  }, []);

  useEffect(() => {
    if (activeTab === "All") {
      setListComponent(dataComponent);
    } else {
      const result = dataComponent.filter((item) => item.type === activeTab);
      setListComponent(result);
    }
  }, [activeTab]);
  return (
    <div>
      <Tab
        tabs={typeComponents}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
      ></Tab>
      <div className="grid grid-cols-3 gap-10 pb-5 mt-6">
        {listComponent?.length > 0 &&
          listComponent.map((code, index) => (
            <p key={index}>
              <ItemComponent
                htmlcode={code?.htmlcode}
                author={code?.nameAuthor}
                namecode={code?.nameCode}
              ></ItemComponent>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ListComponents;
