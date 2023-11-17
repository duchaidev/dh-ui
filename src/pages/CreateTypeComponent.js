import React, { useEffect, useState } from "react";
import { handleCopy } from "../utils";
import ItemComponent from "./../components/ItemComponent";
import { toast } from "react-toastify";
import { db } from "./../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const CreateTypeComponent = () => {
  const [content, setContent] = useState({
    name: "",
    htmlcode: "",
  });
  const [typeComponent, setTypeComponent] = useState("");
  const [typeComponents, setTypeComponents] = useState([]);

  //handle add type component
  const handleAddTypeComponent = async () => {
    if (typeComponent === "") {
      toast.error("Enter your category");
      return;
    }
    try {
      const colRef = collection(db, "typeComponent");
      await addDoc(colRef, {
        type: typeComponent,
      });
      toast.success("Successfully!!!");
      setTypeComponent("");
    } catch (err) {
      console.log(err);
      toast.error("False");
    }
  };

  //handle add code
  const handleAddCode = async () => {
    if (content.name === "" || content.htmlcode === "") {
      toast.error("Enter your name and code");
      return;
    }
    try {
      const colRef = collection(db, "code");
      await addDoc(colRef, {
        ...content,
      });
      toast.success("Successfully!!!");
      setContent({
        name: "",
        htmlcode: "",
      });
    } catch (err) {
      console.log(err);
      toast.error("False");
    }
  };

  //fetch type component
  useEffect(() => {
    const fetchCategory = async () => {
      const colRef = collection(db, "typeComponent");
      const docSnap = await getDocs(colRef);
      const result = [];
      docSnap.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      // Sắp xếp mảng theo trường 'type' theo thứ tự ABC
      result.sort((a, b) => a.type.localeCompare(b.type));

      setTypeComponents(result);
    };
    fetchCategory();
  }, []);

  console.log(typeComponents);
  return (
    <div className="bg-[#0f172a] flex items-center justify-center min-h-[100vh] min-w-[100vw] px-[10%] text-white overflow-hidden">
      <div
        // onClick={() => {
        //   handleCopy("1231223");
        // }}
        className="flex flex-col items-center justify-center w-full gap-3"
      >
        <h2 className="text-lg">Thêm loại ItemComponent</h2>
        <input
          type="text"
          onChange={(e) => {
            setTypeComponent(e.target.value);
          }}
          className="transition-all px-3 outline-none bg-[#0f172a] focus:border-primaryblack w-[300px] py-2 border rounded-md border-secondary"
          placeholder="Enter your type component"
        />
        <button
          className="px-3 py-2 transition-all rounded-md cursor-pointer hover:bg-primaryblack text-secondary bg-primary"
          onClick={handleAddTypeComponent}
        >
          Submit Type
        </button>
        <h2 className="mt-4 text-lg">Thêm Code</h2>
        <select
          name="type"
          id="type"
          className="transition-all px-3 outline-none bg-[#0f172a] focus:border-primaryblack w-[50%] py-2 border rounded-md border-secondary"
        >
          {typeComponents?.length > 0 &&
            typeComponents.map((item) => (
              <option value={item?.type} key={item?.id}>
                {item?.type}
              </option>
            ))}
        </select>
        <input
          type="text"
          onChange={(e) => {
            setContent({
              ...content,
              name: e.target.value,
            });
          }}
          className="transition-all px-3 outline-none bg-[#0f172a] focus:border-primaryblack w-[50%] py-2 border rounded-md border-secondary"
          placeholder="Enter your author"
        />
        <textarea
          name="code"
          id="code"
          onChange={(e) => {
            setContent({
              ...content,
              htmlcode: e.target.value,
            });
          }}
          placeholder="Enter your code"
          className="transition-all px-3 outline-none bg-[#0f172a] focus:border-primaryblack w-[50%] py-2 border rounded-md border-secondary"
          cols="30"
          rows="8"
        ></textarea>
        <button
          className="px-3 py-2 transition-all rounded-md cursor-pointer hover:bg-primaryblack text-secondary bg-primary"
          onClick={handleAddCode}
        >
          Submit Code
        </button>
      </div>
    </div>
  );
};

export default CreateTypeComponent;
