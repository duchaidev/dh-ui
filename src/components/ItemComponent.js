import React, { useState } from "react";
import EyeIcon from "./icons/EyeIcon";
import CopyIcon from "./icons/CopyIcon";
import ModalShowCode from "./ModalShowCode";
import HTMLReactParser from "html-react-parser";
import clipboardCopy from "clipboard-copy";
import { toast } from "react-toastify";

const ItemComponent = ({ htmlcode, author, namecode }) => {
  const [showModal, setShowModal] = useState(false);
  // console.log(htmlcode);
  // const createMarkup = () => {
  //   return { __html: htmlcode };
  // };

  const handleCopyCode = () => {
    clipboardCopy(htmlcode);
    toast.success("Copied to clipboard");
  };
  return (
    <div className="border col-span-1 border-secondary h-[380px] px-[4%] py-[6%]">
      <ModalShowCode
        showModal={showModal}
        setShowModal={setShowModal}
        htmlcode={htmlcode}
      ></ModalShowCode>
      <div className="flex items-center justify-between h-[10%]">
        <p className="flex items-center justify-center gap-1">
          <span className="text-[#4e5b6f]">Credit: </span>
          <span className="font-semibold text-[#96a1b0]">{author}</span>
        </p>
        <button
          className="flex items-center fill-[#CCCCCC] hover:fill-[#FFFFFF] justify-center p-[10px] cursor-pointer aspect-square rounded-full bg-[#090e19]"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <EyeIcon></EyeIcon>
        </button>
      </div>

      <div className="flex items-center justify-center h-[80%] w-full">
        <div
          className="max-w-[90%] max-h-[70%]"
          dangerouslySetInnerHTML={{ __html: htmlcode }}
        ></div>
      </div>
      <div className="flex items-center justify-between h-[10%]">
        <p className="flex items-center justify-center gap-1">
          <span className="font-semibold text-[#e7e7e7]">{namecode}</span>
        </p>
        <button
          className="flex items-center gap-2 hover:bg-[#11a384] transition-all hover:text-white text-[#6d798b] rounded-lg justify-center px-[12px] py-[10px] cursor-pointer stroke-[#6d798b] hover:stroke-[#fff]"
          onClick={handleCopyCode}
        >
          <CopyIcon></CopyIcon>
          <span className="font-medium ">TailwindCss</span>
        </button>
      </div>
    </div>
  );
};

export default ItemComponent;
